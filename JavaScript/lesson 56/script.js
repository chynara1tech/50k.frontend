(function () {
    'use strict';

    const inputSom = document.querySelector("#som");

    inputSom.addEventListener('input', () =>{
       
        const request = new XMLHttpRequest();

        // request.open(method(GET/POST), url, asy, login, password);
        request.open("GET", "current.json");

        // status  - 404
        // status  - mistake text
        // response
        // readyState - отслеживать этапы на котором находимся
    });

}());