const express = require("express");
const router = express.Router();

const { itemfind, itemfindOne } = require("../controller/item");
const { txcreate } = require("../controller/transaction");


const { ensureAuthenticated } = require("../config/auth");

const NameRegex = /^[a-zA-Z ]+$/;
const EmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PhoneRegex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;


router.get("/", async (req, res) => {
    const items = await itemfind("Motor");
    if (items == undefined) {
        res.render("listmotor", { logged: req.user != undefined });
    } else {
        res.render("listmotor", { logged: req.user != undefined, items: items });
    }
});

router.get("/:id", async (req, res) => {
    let id = req.params['id'];

    const item = await itemfindOne(id);

    if (!item) {
        res.redirect("/motor");
    } else {
        res.render("motor", { logged: req.user != undefined, item: item });
    }
});

router.get("/:id/rent", ensureAuthenticated, async (req, res) => {
    let id = req.params['id'];

    const item = await itemfindOne(id);

    if (!item) {
        res.redirect("/motor");
    } else {
        res.render("formmotor", { logged: req.user != undefined, item: item, layout: false });
    }
});

// Ini routernya form
router.post("/:id/rent", ensureAuthenticated, async (req, res) => {
    const { fieldnama, noktp, emailaddr, notlp, datestart, dateend, harga } = req.body;

    let id = req.params['id'];

    errors = [];

    const item = await itemfindOne(id);

    if (!item) {
        errors.push({ msg: "Id Kendaraan Tidak Valid" });
    }


    if (noktp.length != 16) {
        errors.push({ msg: "Nomor NIK tidak valid" });
    }

    if (!NameRegex.test(String(fieldnama))) {
        errors.push({ msg: "Nama tidak valid" });
    }

    if (!EmailRegex.test(String(emailaddr).toLocaleLowerCase())) {
        errors.push({ msg: "Email tidak valid" });
    }

    if (!PhoneRegex.test(String(notlp))) {
        errors.push({ msg: "Nomor Telepon tidak valid" });
    }

    if (!(Date.parse(datestart) > Date.now())) {
        errors.push({ msg: "Tidak dapat memilih tanggal yang sudah berlalu" });
    }

    if ((Date.parse(datestart) >= Date.parse(dateend))) {
        errors.push({ msg: "tanggal pengembalian lebih kecil dari peminjaman" });
    }

    if (errors.length > 0) {
        res.render("formmotor", { logged: req.user != undefined, item: item, layout: false, errors });
    }

    var datemulai = Date.parse(datestart);
    var dateselesai = Date.parse(dateend);

    var tot = await getDays(datemulai, dateselesai, item);

    var userid = req.userid;
    var motor = item.merk + " " + item.tipe + " (" + item.spesifikasi.tahun + ")";
    await txcreate(id, userid, Date.now(), fieldnama, noktp, emailaddr, notlp, datemulai, dateselesai, tot, motor);

    res.render("formmotor", { logged: req.user != undefined, layout: false, item: item, success_msg: item.merk + " " + item.tipe + " berhasil dipesan" });
});

async function getDays(start, end, item) {
    var Difference_In_Time = start - end;
    var Difference_In_Days = Math.abs(Difference_In_Time / (1000 * 3600 * 24));

    var tot = 0;

    if (Difference_In_Days > 7) {
        tot = tot + Math.floor(Difference_In_Days / 7) * item.harga.mingguan;
    }

    tot = tot + (Difference_In_Days % 7) * item.harga.harian;

    return tot;
}

module.exports = router;