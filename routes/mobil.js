const express = require("express");
const router = express.Router();

const { itemfind, itemfindOne } = require("../controller/item");
const { txcreate } = require("../controller/transaction");

const { ensureAuthenticated } = require("../config/auth");

const Item = require('../models/Item');

const NameRegex = /^[a-zA-Z ]+$/;
const EmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PhoneRegex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;

router.get("/", (req, res) => {
    Item.find({ jenisKendaraan: "Mobil" }, function (err, items) {
        if (err) {
            res.render("listmobil", { logged: req.user != undefined });
        }
        res.render("listmobil", { logged: req.user != undefined, items });
    });
});

router.get("/:id", (req, res) => {
    let id = req.params['id'];


    Item.findOne({ jenisKendaraan: "Mobil", id: id }, function (err, item) {
        if (err) {
            res.render("listmobil", { logged: req.user != undefined }, err);
        }
        else if (!item) {
            res.redirect("/mobil");
        } else {
            res.render("mobil", { logged: req.user != undefined, item: item });
            // res.send('something');
        }
    });

});


router.get("/:id/rent", ensureAuthenticated, async (req, res) => {
    let id = req.params['id'];


    const item = await itemfindOne(id);

    if (!item) {
        res.redirect("/mobil");
    } else {
        res.render("formmobil", { logged: req.user != undefined, item: item, layout: false });
    }
});

// Ini routernya form
router.post("/:id/rent", ensureAuthenticated, async (req, res) => {
    const { fieldnama, noktp, emailaddr, notlp, datestart, dateend } = req.body;

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
        res.render("formmobil", { logged: req.user != undefined, item: item, layout: false, errors });
    }



    var datemulai = Date.parse(datestart);
    var dateselesai = Date.parse(dateend);

    var tot = await getDays(datemulai, dateselesai, item);

    var userid = req.userid;
    var motor = item.merk + " " + item.tipe + " (" + item.spesifikasi.tahun + ")";
    await txcreate(id, userid, Date.now(), fieldnama, noktp, emailaddr, notlp, datemulai, dateselesai, tot, motor);

    res.render("formmobil", { logged: req.user != undefined, layout: false, item: item, success_msg: item.merk + " " + item.tipe + " berhasil dipesan" });
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