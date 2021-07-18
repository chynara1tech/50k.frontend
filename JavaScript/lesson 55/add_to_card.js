//var ttl = document.getElementsByClassName("ttl");
//console.log(ttl[1].innerText);

//var ttl = document.querySelectorAll(".body_product > p");
//console.log(ttl);

//for (var text of ttl) {
  //  console.log(text.innerText);
//}

//var elements = document.getElementsByClassName("add_card");

//var myFunction = function() {
  //  var attrribute = this.querySelectorAll("ttl");
    //alert(attrribute[0].innerText);
//}

//for(var i = 0; i < elements.length; i++) {
  //  elements[i].addEventListener('click', myFunction, false);
//}


var bag_card = document.getElementsByClassName("bag_card");

var myBag = function(evt) {
    evt.preventDefault();
    
    var title = this.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".ttl");
    var price = this.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".price span");
    var image = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".img img");
    console.log(title[0].innerText);
    console.log(price[0].innerText);
    console.log(image[0].src);
};

for(var i = 0; i < bag_card.length; i++) {
  bag_card[i].addEventListener('click', myBag, false);
  
}
