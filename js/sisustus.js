'use strict';
const picArray = [
  {

    caption: 'Sohva',
    description: '60.00 €',
    filename: 'img/sofa.jpg',
  },
  {

    caption: 'Kaktus',
    description: '8.00 €',
    filename: 'img/kaktus.jpg',
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

let htmlCode = ``;

for (let i= 0; i < picArray.length; i++){
  htmlCode +=
      `<article>
            <figure>
                <img src="${picArray[i].filename}">
                <figcaption>${picArray[i].caption}</figcaption> 
            </figure>
            <p>${picArray[i].description}</p>
        </article>`;
}

mainElement.innerHTML = htmlCode;