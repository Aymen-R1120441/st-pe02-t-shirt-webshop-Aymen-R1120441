const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
 const faqs = [
{
  question: "How long do deliveries take?",
  answer: "Delivery takes 3-5 business days. Except with our next day delivery package for only €5.99!"

},
{
  question: "Do you need an account to use this site?",
  answer: "No, you don't need a site to create your own designs! However if you want to save or order your designs you have to make an account."

},
{
  question: "Why was my creation removed from public templates?",
  answer: "We have strict guidelines of what not to put on our t-shirts. If your design was removed it wasn't following our rules."

},
{
  question: "Is there a physical store?",
  answer: "As of today there is not a physical store yet. We do offer shipping to almost any country!"

}

 ];
 const reviews = [
{

title:"Great product",
text:"Great material, fast delivery Iam satisfied.",
stars:"⭐⭐⭐⭐⭐",
user:"Robert Daniels  ",
date:"16/10/2024",
image:"images/profile-1.jpg",


},
{

title:"Cool site",
text:"Site is ait but I don't feel like giving five stars.",
stars:"⭐⭐⭐⭐",
user:"ChilldDude32",
date:"16/10/2024",
image:"/images/profile-2.jpg",
},
{

title:"Very professional",
text:"Very conveniant, easy to use and above all else has many tools to let creativity bloom.",
stars:"⭐⭐⭐⭐⭐",
user:"Sylvie Lefranc",
date:"16/10/2024",
image:"images/profile-3.jpg",

}


 ]





  res.render("index", { title: "Custom T-shirtzzz home" ,
    faqs: faqs,
    reviews: reviews


  });
});

module.exports = router;
