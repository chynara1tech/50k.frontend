function total_price() {
  let count_price = document.querySelectorAll(".info__price .oprice");

  let total_price = 0;

  for(var i = 0; i < count_price.length; i++) {
    total_price = total_price + (+count_price[i].textContent);
  }

  document.getElementsByClassName('total_cart')[0].innerHTML = `$ ${total_price}`;
  document.querySelectorAll('.shopcard__total span')[0].innerHTML = `$ ${total_price}`;
}

module.exports = total_price;