const mongoose = require('mongoose');

const Transaction = mongoose.Schema({
    id: String,
    idUser: String,
    idItem: String,
    tanggalPesan: Date,
    mulai: Date,
    berakhir: Date,
    harga: Number,
    namaPemesan: String,
    ktpPemesan: String,
    emailPemesan: String,
    noPemesan: String,
    motor: String,
});

module.exports = mongoose.model('Transaksi', Transaction);
