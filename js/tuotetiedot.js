/* tuotteen minigalleria */
/* ProductImg = document.getElementById("ProductImg");

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

 */
let productsInfo = [
    {
        name: 'Pamu Punainen T-Paita',
        tag: 'pamupunainent-paita',
        price: 25,
        desc: '<p style="font-weight: bold; font-size: 20px">Materiaali ja huolto <br><br></p>'
            + '<p> <b>Päällikankaan materiaali:</b> 100% puuvillaa </p>'
            + '<p> <b>Materiaali:</b> Trikoo </p>'
            + '<p> <b>Hoito-ohje:</b> Konepesu 40°C, ei rumpukuivausta, hienopesu </p>'
    },
    {
        name: 'Mustat Lenkkarit',
        tag: 'mustatlenkkarit',
        price: 90,
        desc: '<p style="font-weight: bold; font-size: 20px">Materiaali ja huolto <br><br></p>'
            + '<p "> <b>Pintamateriaali:</b>  Tekstiili</p>'
            + '<p> <b>Sisämateriaali:</b> Tekstiili </p>'
            + '<p> <b>Pohjallinen:</b> Tekstiili </p>'
            + '<p> <b>Pohjan Materiaali:</b> Synteettinen materiaali </p>'
            + '<p> <b>Vuorin paksuus:</b> Ohuesti vuorattu  </p>'
            + '<p> <b>Materiaali:</b> Neule </p>'
    },
    {
        name: 'Harmaat Verryttelyhousut',
        tag: 'harmaatverryttelyhousut',
        price: 30,
        desc: '<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt odio eu faucibus </p>' +
            '<br> <p>scelerisque. Proin vitae nulla scelerisque, vulputate eros ac, sodales turpis. Mauris in nibh <br> </p>' +
            '<p>interdum, congue augue ac, consectetur erat. Curabitur commodo ornare turpis,</p> ' +
            '<p><br>cursus gravida augue tempor et. </p>'
    },
    {
        name: 'Pamu Sininen T-Paita',
        tag: 'pamusininent-paita',
        price: 20,
        desc: '<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt odio eu faucibus </p>' +
            '<br> <p>scelerisque. Proin vitae nulla scelerisque, vulputate eros ac, sodales turpis. Mauris in nibh <br> </p>' +
            '<p>interdum, congue augue ac, consectetur erat. Curabitur commodo ornare turpis,</p> ' +
            '<p><br>cursus gravida augue tempor et. </p>'
    },
    {
        name: 'Harmaat Lenkkarit',
        tag: 'harmaatlenkkarit',
        price: 60,
        desc: '<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt odio eu faucibus </p>' +
            '<br> <p>scelerisque. Proin vitae nulla scelerisque, vulputate eros ac, sodales turpis. Mauris in nibh <br> </p>' +
            '<p>interdum, congue augue ac, consectetur erat. Curabitur commodo ornare turpis,</p> ' +
            '<p><br>cursus gravida augue tempor et. </p>'
    },
    {
        name: 'Pamu Musta T-Paita',
        tag: 'pamumustat-paita',
        price: 20,
        desc: '<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt odio eu faucibus </p>' +
            '<br> <p>scelerisque. Proin vitae nulla scelerisque, vulputate eros ac, sodales turpis. Mauris in nibh <br> </p>' +
            '<p>interdum, congue augue ac, consectetur erat. Curabitur commodo ornare turpis,</p> ' +
            '<p><br>cursus gravida augue tempor et. </p>'
    },
    {
        name: 'HRX Sukat',
        tag: 'hrxsukat',
        price: 10,
        desc: '<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt odio eu faucibus </p>' +
            '<br> <p>scelerisque. Proin vitae nulla scelerisque, vulputate eros ac, sodales turpis. Mauris in nibh <br> </p>' +
            '<p>interdum, congue augue ac, consectetur erat. Curabitur commodo ornare turpis,</p> ' +
            '<p><br>cursus gravida augue tempor et. </p>'
    },
    {
        name: 'Jeason Kello',
        tag: 'jeasonkello',
        price: 120,
        desc: '<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt odio eu faucibus </p>' +
            '<br> <p>scelerisque. Proin vitae nulla scelerisque, vulputate eros ac, sodales turpis. Mauris in nibh <br> </p>' +
            '<p>interdum, congue augue ac, consectetur erat. Curabitur commodo ornare turpis,</p> ' +
            '<p><br>cursus gravida augue tempor et. </p>'
    }
]

