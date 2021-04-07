let person = {
    firstName: "Anna",
    secondName: "Mager",
    dateOfBirth: 1997,
    placeOfBirth: "Ottava",
    marutalStatus: "married"
};

console.log(person.secondName);
console.log(person['firstName']);

let array = ["HTML", "CSS", "JavaScript", "React", "Java", "Python"];

console.log(array[3]);
console.log(array[0]);
console.log(array[2]);
console.log("I love " + array[2] + " and " + array[3]);

//Базовые функции. Взаимодействие с пользователем

//console.log("Сообщение"); //данная команда нужна для того чтобы вывести сообщение вконсоли
//alert("Привет гость!"); // Модальное окноб системное - дизайн изменить нельзя!
 

//var years = prompt("Сколько вам лет?", 100)
 //alert("Вам " + years + " лет");

 //var result = prompt("Сколько будет 2 + 2 ?", "");
 //result = result + 2;
 //alert("Вам " + result + " лет");

 // Promt - состоит из двух частей 
 // 1 часть - вопрос
 // 2 часть - ответ по умолчанию

 // promt  - запоминает введенные данные для дальнейшей обработки
  

 //var msg;
 //if(result == "4") {
   //  msg = "Верно";
 //}else {
   //  msg = "Неверно";
 //}

 //alert(msg);

 var result = confirm("Результат 2+2 будет равен 4?");

 alert(result);
 