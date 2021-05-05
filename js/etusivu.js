'use strict';

/* Js sliderille, jonka kuva vaihtoo joka 5s */
let counter = 1;

setInterval(function (){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 5000);

