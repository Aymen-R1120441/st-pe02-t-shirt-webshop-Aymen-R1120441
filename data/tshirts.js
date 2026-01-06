const tshirts = [

{
"name":"Basic T-shirt" ,
"image":"/images/basic-shirt.png" ,
"price": "$0"

},
{
"name":"Girly cut" ,
"image":"/images/girly-cut.png" ,
"price": "$0"

},
{
"name":"Boxy T-shirt" ,
"image":"/images/boxy-shirt.png" ,
"price": "$0"

},
{
"name":"Crop top" ,
"image":"/images/crop-top.png" ,
"price": "$0"

},
{
"name":"Baby T-shirt" ,
"image":"/images/baby-shirt.png" ,
"price": "$0"

},
{
"name":"Children T-shirt" ,
"image":"/images/basic-shirt.png" ,
"price": "$0"

},

];


function getAllTshirts(){
return tshirts;
}

function getTshirtByName(name){
return tshirts.find(t => t.name === name);
}

module.exports = {
    getAllTshirts,
getTshirtByName

}