let productsClothesInfo = [
    {
        name: 'Kukkamekko',
        tag: 'kukkamekko',
        desc: 'Hieno mekko, yms.',
        price: 40,
        desc: '<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt odio eu faucibus </p>' +
            '<br> <p>scelerisque. Proin vitae nulla scelerisque, vulputate eros ac, sodales turpis. Mauris in nibh <br> </p>' +
            '<p>interdum, congue augue ac, consectetur erat. Curabitur commodo ornare turpis,</p> ' +
            '<p><br>cursus gravida augue tempor et. </p>'
    },
    {
        name: 'Vaaleansininen Huppari',
        tag: 'vaaleansininenhuppari',
        price: 120,
        desc: '<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt odio eu faucibus </p>' +
            '<br> <p>scelerisque. Proin vitae nulla scelerisque, vulputate eros ac, sodales turpis. Mauris in nibh <br> </p>' +
            '<p>interdum, congue augue ac, consectetur erat. Curabitur commodo ornare turpis,</p> ' +
            '<p><br>cursus gravida augue tempor et. </p>'
    },
    {
        name: 'Beige Poncho',
        tag: 'beigeponcho',
        price: 80,
        desc: '<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt odio eu faucibus </p>' +
            '<br> <p>scelerisque. Proin vitae nulla scelerisque, vulputate eros ac, sodales turpis. Mauris in nibh <br> </p>' +
            '<p>interdum, congue augue ac, consectetur erat. Curabitur commodo ornare turpis,</p> ' +
            '<p><br>cursus gravida augue tempor et. </p>'
    },{
        name: 'Kokouimapuku',
        tag: 'kokouimapuku',
        price: 32,
        desc: '<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt odio eu faucibus </p>' +
            '<br> <p>scelerisque. Proin vitae nulla scelerisque, vulputate eros ac, sodales turpis. Mauris in nibh <br> </p>' +
            '<p>interdum, congue augue ac, consectetur erat. Curabitur commodo ornare turpis,</p> ' +
            '<p><br>cursus gravida augue tempor et. </p>'
    },{
        name: 'Pitsinen Pitkähihainen Paita',
        tag: 'pitsinenpitkähihainenpaita',
        price: 21,
        desc: '<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt odio eu faucibus </p>' +
            '<br> <p>scelerisque. Proin vitae nulla scelerisque, vulputate eros ac, sodales turpis. Mauris in nibh <br> </p>' +
            '<p>interdum, congue augue ac, consectetur erat. Curabitur commodo ornare turpis,</p> ' +
            '<p><br>cursus gravida augue tempor et. </p>'
    },{
        name: 'Punainen Haalari',
        tag: 'punainenhaalari',
        price: 63,
        desc: '<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt odio eu faucibus </p>' +
            '<br> <p>scelerisque. Proin vitae nulla scelerisque, vulputate eros ac, sodales turpis. Mauris in nibh <br> </p>' +
            '<p>interdum, congue augue ac, consectetur erat. Curabitur commodo ornare turpis,</p> ' +
            '<p><br>cursus gravida augue tempor et. </p>'
    },{
        name: 'Harmaa Takki',
        tag: 'harmaatakki',
        price: 99,
        desc: '<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt odio eu faucibus </p>' +
            '<br> <p>scelerisque. Proin vitae nulla scelerisque, vulputate eros ac, sodales turpis. Mauris in nibh <br> </p>' +
            '<p>interdum, congue augue ac, consectetur erat. Curabitur commodo ornare turpis,</p> ' +
            '<p><br>cursus gravida augue tempor et. </p>'
    },{
        name: 'Sininen Puvuntakki',
        tag: 'sininenpuvuntakki',
        price: 150,
        desc: '<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt odio eu faucibus </p>' +
            '<br> <p>scelerisque. Proin vitae nulla scelerisque, vulputate eros ac, sodales turpis. Mauris in nibh <br> </p>' +
            '<p>interdum, congue augue ac, consectetur erat. Curabitur commodo ornare turpis,</p> ' +
            '<p><br>cursus gravida augue tempor et. </p>'
    },{
        name: 'Raidallinen T-Paita',
        tag: 'raidallinentpaita',
        price: 15,
        desc: '<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt odio eu faucibus </p>' +
            '<br> <p>scelerisque. Proin vitae nulla scelerisque, vulputate eros ac, sodales turpis. Mauris in nibh <br> </p>' +
            '<p>interdum, congue augue ac, consectetur erat. Curabitur commodo ornare turpis,</p> ' +
            '<p><br>cursus gravida augue tempor et. </p>'
    },{
        name: 'Vihreä Hame',
        tag: 'vihreähame',
        price: 45,
        desc: '<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt odio eu faucibus </p>' +
            '<br> <p>scelerisque. Proin vitae nulla scelerisque, vulputate eros ac, sodales turpis. Mauris in nibh <br> </p>' +
            '<p>interdum, congue augue ac, consectetur erat. Curabitur commodo ornare turpis,</p> ' +
            '<p><br>cursus gravida augue tempor et. </p>'
    },{
        name: 'Vaaleanpunainen Mekko',
        tag: 'vaaleanpunainenmekko',
        price: 66,
        desc: '<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt odio eu faucibus </p>' +
            '<br> <p>scelerisque. Proin vitae nulla scelerisque, vulputate eros ac, sodales turpis. Mauris in nibh <br> </p>' +
            '<p>interdum, congue augue ac, consectetur erat. Curabitur commodo ornare turpis,</p> ' +
            '<p><br>cursus gravida augue tempor et. </p>'
    },{
        name: 'Pystyraidalliset Housut',
        tag: 'pystyraidallisethousut',
        price: 10,
        desc: '<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt odio eu faucibus </p>' +
            '<br> <p>scelerisque. Proin vitae nulla scelerisque, vulputate eros ac, sodales turpis. Mauris in nibh <br> </p>' +
            '<p>interdum, congue augue ac, consectetur erat. Curabitur commodo ornare turpis,</p> ' +
            '<p><br>cursus gravida augue tempor et. </p>'
    },{
        name: 'Made Kukkapusero',
        tag: 'madekukkapusero',
        price: 10,
        desc: '<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt odio eu faucibus </p>' +
            '<br> <p>scelerisque. Proin vitae nulla scelerisque, vulputate eros ac, sodales turpis. Mauris in nibh <br> </p>' +
            '<p>interdum, congue augue ac, consectetur erat. Curabitur commodo ornare turpis,</p> ' +
            '<p><br>cursus gravida augue tempor et. </p>'
    },{
        name: 'Oddities Musta T-Paita',
        tag: 'odditiesmustat-paita',
        price: 10,
        desc: '<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt odio eu faucibus </p>' +
            '<br> <p>scelerisque. Proin vitae nulla scelerisque, vulputate eros ac, sodales turpis. Mauris in nibh <br> </p>' +
            '<p>interdum, congue augue ac, consectetur erat. Curabitur commodo ornare turpis,</p> ' +
            '<p><br>cursus gravida augue tempor et. </p>'
    }
]

