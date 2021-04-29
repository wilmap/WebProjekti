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

/* tuotteen minigalleria */

let ProductImg = document.getElementById("ProductImg");
let SmallImg = document.getElementsByClassName("small-img");

SmallImg[0].onclick = function (){
    ProductImg.src = SmallImg[0].src;
}
SmallImg[1].onclick = function (){
    ProductImg.src = SmallImg[1].src;
}
SmallImg[2].onclick = function (){
    ProductImg.src = SmallImg[2].src;
}
SmallImg[3].onclick = function (){
    ProductImg.src = SmallImg[3].src;
}

