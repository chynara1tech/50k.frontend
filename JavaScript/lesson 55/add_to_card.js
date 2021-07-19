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
    
    // var title = this.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".ttl");
    // var price = this.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".price span");
    // var image = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".img img");
    // console.log(title[0].innerText);
    // console.log(price[0].innerText);
    // console.log(image[0].src);
};

for(var i = 0; i < bag_card.length; i++) {
  bag_card[i].addEventListener('click', myBag, false);
  
}


// Добавляю товары в корзину. 33-урок.

let class_name = document.getElementsByClassName('add_card');
var myFunction = function(evt) {
  evt.preventDefault();
  var title = this.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".ttl");
  var price = this.parentNode.parentNode.parentNode.querySelectorAll(".price span");
  var image = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".img img");
  
  var create_li = document.createElement('li');
  // console.log(title[0].innerText);
  // console.log(price[0].innerText);
  // console.log(image[0]);
 
  create_li.innerHTML ='<div class="bag__img">\
                              <a href="?search#">\
                                  <img src="'+image[0].src+'" alt="">\
                              </a>\
                          </div>\
                          <div class="bag__info">\
                              <p class="info__title"><a href="?search#">'+title[0].innerText+'</a></p>\
                              <div class="info__price">\
                                  <span>'+price[0].innerText+'</span>\
                              </div>\
                              <div class="trash">\
                                  <a href="?search#"><i class="far fa-trash-alt"></i></a>\
                              </div>\
                          </div>';

  let block_cart = document.querySelector('.bag.shopcard__dropdown ul');
  block_cart.appendChild(create_li);
  
  alert("Товары успешно добавлены в корзину");

};



//console.log(class_name);

for (var i = 0; i < class_name.length; i++) {
  class_name[i].addEventListener('click', myFunction, false);
  // addEventListener - добавляем событие клика
  // ('click', myFunction, false)
  // тип события
  // Что должно выполнится
  // Обработчик
}