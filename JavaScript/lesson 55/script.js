

//Базовые функции. Взаимодействие с пользователем

//console.log("Сообщение"); //данная команда нужна для того чтобы вывести сообщение вконсоли
//alert("Привет гость!"); // Модальное окноб системное - дизайн изменить нельзя!
 //var years = prompt("Сколько вам лет?", 100)
 //alert("Вам " + years + " лет");

 //var result = prompt("Сколько будет 2 + 2 ?", "");

 // Promt - состоит из двух частей 
 // 1 часть - вопрос
 // 2 часть - ответ по умолчанию

 // promt  - запоминает введенные данные для дальнейшей обработки
 //result = result + 2;
 //alert("Вам " + result + " лет");

 //var msg;
 //if(result == "4") {
     //msg = "Верно";
 //}else {
   //  msg = "Неверно";
// }

 //alert(msg);

 //var elements = document.getElementsByClassName("add_card");

//var myFunction = function() {
  //  var attrribute = this.parentNode.parentNode.parentNode.querySelectorAll(".body_product > p");
    //alert(attrribute[0].innerText);
//};

//for(var i = 0; i < elements.length; i++) {
  //  elements[i].addEventListener('click', myFunction, false);
//}  



//var title = document.getElementsByClassName("ttl");
  //  console.log(title)




// 34 - lesson

  //const arr2 = [1, 2, 3, 4, 5];

  //arr2.pop(); // извлекает из конца - [1, 2, 3, 4]
  //console.log(arr2);
  
  //arr2.shift(); // извлекает из начала - [2, 3, 4]
  //console.log(arr2);

  //arr2.unshift(10); //добавляет в начало - [10, 2, 3, 4]
  //console.log(arr2);

  //arr2.push(7);
  //console.log(arr2); //добавляет элементы в конец [10, 2, 3, 4, 7]
  
  //console.log(arr2[2]);


  //delete arr2[0];
  //delete arr2[1];
  //console.log(arr2); //[ <2 empty items>, 3, 4, 7 ]

  //console.log(arr2.length);
  //console.log(arr2);

  //arr2[58] = 28;  //[ 10, 2, 3, 4, 7, <53 empty items>, 28 ]
  // length - работает с последним индексом и ему добавлет единицу

  //console.log(arr2);

  //const arr2 = [1, 2, 3, 4, 5];
  //console.log(arr2);

  //for(let i = 0; i < arr2.length; i++) {
    //console.log(arr2[i]);
  //}

  //for (let value of arr2) {
    //console.log(value);
  //}

  //arr2.forEach(function(item, index, arr2) {

    //console.log(item);
    //console.log(index);

    //console.log("Индекс: " + index+ " Значение: " +item+ " из массива " +arr2);
  //}); 

  // псевдомассивы

  //let object = {0: 1, 1: 2, 2: 3, length: 3};
  //let array = [];

  //Преобразуем псевдомассив в массив
  //for(let i = 0; i < object.length; i++){
   // array.push(object[i]);
  //}

 // console.log(array); // [1, 2, 3]

 //lesson 35

 let a = 10;
 let b = a;
 a = 5;

 //console.log(a);  //5
 //console.log(b);  // 10


 // ООП понятие
 // Применение

 let str = "текст";
 let strObj = new String(str);

 //console.log(typeof(str));
 //console.log(strObj);


 let array = [1, 2, 3];
 //console.log(array);

 let car = {
   kuzov: "Jelezo",
  kolesa: "4 kolesa",
  model: function() {
    alert("Hello");
  }
 };

 let mb = Object.create(car);

 //let mb = {
  //marka: "Mersedes",
  //god: "2021"
//};
 

 // mb.__proto__= car;

 Object.setPrototypeOf(mb, car);

 console.log(mb.kuzov);
 mb.model();

 let click = document.getElementById("btn1");

 click.addEventListener('click', () => {
   alert('hi');
 });