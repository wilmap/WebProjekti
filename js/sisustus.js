'use strict';
const picArray = [
  {

    caption: 'Sohva',
    description: '60.00 €',
    filename: 'img/sofa.jpg',
  },
  {

    caption: 'Sisäkasvi',
    description: '8.00 €',
    filename: 'img/kasvi.png',
  },
  {

    caption: 'Pöytä',
    description: '99.00 €',
    filename: 'img/poyta.jpg',
  },
  {

    caption: 'Lamppu',
    description: '25.00 €',
    filename: 'img/lamppu.jpg',
  },
];


const mainElement = document.querySelector("main");

let productContainer = document.querySelector(".dompic")
productContainer.innerHTML = ''
for (let i= 0; i < picArray.length; i++){
  productContainer.innerHTML+=
      `<article>
            <figure>
                <img src="${picArray[i].filename}">
                <figcaption>${picArray[i].caption}</figcaption> 
            </figure>
            <p>${picArray[i].description}</p>
        </article>`;
}
