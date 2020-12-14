const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");

const passport = require("passport");

const { txfind } = require("../controller/transaction");
const { itemfindOne } = require("../controller/item");

const { ensureAuthenticated } = require("../config/auth");

//user model
const User = require("../models/User");
const { use } = require("./motor");

router.get("/transaksi", ensureAuthenticated, async (req, res) => {
  var userid = req.userid;
  var histories = await txfind(userid);

  res.render("history", { logged: req.user != undefined, layout: true, histories: histories.reverse() });

});

router.get("/login", (req, res) => {
  if (req.user) {
    return res.redirect('/');
  }
  res.render("login", { layout: false });
});

router.get("/register", (req, res) => {
  if (req.user) {
    return res.redirect('/');
  }
  res.render("register", { layout: false });
});

//register post

router.post("/register", (req, res) => {
  const { name, email, password, password2 } = req.body;
  let errors = [];

  let mailre = /^[a-zA-Z0-9.!#$%&' * +/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  //cek required
  if (!name || !email || !password || !password2) {
    errors.push({ msg: "harap data di input semua" });
  }

  //password
  if (password !== password2) {
    errors.push({ msg: "password tidak sama" });
  }

  if (password.length < 6 || password.length > 12) {
    errors.push({ msg: "password harus 6 - 12 karakter" });
  }
  if (name.length < 2 || name.length > 50) {
    errors.push({ msg: "nama harus 2 - 50 karakter" });
  }

  if (!email.match(mailre)) {
    errors.push({ msg: "email tidak valid" });
  }

  if (errors.length > 0) {
    res.render("register", {
      errors,
      name,
      email,
      password,
      password2,
      layout: false
    });
  } else {
    //validasi oke lanjut database
    User.findOne({ email: email }).then((user) => {
      if (user) {
        //usernya ada
        errors.push({ msg: "Email sudah terdaftar" });
        res.render("register", {
          errors,
          name,
          email,
          password,
          password2,
          layout: false
        });
      } else {
        const newUser = new User({
          name,
          email,
          password,
        });
        //hash password
        bcrypt.genSalt(10, (err, salt) =>
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            //set password jadi hash
            newUser.password = hash;

            //simpan user
            newUser
              .save()
              .then((user) => {
                req.flash(
                  "success_msg",
                  "Anda berhasil registrasi, Silahkan Login"
                );

                res.redirect("/user/login");
              })
              .catch((err) => console.log(err));
          })
        );
      }
    });
  }
});

//login handle
router.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/user/login",
    failureFlash: true,
  })(req, res, next);
});

//logout handle
router.get("/logout", (req, res) => {
  req.logout();
  req.flash("success_msg", "Anda berhasil Log out");
  res.redirect("/user/login");
});



module.exports = router;
