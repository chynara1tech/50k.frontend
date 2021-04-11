var btn = document.querySelector("btn");


btn.addEventListener("click", myFunction);
function myFunction(){
    var num1 = +document.querySelector("num1").value;
    var num2 = +document.querySelector("num2").value;
    var operation = document.querySelector("operation").value;

    if(operation == "+"){
        console.log(num1 + num2);
    }else if(operation == "-"){
        console.log(num1 - num2);
    }else if(operation == "*"){
        console.log(num1 * num2);
    }else if(operation == "/"){
        console.log(num1 / num2);
    }else if(operation == "%"){
        console.log(num1 % num2);
    }else if(operation == "**"){
        console.log(num1 * num2);
    }

}


var login = prompt("Enrter your login: ");
var password = prompt("Enter your password: ");
if(login == "admin" && password == "ADMIN") {
    console.log("Welcome!!");
}else if(login != "admin"){
    console.log("Login is incorrect!!");
}else if(password != "ADMIN"){
    console.log("Password is incorrect!!");
}

   
    
