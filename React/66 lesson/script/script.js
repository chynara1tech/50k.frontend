import $ from 'jquery';

(function () {
  
  const get_list_product = require("/module/get_list_product"),
    add_to_card = require("./module/add_to_card"),
    count_product = require("./module/count_product"),
    delete_product = require("./module/delete_product"),
    total_price = require("./module/total_price");

  get_list_product();
  // add_to_card();
  // count_product();
  // delete_product();
  // total_price();
  add_to_card(delete_product, total_price, count_product);
  
}());

$(document).ready(function () {
//  $("h2").text()
  
  $('#accordeon .acc-head').on('click', function () {

    $('#accordeon .acc-body').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(1000);

  });
  

});

