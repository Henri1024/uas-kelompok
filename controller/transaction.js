const Transaction = require("../models/Transaction");

async function txcreate(iditem, idUser, tanggalPesan, fieldnama, noktp, emailaddr, notlp, datestart, dateend, tot, motor) {

    console.log(tot);

    return await Transaction.create({
        idUser: idUser,
        idItem: iditem,
        tanggalPesan: tanggalPesan,
        mulai: datestart,
        berakhir: dateend,
        harga: tot,
        namaPemesan: fieldnama,
        ktpPemesan: noktp,
        emailPemesan: emailaddr,
        noPemesan: notlp,
        motor: motor
    });
}

async function txfind(id) {
    return await Transaction.find({ idUser: id });
}



module.exports = {
    txcreate,
    txfind
};