let productsMakeupInfo= [
    {
        name: 'Faceroller',
        tag: 'faceroller',
        price: 10,
        desc: '<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt odio eu faucibus </p>' +
            '<br> <p>scelerisque. Proin vitae nulla scelerisque, vulputate eros ac, sodales turpis. Mauris in nibh <br> </p>' +
            '<p>interdum, congue augue ac, consectetur erat. Curabitur commodo ornare turpis,</p> ' +
            '<p><br>cursus gravida augue tempor et. </p>'
    },
    {
        name: 'Huulikiilto',
        tag: 'huulikiilto',
        price: 10,
        desc: '<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt odio eu faucibus </p>' +
            '<br> <p>scelerisque. Proin vitae nulla scelerisque, vulputate eros ac, sodales turpis. Mauris in nibh <br> </p>' +
            '<p>interdum, congue augue ac, consectetur erat. Curabitur commodo ornare turpis,</p> ' +
            '<p><br>cursus gravida augue tempor et. </p>'
    },
    {
        name: 'Puuteri',
        tag: 'puuteri',
        price: 15,
        desc: '<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt odio eu faucibus </p>' +
            '<br> <p>scelerisque. Proin vitae nulla scelerisque, vulputate eros ac, sodales turpis. Mauris in nibh <br> </p>' +
            '<p>interdum, congue augue ac, consectetur erat. Curabitur commodo ornare turpis,</p> ' +
            '<p><br>cursus gravida augue tempor et. </p>'
    },{
        name: 'Seerumi',
        tag: 'seerumi',
        price: 30,
        desc: '<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt odio eu faucibus </p>' +
            '<br> <p>scelerisque. Proin vitae nulla scelerisque, vulputate eros ac, sodales turpis. Mauris in nibh <br> </p>' +
            '<p>interdum, congue augue ac, consectetur erat. Curabitur commodo ornare turpis,</p> ' +
            '<p><br>cursus gravida augue tempor et. </p>'
    }
]


