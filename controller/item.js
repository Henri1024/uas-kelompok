const Item = require('../models/Item');

async function itemfindOne(id) {
    return await Item.findOne({ id: id });
}

async function itemfind(jenisKendaraan) {
    return await Item.find({ jenisKendaraan: "Motor" });
}

module.exports = {
    itemfindOne,
    itemfind
};