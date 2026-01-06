const express = require("express");
const router = express.Router();
const tshirts = require("../data/tshirts");


/* GET users listing. */
router.get("/", function(req, res, next) {
  res.render("tshirts",{
title: "Custom-Shirtzzz T-shirts",
tshirts: tshirts.getAllTshirts()


  } );
});

router.get("/edit/:name", function(req, res, next) {
  res.render("tshirtsEdit",{
title: "Custom-Shirtzzz Edit T-shirts",
tshirt: tshirts.getTshirtByName(req.params.name) 
  });
});


router.get("/add", function(req, res, next) {
  res.render("tshirtsAdd",{
title: "Custom-Shirtzzz Add T-shirts"
  });
});





module.exports = router;