/* Napin painalluksesta tee nämä funktiot */

let cartsInfo = document.querySelectorAll('.tuotetiedotNappi')

if (window.location.pathname === '/WebProjekti/vaatesivu.html') {
    for(let i=0; i < cartsInfo.length; i++) {
        cartsInfo[i].addEventListener('click', () => {
            cartNumbersInfo(productsClothesInfo[i])
        })
    }
}else if(window.location.pathname === '/WebProjekti/kauneussivu.html'){
    for(let i=0; i < cartsInfo.length; i++) {
        cartsInfo[i].addEventListener('click', () => {
            cartNumbersInfo(productsMakeupInfo[i])
        })
    }
}else{
    for(let i=0; i < cartsInfo.length; i++) {
        cartsInfo[i].addEventListener('click', () => {
            cartNumbersInfo(productsInfo[i])
        })
    }
}


/*
for(let i=0; i < cartsInfo.length; i++) {
    cartsInfo[i].addEventListener('click', () => {
        cartNumbersInfo(productsInfo[i])
    })
}
*/

/* Lataa sivulle korissa olevan tavaroiden määrän */


/* Päivittää korissa olevien tuotteiden määrää */

function cartNumbersInfo(productInfo){

    setItemsInfo(productInfo)
}

/* Asettaa tuotteet tietoihin */

function setItemsInfo(productInfo){
    localStorage.removeItem("productsInCartInfo")
    console.log(productInfo.tag)

    let cartItemsInfo = localStorage.getItem('productsInCartInfo')
    cartItemsInfo = JSON.parse(cartItemsInfo)

    if(cartItemsInfo != null){
        if(cartItemsInfo[productInfo.tag]=== undefined){
            cartItemsInfo = {
                ...cartItemsInfo,
                [productInfo.tag]: productInfo
            }
        }
        cartItemsInfo[productInfo.tag].inCart += 1
    }else{
        productInfo.inCart = 1
        cartItemsInfo = {
            [productInfo.tag]: productInfo
        }
    }
    localStorage.setItem("productsInCartInfo", JSON.stringify(cartItemsInfo))
}

/* Muuttaa hintaa riippuen poistetaanko tuote vai lisätäänkö */



/* päivittää sivun riippuen poistetaanko sieltä vai lisätäänkö sinne */

function displayCartInfo(){
    let cartItemsInfo = localStorage.getItem('productsInCartInfo')
    cartItemsInfo = JSON.parse(cartItemsInfo)
    console.log(cartItemsInfo)
    let productContainerInfoImg = document.querySelector(".productsInfoImg")
    let productContainerInfoTitle = document.querySelector(".productsInfoTitle")
    let productContainerInfoPrice = document.querySelector(".productsInfoPrice")
    let productContainerInfoDesc = document.querySelector(".productsInfoDesc")

    if(cartItemsInfo && productContainerInfoImg && productContainerInfoTitle
    && productContainerInfoPrice){
        productContainerInfoImg.innerHTML = ''
        productContainerInfoTitle.innerHTML = ''
        productContainerInfoTitle.innerHTML = ''
        productContainerInfoDesc.innerHTML = ''

        Object.values(cartItemsInfo).map(item => {
            productContainerInfoImg.innerHTML = `

            <div class="productInfo">
                <img class="imgInfo" src="./img/${item.tag}.jpg">
            </div>
            `;
        })

        Object.values(cartItemsInfo).map(item => {
            productContainerInfoTitle.innerHTML = `

            <div class="productInfo">
                <span class="nameInfo">${item.name}</span>
            </div>
            `;
        })

        Object.values(cartItemsInfo).map(item => {
            productContainerInfoPrice.innerHTML = `

            <div class="productInfo">
                <div class="priceInfo">${item.price},00€</div>
            </div>
            `;
        })

        Object.values(cartItemsInfo).map(item => {
            productContainerInfoDesc.innerHTML = `

                <div class="descInfo">${item.desc}</div>
            `;
        })
    }
}

/* funktio poistamisnapille, joka vähentää tietyn tuotteen sen parentelementin mukaan */



/* päivittää sivun automaattisesti */
displayCartInfo()
