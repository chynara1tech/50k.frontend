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
  var price = this.parentNode.parentNode.parentNode.querySelectorAll(".price .oprice");
  var image = this.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".img img");
  
  var create_li = document.createElement('li');
  create_li.classList.add("bag__item");
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
                              <span class="currency">$</span>\
                              <span class="oprice">'+price[0].innerText+'</span>\
                              </div>\
                              <div class="trash">\
                                  <a href="?search#"><i class="far fa-trash-alt"></i></a>\
                              </div>\
                          </div>';

  let block_cart = document.querySelector('.bag.shopcard__dropdown ul');
  block_cart.appendChild(create_li);
  
  alert("Товары успешно добавлены в корзину");

  // Удаление товара

  delete_product();

  //  получить общее количество суммы товаров в корзине

  total_price();

  // получить количество товаров в корзине

  count_product();

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

function delete_product() {

  let click_trash = document.querySelectorAll(".trash");

  for (var i = 0; i < click_trash.length; i++) {
    click_trash[i].addEventListener('click', del_func, false);
  }

  function del_func(evt) {
    evt.preventDefault();
    this.parentNode.parentNode.remove();

    total_price();
    count_product();
  }

}

function total_price() {
  let count_price = document.querySelectorAll(".info__price .oprice");

  let total_price = 0;

  for(var i = 0; i < count_price.length; i++) {
    total_price = total_price + (+count_price[i].textContent);
  }

  document.getElementsByClassName('total_cart')[0].innerHTML = `$ ${total_price}`;
  document.querySelectorAll('.shopcard__total span')[0].innerHTML = `$ ${total_price}`;
}




function update_count() {
  let count_product_in_cart = 0;

  let count_product = document.querySelectorAll("info__price span");

  for(var i = 0; i < count_product.length; i++) {
    count_product_in_cart = count_product_in_cart + +count_product[i].textContent;
  }

  console.log(count_product_in_cart);

}


function count_product() {
  let count_product = document.getElementsByClassName("bag__item").length;
  document.getElementsByClassName("cart_count")[0].innerHTML = count_product;
}


const tabs = {
  list_tabs: [
    "Лидеры продаж",
    "Новинки",
    "Распродажа"
  ]
};

let create_ul = document.createElement("ul");

tabs.list_tabs.forEach((item, i) => {
  create_ul.innerHTML += `<li>${item}</li>`;
});

document.querySelector(".insert_listing").innerHTML += create_ul.outerHTML;