const { Int32 } = require("bson");
const mongoose = require("mongoose");

mongoose.connect(
    require('../config/keys').MongoURI,
    { useNewUrlParser: true }
);
const db = mongoose.connection;


db.once("open", () => {
    console.log("Succesfully connected to MongoDb using Mongoose");
});

const itemscheme = mongoose.Schema({
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

const Item = mongoose.model("Item", itemscheme);

var item1 = new Item({
    id: "ymh001",
    merk: "yamaha",
    jenisKendaraan: "Motor",
    tipe: "Soul GT AKS SSS",
    spesifikasi: {
        Mesin: "125cc",
        tahun: "2019",
        kilometer: "180",
        detail: [
            "Warna: Hitam",
            "Mesin Blue Core 125cc",
            "Stop & Start System (SSS)",
            "Fitur Eksklusif dengan system otomatis",
            "Advanced Key System (AKS)",
            "Smart Lock System",
        ]
    },
    foto: [
        "yamaha/Yamaha Soul GT AKS SSS.png"
    ],
    harga: {
        harian: 80000,
        mingguan: 450000
    },
    special: false,
});

item1.save((error, saveDocument) => {
    if (error) console.log(error);
    console.log(saveDocument);
});


Item.create(
    {
        id: "ymh002",
        merk: "yamaha",
        jenisKendaraan: "Motor",
        tipe: "Xride",
        spesifikasi: {
            Mesin: "125cc",
            tahun: "2017",
            kilometer: "668",
            detail: [
                "Warna: Hitam",
                "Mesin Blue Core 125cc",
                "Answer Back System",
                "Speedometer with eco indicator",
                "Teknologi Diesil Cyclinder & Forged Piston"
            ]
        },
        foto: [
            "yamaha/Yamaha Xride.png"
        ],
        harga: {
            harian: 65000,
            mingguan: 350000
        },
        special: false
    },
    {
        id: "ymh003",
        merk: "yamaha",
        jenisKendaraan: "Motor",
        tipe: "Mio M3",
        spesifikasi: {
            Mesin: "125cc",
            tahun: "2020",
            kilometer: "28",
            detail: [
                "Warna: Merah",
                "Mesin Blue Core 125cc",
                "Tangki 4.2 L",
                "Smart Stand Side Switch"
            ]
        },
        foto: [
            "yamaha/Yamaha Mio M3.png"
        ],
        harga: {
            harian: 50000,
            mingguan: 280000
        },
        special: false
    },
    {
        id: "ymh004",
        merk: "yamaha",
        jenisKendaraan: "Motor",
        tipe: "Fino Sporty",
        spesifikasi: {
            Mesin: "125cc",
            tahun: "2019",
            kilometer: "200",
            detail: [
                "Warna: Putih",
                "Mesin Blue Core 125cc",
                "Stop & Start System (SSS)",
                "Advanced Key System (AKS)",
                "S Shape Design"
            ]
        },
        foto: [
            "yamaha/Yamaha Fino Sporty.png"
        ],
        harga: {
            harian: 60000,
            mingguan: 330000
        },
        special: false
    },
    {
        id: "ymh005",
        merk: "yamaha",
        jenisKendaraan: "Motor",
        tipe: "Aerox 155",
        spesifikasi: {
            Mesin: "155cc",
            tahun: "2018",
            kilometer: "348",
            detail: [
                "Warna: Abu-Abu",
                "New Generation 155CC LC4V Blue Core Engine",
                "LCD Display",
                "Electric Power Socket"
            ]
        },
        foto: [
            "yamaha/Yamaha Aerox 155.png"
        ],
        harga: {
            harian: 90000,
            mingguan: 550000
        },
        special: false
    },
    {
        id: "ymh006",
        merk: "yamaha",
        jenisKendaraan: "Motor",
        tipe: "Byson FI",
        spesifikasi: {
            Mesin: "150cc",
            tahun: "2015",
            kilometer: "800",
            detail: [
                "Warna: Merah",
                "Eco Friendly 150CC FI Engine",
                "Full Digital Multifunctional Speedometer",
                "Muscular Midship Muffler"
            ]
        },
        foto: [
            "yamaha/Yamaha Byson Fi.png"
        ],
        harga: {
            harian: 120000,
            mingguan: 680000
        },
        special: false
    },
    {
        id: "ymh007",
        merk: "yamaha",
        jenisKendaraan: "Motor",
        tipe: "NMax 155",
        spesifikasi: {
            Mesin: "155cc",
            tahun: "2018",
            kilometer: "347",
            detail: [
                "Warna: Merah",
                "Mesin Blue Core 155 VVA",
                "New Inverted LCD Digital Speedometer",
                "Variable Valves Actuation (VVA)",
                "Maximum Comfort"
            ]
        },
        foto: [
            "yamaha/Yamaha NMax 155.png"
        ],
        harga: {
            harian: 150000,
            mingguan: 780000
        },
        special: false
    },
    {
        id: "ymh008",
        merk: "yamaha",
        jenisKendaraan: "Motor",
        tipe: "Vixion R",
        spesifikasi: {
            Mesin: "155cc",
            tahun: "2016",
            kilometer: "497",
            detail: [
                "Warna: Merah",
                "Engine 155CC LC4V with VVA",
                "Monocross Suspension",
                "DeltaBox Frame"
            ]
        },
        foto: [
            "yamaha/Yamaha Vixion R.png"
        ],
        harga: {
            harian: 120000,
            mingguan: 680000
        },
        special: false
    },
    {
        id: "ymh009",
        merk: "yamaha",
        jenisKendaraan: "Motor",
        tipe: "YZF R15",
        spesifikasi: {
            Mesin: "155cc",
            tahun: "2018",
            kilometer: "128",
            detail: [
                "Warna: Biru",
                "Engine 155CC LC4V with VVA",
                "Full Digital Speedometer dan Shift Timing Light",
                "Forged Piston dan Diesil Cyclinder"
            ]
        },
        foto: [
            "yamaha/Yamaha YZF.png"
        ],
        harga: {
            harian: 200000,
            mingguan: 1100000
        },
        special: false
    },
    {
        id: "hnd001",
        merk: "Honda",
        jenisKendaraan: "Motor",
        tipe: "Scoopy",
        spesifikasi: {
            Mesin: "110cc",
            tahun: "2017",
            kilometer: "557",
            detail: [
                "Warna: Putih",
                "Memiliki Desain Elegan dan Klasik",
                "Irit Bahan Bakar",
                "Power Charger",
                "Combi Brake System",
                "Speedometer Modern"
            ]
        },
        foto: [
            "honda/Honda Scoopy.png"
        ],
        harga: {
            harian: 40000,
            mingguan: 300000
        },
        special: false
    },
    {
        id: "hnd002",
        merk: "Honda",
        jenisKendaraan: "Motor",
        tipe: "Supra X 125 FI",
        spesifikasi: {
            Mesin: "125cc",
            tahun: "2017",
            kilometer: "546",
            detail: [
                "Warna: Merah",
                "Motor yang tangguh",
                "Design yang modern"
            ]
        },
        foto: [
            "honda/Honda Supra X 125 FI.png"
        ],
        harga: {
            harian: 45000,
            mingguan: 320000
        },
        special: false
    },
    {
        id: "hnd003",
        merk: "Honda",
        jenisKendaraan: "Motor",
        tipe: "Vario",
        spesifikasi: {
            Mesin: "125cc",
            tahun: "2017",
            kilometer: "610",
            detail: [
                "Warna: Putih",
                "Desain Mewah",
                "Ruang Bagasi Luas",
                "Fitur Berlimpah"
            ]
        },
        foto: [
            "honda/Honda Vario 125.jpg"
        ],
        harga: {
            harian: 50000,
            mingguan: 320000
        },
        special: false
    },
    {
        id: "hnd004",
        merk: "Honda",
        jenisKendaraan: "Motor",
        tipe: "Beat",
        spesifikasi: {
            Mesin: "110cc",
            tahun: "2018",
            kilometer: "489",
            detail: [
                "Warna: Merah",
                "Mesin Generasi Terbaru",
                "Irit Bahan Bakar",
                "Body Lebih Sporty",
                "Fitur yang Canggih"
            ]
        },
        foto: [
            "honda/Honda beat.jpg"
        ],
        harga: {
            harian: 55000,
            mingguan: 350000
        },
        special: false
    },
    {
        id: "hnd005",
        merk: "Honda",
        jenisKendaraan: "Motor",
        tipe: "PCX Hybrid",
        spesifikasi: {
            Mesin: "150cc",
            tahun: "2019",
            kilometer: "231",
            detail: [
                "Warna: Biru Tua",
                "Memiliki system motor assist",
                "Tenaga dan torsi bertambah",
                "Efisiensi bahan  bakar lebih irit 3 persen",
                "Punya 3 driving mode"
            ]
        },
        foto: [
            "honda/Honda PCX Hybrid.png"
        ],
        harga: {
            harian: 80000,
            mingguan: 480000
        },
        special: false
    },
    {
        id: "hnd006",
        merk: "Honda",
        jenisKendaraan: "Motor",
        tipe: "Forza",
        spesifikasi: {
            Mesin: "250cc",
            tahun: "2018",
            kilometer: "148",
            detail: [
                "Warna : Putih",
                "Desain Mewah",
                "Mesin bertenaga",
                "Electric windshield",
                "Speedometer dengan multi information display(MID)"
            ]
        },
        foto: [
            "honda/Honda Forza.png"
        ],
        harga: {
            harian: 80000,
            mingguan: 480000
        },
        special: false
    },
    {
        id: "hnd007",
        merk: "Honda",
        jenisKendaraan: "Motor",
        tipe: "ADV150",
        spesifikasi: {
            Mesin: "150cc",
            tahun: "2018",
            kilometer: "196",
            detail: [
                "Warna: Hitam",
                "Memiliki Kokpit yang luas",
                "Mesin khas motor adventure"
            ]
        },
        foto: [
            "honda/Honda ADV 150.png"
        ],
        harga: {
            harian: 70000,
            mingguan: 440000
        },
        special: false
    },
    {
        id: "hnd008",
        merk: "Honda",
        jenisKendaraan: "Motor",
        tipe: "CB150 Verza",
        spesifikasi: {
            Mesin: "150cc",
            tahun: "2019",
            kilometer: "85",
            detail: [
                "Warna: Hitam",
                "Tampang Baru",
                "Lincah dan Tangguh"
            ]
        },
        foto: [
            "honda/Honda CB150 Verza.png"
        ],
        harga: {
            harian: 120000,
            mingguan: 700000
        },
        special: false
    },
    {
        id: "hnd009",
        merk: "Honda",
        jenisKendaraan: "Motor",
        tipe: "CBR 150 R",
        spesifikasi: {
            Mesin: "150cc",
            tahun: "2019",
            kilometer: "38",
            detail: [
                "Warna: Merah",
                "Desain yang modern",
                "Mesin berkapasitas 150CC"
            ]
        },
        foto: [
            "honda/Honda CBR 150 R.png"
        ],
        harga: {
            harian: 200000,
            mingguan: 1100000
        },
        special: false
    },
    {
        id: "szk001",
        merk: "Suzuki",
        jenisKendaraan: "Motor",
        tipe: "Smash FI",
        spesifikasi: {
            Mesin: "110cc",
            tahun: "2018",
            kilometer: "221",
            detail: [
                "Warna: Biru",
                "Mesin Tangguh",
                "Bobot ringan",
                "Kunci kontak dengan pengaman"
            ]
        },
        foto: [
            "suzuki/Suzuki Smash FI.png"
        ],
        harga: {
            harian: 40000,
            mingguan: 220000
        },
        special: false
    },
    {
        id: "szk002",
        merk: "Suzuki",
        jenisKendaraan: "Motor",
        tipe: "Nex II cross",
        spesifikasi: {
            Mesin: "115cc",
            tahun: "2016",
            kilometer: "473",
            detail: [
                "Warna: Kuning",
                "Tampilan bodi yang keren",
                "Memiliki sejumlah fitur yang menarik",
                "Menggunakan teknologi Suzuki Eco Perfomance (SEP)"
            ]
        },
        foto: [
            "suzuki/Suzuki Nex II cross.png"
        ],
        harga: {
            harian: 45000,
            mingguan: 260000
        },
        special: false
    },
    {
        id: "szk003",
        merk: "Suzuki",
        jenisKendaraan: "Motor",
        tipe: "Satria F150",
        spesifikasi: {
            Mesin: "150cc",
            tahun: "2017",
            kilometer: "374",
            detail: [
                "Warna: Biru Tua",
                "Bobot ringan",
                "Speedometer digital"
            ]
        },
        foto: [
            "suzuki/Suzuki satria F150.png"
        ],
        harga: {
            harian: 80000,
            mingguan: 500000
        },
        special: false
    },
    {
        id: "szk004",
        merk: "Suzuki",
        jenisKendaraan: "Motor",
        tipe: "GSX150 Bandit",
        spesifikasi: {
            Mesin: "150cc",
            tahun: "2018",
            kilometer: "239",
            detail: [
                "Warna: Abu-Abu",
                "Design All-round",
                "Mesin 150CC"
            ]
        },
        foto: [
            "suzuki/Suzuki GSX150 Bandit.jpg"
        ],
        harga: {
            harian: 100000,
            mingguan: 550000
        },
        special: false
    },
    {
        id: "szk005",
        merk: "Suzuki",
        jenisKendaraan: "Motor",
        tipe: "GSX-S150",
        spesifikasi: {
            Mesin: "150cc",
            tahun: "2018",
            kilometer: "203",
            detail: [
                "Warna: Abu-Abu",
                "Performa mesin yang bagus",
                "Menggunakan LED",
                "Tangki BBM besar"
            ]
        },
        foto: [
            "suzuki/Suzuki GSX-S150.jpg"
        ],
        harga: {
            harian: 150000,
            mingguan: 750000
        },
        special: false
    },
    {
        id: "hly001",
        merk: "Harley Davidson",
        jenisKendaraan: "Motor",
        tipe: "Street Bob",
        spesifikasi: {
            Mesin: "1745cc",
            tahun: "2018",
            kilometer: "35",
            detail: [
                "Warna: Hitam",
                "Mesin Milwaukee-Eight 107",
                "Rangka Softail",
                "Gaya Raw Bobber sederhana",
                "Teknologi Minimalis dan Modern",
                "Mono Shock berperforma tinggi"
            ]
        },
        foto: [
            "harleydavidson/street bob.jpg"
        ],
        harga: {
            harian: 15000000
        },
        special: true
    },
    {
        id: "hly002",
        merk: "Harley Davidson",
        jenisKendaraan: "Motor",
        tipe: "Fat Bob",
        spesifikasi: {
            Mesin: "1868cc",
            tahun: "2018",
            kilometer: "28",
            detail: [
                "Warna: Hitam",
                "Desain baru sangat revolusioner",
                "Penggunaan mesin Milwaukee-Eight 117 bertorsi besar",
                "Penggunaan pelek besar futuristik tanpa menghilangkan desain khas Fat Boy"
            ]
        },
        foto: [
            "harleydavidson/Fat Boy.jpg"
        ],
        harga: {
            harian: 15000000
        },
        special: true
    },
    {
        id: "hly003",
        merk: "Harley Davidson",
        jenisKendaraan: "Motor",
        tipe: "Forty-Eight",
        spesifikasi: {
            Mesin: "1202cc",
            tahun: "2018",
            kilometer: "20",
            detail: [
                "Warna: Hitam",
                "Suara mesin dua silinder khas Harley Davidson",
                "Desain bagus dan mudah disukai"
            ]
        },
        foto: [
            "harleydavidson/Forty-eight.jpg"
        ],
        harga: {
            harian: 20000000
        },
        special: true
    },
    {
        id: "hly004",
        merk: "Harley Davidson",
        jenisKendaraan: "Motor",
        tipe: "Ultra",
        spesifikasi: {
            Mesin: "1923cc",
            tahun: "2018",
            kilometer: "12",
            detail: [
                "Warna: Hitam",
                "Fitur untuk kebutuhan touring sangat melimpah",
                "Model modern dengan sedikit sentuhan klasik yang menarik",
                "Penggunaan mesin 1.923 cc yang menghasilkan torsi besar",
                "Lampu sudah LED"
            ]
        },
        foto: [
            "harleydavidson/Ultra.jpg"
        ],
        harga: {
            harian: 50000000
        },
        special: true
    },
    {
        id: "tyt001",
        merk: "Toyota",
        jenisKendaraan: "Mobil",
        tipe: "Innova",
        spesifikasi: {
            Mesin: "1998cc",
            tahun: "2020",
            kilometer: "67",
            detail: [
                "Warna: Putih",
                "Pengembangan model Innova terbaru",
                "Fitur keselamatan yang canggih dan terbaru",
                "Kabin yang luas"
            ]
        },
        foto: [
            "toyota/Toyota Innova.png",
        ],
        harga: {
            harian: 400000,
            mingguan: 2300000
        },
        special: false
    },
    {
        id: "tyt002",
        merk: "Toyota",
        jenisKendaraan: "Mobil",
        tipe: "Corolla Altis",
        spesifikasi: {
            Mesin: "1789cc",
            tahun: "2019",
            kilometer: "53",
            detail: [
                "Warna: Putih",
                "Tampilan eksterior yang sporty dan mewah",
                "Fitur – fitur mobil yang cukup lengkap",
                "Interior yang nyaman dan mewah",
                "Kabin yang sangat luas"
            ]
        },
        foto: [
            "toyota/Toyota Corolla Altis.jpg",
        ],
        harga: {
            harian: 400000,
            mingguan: 2200000
        },
        special: false
    },
    {
        id: "tyt003",
        merk: "Toyota",
        jenisKendaraan: "Mobil",
        tipe: "Rush",
        spesifikasi: {
            Mesin: "1500cc",
            tahun: "2019",
            kilometer: "202",
            detail: [
                "Warna: Putih",
                "Fitur standar untuk kenyamanan penumpang",
                "Sistem suspensi terbaru",
                "Mesin 2NR-VE",
                "Sistem pengereman yang canggih"
            ]
        },
        foto: [
            "toyota/Toyota Rush.jpg"
        ],
        harga: {
            harian: 600000,
            mingguan: 3500000
        },
        special: false
    },
    {
        id: "tyt004",
        merk: "Toyota",
        jenisKendaraan: "Mobil",
        tipe: "Yaris",
        spesifikasi: {
            Mesin: "1496cc",
            tahun: "2019",
            kilometer: "123",
            detail: [
                "Warna: Putih",
                "Model hatchback bernuansa sporty",
                "Memiliki teknologi yang canggih",
                "Sistem keamanan yang lengkap"
            ]
        },
        foto: [
            "toyota/Toyota Yaris.jpg"
        ],
        harga: {
            harian: 350000,
            mingguan: 2000000
        },
        special: false
    },
    {
        id: "dhs001",
        merk: "Daihatsu",
        jenisKendaraan: "Mobil",
        tipe: "Ayla",
        spesifikasi: {
            Mesin: "1000cc",
            tahun: "2018",
            kilometer: "1452",
            detail: [
                "Warna: Orange",
                "Peningkatan fitur Ayla yang kini lebih fungsional dan tepat guna"
            ]
        },
        foto: [
            "daihatsu/Daihatsu Ayla.jpg"
        ],
        harga: {
            harian: 350000,
            mingguan: 2200000
        },
        special: false
    },
    {
        id: "dhs002",
        merk: "Daihatsu",
        jenisKendaraan: "Mobil",
        tipe: "Sigra",
        spesifikasi: {
            Mesin: "998cc",
            tahun: "2018",
            kilometer: "2538",
            detail: [
                "Warna: Biru",
                "Memiliki fitur keselamatan yang lengkap",
                "Dimensi mobil yang ringkas",
                "Terdapat sistem multimedia layar sentuh"
            ]
        },
        foto: [
            "daihatsu/Daihatsu Sigra.jpg"
        ],
        harga: {
            harian: 480000,
            mingguan: 2600000
        },
        special: false
    },
    {
        id: "dhs003",
        merk: "Daihatsu",
        jenisKendaraan: "Mobil",
        tipe: "Terios",
        spesifikasi: {
            Mesin: "1496cc",
            tahun: "2019",
            kilometer: "1102",
            detail: [
                "Warna: Putih",
                "Desain baru lebih segar",
                "Varian lumayan banyak",
                "Mesin baru yang lebih canggih",
                "AC double blower"
            ]
        },
        foto: [
            "daihatsu/Daihatsu Terios.jpg"
        ],
        harga: {
            harian: 650000,
            mingguan: 3800000
        },
        special: false
    },
    {
        id: "dhs004",
        merk: "Daihatsu",
        jenisKendaraan: "Mobil",
        tipe: "Xenia",
        spesifikasi: {
            Mesin: "1300cc",
            tahun: "2018",
            kilometer: "2276",
            detail: [
                "Warna: Putih",
                "Memiliki desain yang elegan",
                "Memiliki ruang yang luas"
            ]
        },
        foto: [
            "daihatsu/Daihatsu Xenia.jpg"
        ],
        harga: {
            harian: 650000,
            mingguan: 3800000
        },
        special: false
    },
    {
        id: "mcd001",
        merk: "Mercedes",
        jenisKendaraan: "Mobil",
        tipe: "A Class A-200",
        spesifikasi: {
            Mesin: "1796cc",
            tahun: "2018",
            kilometer: "1425",
            detail: [
                "Warna: Putih",
                "Memiliki fitur Artificial Intelligence",
                "Widescreen Cockpit resolusi tinggi",
                "Memiliki Intelligent Drive"
            ]
        },
        foto: [
            "mercedes/Mecedes A Class A-200.jpg"
        ],
        harga: {
            harian: 600000,
            mingguan: 3700000
        },
        special: false
    },
    {
        id: "mcd002",
        merk: "Mercedes",
        jenisKendaraan: "Mobil",
        tipe: "Mercedes C-Class",
        spesifikasi: {
            Mesin: "1991cc",
            tahun: "2018",
            kilometer: "296",
            detail: [
                "Warna: Putih",
                "Interior mewah Fitur",
                "Sistem keselamatan yang canggih",
                "Performa telah ditingkatkan"
            ]
        },
        foto: [
            "mercedes/Mercedes C-Class.jpeg"
        ],
        harga: {
            harian: 630000,
            mingguan: 3800000
        },
        special: false
    },
    {
        id: "mcd003",
        merk: "Mercedes",
        jenisKendaraan: "Mobil",
        tipe: "GLE 4Matic Coupe",
        spesifikasi: {
            Mesin: "2996cc",
            tahun: "2019",
            kilometer: "164",
            detail: [
                "Warna: Putih",
                "Desain eksterior gagah dan sporty",
                "Interior nyaman dan mewah dengan opsi bari ketiga",
                "Bahan bakar efisien",
                "Suspensi udara baru untuk pengendaraan mulus"
            ]
        },
        foto: [
            "mercedes/Mercedes GLE 4Matic Coupe.jpeg"
        ],
        harga: {
            harian: 800000,
            mingguan: 4500000
        },
        special: false
    },
    {
        id: "mcd004",
        merk: "Mercedes",
        jenisKendaraan: "Mobil",
        tipe: "S Class Sedan",
        spesifikasi: {
            Mesin: "2000cc",
            tahun: "2019",
            kilometer: "324",
            detail: [
                "Warna: Hitam",
                "Sistem Keamanan yang canggih",
                "Desain yang elegan"
            ]
        },
        foto: [
            "mercedes/Mercedes S-class Sedan.jpeg"
        ],
        harga: {
            harian: 1000000,
            mingguan: 6800000
        },
        special: false
    },

    function (error, saveDocument) {
        if (error) console.log(error);
        console.log(saveDocument);
    }
);




// mongoose.connection.close();