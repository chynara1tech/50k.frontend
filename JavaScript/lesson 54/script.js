"use strict";

// создание обьекта начинается с фигрных скобок
let obj = {
    names: "Dilya",
    age: 32,
    location: "Karakol"
};
console.log("Name:" + obj.names + " Age:" + obj.age);

//console.log(obj ['names']);

//Массив создается с помощью квадратных скобок []
// Вмассивах используется сразу значения
//Для получения значения необходимо использовать порядковый номер
        // 0         1       2
let arr = ['pink', 'red', 'blue'];
console.log(arr[0]);

//Homework
//1
let person = {
    sername: "Seydalieva",
    age:32,
    born:1988,

};
console.log(person.sername);

//2
let array = ["mom", "daddy", "son"];
console.log(array[2]);

//3 перебор  массива
let fruits = ["apple","apricot","banana","wattermelon"]; 
let index;
for (index=0; index< fruits.length; ++index) {
    console.log(fruits[index]);
}
//4 перебор объекта

let lagman = {
    meat: 300,
    noodle:1,
    oil:2,
    tomato:"red"
};
let counter = 0;

for (let key in lagman) {
    counter++;
}
console.log("Recept:" + counter);

//Базовые функции / Взаимодействие с пользователем
alert("cbv"); //модальное окно системное дизайн изменить нельзя

var result = prompt ("Сколько будет 2+2? ", "");
//prompt - состоит из двух частей
// 1 часть - вопрос
// часть - ответ по умолчанию

// prompt - запоминает введенные данные для дальнейшей обработки

// var msg;
// if(result == "4") {
//     msg = "verno";
// } else{
//     msg = "neverno";
// }
// alert(msg);

// confirm("Результат сложения 2+2 будет 4?");

// //homework25
// //1
// let fio = prompt("Ваше ФИО?", "");
// alert ("Hi!" + fio);

// //2
// let a = +prompt("Введите первое число", "");
// let b = +prompt("Введите второе число", "");

// alert( a + b );

// //3
// let n1 = +prompt("Введите первое число", "");
// let n2 = +prompt("Введите второе число", "");

// alert( n1* n2 );

//Условны операторы

//Важно знать!
  // Операции сравнения всегда будут возвращать одно из следующих значений
  // true - истина
  // false - ложь
  //alert(2==4);

  //alert("2"==2);
  //Когда происходит операция сравнения Значения конвертируются в цифры
  //== сравнение значений (она конвертирует текста в цифры)
  //alert("2"===2)
  // === сравнение типов данных + значения

  //Условные операторы
//   if - если
//   else - в противном случае

if(2==2){
    alert("Ответ правильный");
} else{
    alert("Ответ неправильный");
}


