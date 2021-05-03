'use strict';

let counter = 1;

setInterval(function (){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 5000);


let MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";
function menutoggle(){
    if(MenuItems.style.maxHeight === "0px"){
        MenuItems.style.maxHeight = "200px"
    }else{
        MenuItems.style.maxHeight = "0px";
    }

}
