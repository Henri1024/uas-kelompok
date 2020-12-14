const express = require("express");
const router = express.Router();

//dasboard
router.get("/", (req, res) => {
  res.render("dashboard", {
    logged: req.user != undefined
  });
}
);

router.get("/aboutus", (req, res) => res.render("aboutus", { logged: req.user != undefined }));

module.exports = router;
