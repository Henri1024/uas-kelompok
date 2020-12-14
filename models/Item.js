const mongoose = require('mongoose');

const Item = mongoose.Schema({
    id: String,
    kapasitas: Number,
    merk: String,
    tipe: String,
    jenisKendaraan: String,
    spesifikasi: {
        mesin: String,
        tahun: Number,
        kilometer: Number,
        detail: [String]
    },
    foto: [String],
    harga: {
        harian: Number,
        mingguan: Number
    },
    spesial: Boolean
});

module.exports = mongoose.model('Item', Item);
