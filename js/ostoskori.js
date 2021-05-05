/* Ostoskorin.js */

/* Lista tuotteista, joita ostoskoriin pystyy lähettämään */
/* Jokaisella sivulla on oma lista, ja järjestyksessä katsotaan minkä tuotteen
* tiedot lähetetään ostoskoriin */

let products = [
    {
        name: 'Pamu Punainen T-Paita',
        tag: 'pamupunainent-paita',
        price: 25,
        inCart: 0
    },
    {
        name: 'Mustat Lenkkarit',
        tag: 'mustatlenkkarit',
        price: 90,
        inCart: 0
    },
    {
        name: 'Harmaat Verryttelyhousut',
        tag: 'harmaatverryttelyhousut',
        price: 30,
        inCart: 0
    },
    {
        name: 'Pamu Sininen T-Paita',
        tag: 'pamusininent-paita',
        price: 20,
        inCart: 0
    },
    {
        name: 'Harmaat Lenkkarit',
        tag: 'harmaatlenkkarit',
        price: 60,
        inCart: 0
    },
    {
        name: 'Pamu Musta T-Paita',
        tag: 'pamumustat-paita',
        price: 20,
        inCart: 0
    },
    {
        name: 'HRX Sukat',
        tag: 'hrxsukat',
        price: 10,
        inCart: 0
    },
    {
        name: 'Jeason Kello',
        tag: 'jeasonkello',
        price: 120,
        inCart: 0
    }
]

let productsClothes= [
    {
        name: 'Kukkamekko',
        tag: 'kukkamekko',
        price: 39,
        inCart: 0
    },
    {
        name: 'Vaaleansininen Huppari',
        tag: 'vaaleansininenhuppari',
        price: 20,
        inCart: 0
    },
    {
        name: 'Beige Poncho',
        tag: 'beigeponcho',
        price: 80,
        inCart: 0
    },{
        name: 'Kokouimapuku',
        tag: 'kokouimapuku',
        price: 32,
        inCart: 0
    },{
        name: 'Pitsinen Pitkähihainen Paita',
        tag: 'pitsinenpitkähihainenpaita',
        price: 21,
        inCart: 0
    },{
        name: 'Punainen Haalari',
        tag: 'punainenhaalari',
        price: 63,
        inCart: 0
    },{
        name: 'Harmaa Takki',
        tag: 'harmaatakki',
        price: 99,
        inCart: 0
    },{
        name: 'Sininen Puvuntakki',
        tag: 'sininenpuvuntakki',
        price: 150,
        inCart: 0
    },{
        name: 'Raidallinen T-Paita',
        tag: 'raidallinentpaita',
        price: 15,
        inCart: 0
    },{
        name: 'Vihreä Hame',
        tag: 'vihreähame',
        price: 45,
        inCart: 0
    },{
        name: 'Vaaleanpunainen Mekko',
        tag: 'vaaleanpunainenmekko',
        price: 66,
        inCart: 0
    },{
        name: 'Pystyraidalliset Housut',
        tag: 'pystyraidallisethousut',
        price: 10,
        inCart: 0
    },{
        name: 'Made Kukkapusero',
        tag: 'madekukkapusero',
        price: 10,
        inCart: 0
    },{
        name: 'Oddities Musta T-Paita',
        tag: 'odditiesmustat-paita',
        price: 10,
        inCart: 0
    }
]

let productsMakeup= [
    {
        name: 'Faceroller',
        tag: 'faceroller',
        price: 10,
        inCart: 0
    },
    {
        name: 'Huulikiilto',
        tag: 'huulikiilto',
        price: 10,
        inCart: 0
    },
    {
        name: 'Puuteri',
        tag: 'puuteri',
        price: 15,
        inCart: 0
    },{
        name: 'Seerumi',
        tag: 'seerumi',
        price: 30,
        inCart: 0
    }
    ]

/* Asetetaan koriin lisäys nappi */
let carts = document.querySelectorAll('.add-cart')


/* Tarkistetaan mistä ikkunast nappia painetaan, ja sen mukaan
* käytetään eri listoja, niin saadaan oikeat tuotteet
* tarkistetaan, onko sivu vaatesivu, kauneussivu vai muu (kaikki tuotteet tällä hetkellä siis */
if (window.location.pathname === '/WebProjekti/vaatesivu.html') {
    for(let i=0; i < carts.length; i++) {
        carts[i].addEventListener('click', () => {
            cartNumbers(productsClothes[i])
            totalCost(productsClothes[i])
        })
    }
}else if(window.location.pathname === '/WebProjekti/kauneussivu.html'){
    for(let i=0; i < carts.length; i++) {
        carts[i].addEventListener('click', () => {
            cartNumbers(productsMakeup[i])
            totalCost(productsMakeup[i])
        })
    }
} else{
    for(let i=0; i < carts.length; i++) {
        carts[i].addEventListener('click', () => {
            cartNumbers(products[i])
            totalCost(products[i])
        })
    }
}


/*------- Animaatio ostoskoriin lisäykselle -------*/

carts.forEach(button =>{
   button.addEventListener('click', cartClick)
});

function cartClick(){
    let button = this;
    button.classList.add('clicked');
}

/* Lataa sivulle korissa olevan tavaroiden määrän */

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers')
    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers
    }
}

/* Päivittää korissa olevien tuotteiden määrää niiden vähentyessä tai lisääntyessä */

function cartNumbers(product, action){
    let productNumbers = localStorage.getItem('cartNumbers')

    if(action === "decrease"){
        localStorage.setItem('cartNumbers', productNumbers -1);
        document.querySelector('.cart span').textContent = productNumbers -1;
    }else if(productNumbers){
        localStorage.setItem('cartNumbers', parseInt(productNumbers) + 1);
        document.querySelector('.cart span').textContent = parseInt(productNumbers) +1;
    }else{
        localStorage.setItem('cartNumbers', 1)
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product)
}

/* Asettaa tuotteet tietoihin ja paikalliseen varastoon, niin ne saadaan muiltakin sivuilta */

function setItems(product){

    let cartItems = localStorage.getItem('productsInCart')
    cartItems = JSON.parse(cartItems)

    if(cartItems != null){
        if(cartItems[product.tag]=== undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1
    }else{
        product.inCart = 1
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems))
}

/* Muuttaa hintaa riippuen poistetaanko tuote vai lisätäänkö */

function totalCost(product, action){
    let cartCost = localStorage.getItem('totalCost')

    if(action === "decrease"){
        cartCost = parseInt(cartCost);

        localStorage.setItem('totalCost', cartCost - product.price)
    }else if(cartCost != null){
        cartCost = parseInt(cartCost)
        localStorage.setItem("totalCost", cartCost + product.price)
    }else{
        localStorage.setItem("totalCost", product.price)
    }
}

/* päivittää sivun riippuen poistetaanko sieltä vai lisätäänkö sinne
* asettaa listan mukaan kuvan ja tekstit
*/

function displayCart(){
    let cartCost = localStorage.getItem('totalCost')
    let cartItems = localStorage.getItem('productsInCart')
    cartItems = JSON.parse(cartItems)
    let productContainer = document.querySelector(".products")
    if(cartItems && productContainer){
        productContainer.innerHTML = ''
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `

            <div class="product">
                <i class="fa fa-times-circle fa-2x cartIconRemove" ></i>
                <img src="./img/${item.tag}.jpg">
                <span class="cartName">${item.name}</span>
            </div>
            <div class="price">${item.price},00€</div>
            <div class="quantity">
                <i class="fa fa-arrow-circle-left fa-2x cartIcons"></i>
                <span>${item.inCart}</span>
                <i class="fa fa-arrow-circle-right fa-2x cartIcons"></i>
            </div>
            <div class="total">
                ${item.inCart * item.price},00€ 
            </div>
            `;
        })
        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Yhteensä:
                </h4>
                <h4 class="basketTotal">
                    ${cartCost},00
                </h4>
        `
    }
    deleteButtons()
    manageQuantity()
}

/* funktio poistamisnapille, joka vähentää tietyn tuotteen
 'poistamisikonin' parentelementin mukaan */

function deleteButtons(){
    let deleteButtons = document.querySelectorAll('.product .cartIconRemove')
    let productName;
    let productNumbers = localStorage.getItem('cartNumbers')
    let cartItems = localStorage.getItem('productsInCart')
    cartItems = JSON.parse(cartItems)
    let cartCost = localStorage.getItem('totalCost')

    for(let i=0; i < deleteButtons.length; i++){
        deleteButtons[i].addEventListener('click', () =>{
            productName = deleteButtons[i].parentElement.textContent.
            trim().toLowerCase().replace(/ /g, '')
            localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart)

            localStorage.setItem('totalCost', cartCost - ( cartItems[productName].price * cartItems[productName].inCart))

            delete cartItems[productName]
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));

            displayCart()
            onLoadCartNumbers()
        })
    }
}

/* funktio lisäys ja vähennys napeille, jälleen käytetään apuna parentelementtiä */

function manageQuantity(){
    let decreaseButtons = document.querySelectorAll('.fa-arrow-circle-left')
    let increaseButtons = document.querySelectorAll('.fa-arrow-circle-right')
    let cartItems = localStorage.getItem('productsInCart')
    let currentQuantity = 0;
    let currentProduct = "";
    cartItems = JSON.parse(cartItems);

    for(let i=0; i < decreaseButtons.length; i++){
        decreaseButtons[i].addEventListener('click', () =>{
            currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity)
            currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLowerCase().replace(/ /g, '').trim();
            console.log(currentProduct)
            if(cartItems[currentProduct].inCart > 1){
                cartItems[currentProduct].inCart -= 1;
                cartNumbers(cartItems[currentProduct], "decrease")
                totalCost(cartItems[currentProduct], "decrease")
                localStorage.setItem('productsInCart', JSON.stringify(cartItems))
                displayCart()
            }
        })
    }

    for(let i=0; i < increaseButtons.length; i++){
        increaseButtons[i].addEventListener('click', () =>{
            currentQuantity = decreaseButtons[i].
            parentElement.querySelector('span').textContent
            currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLowerCase().replace(/ /g, '').trim();
            console.log(currentProduct)

                cartItems[currentProduct].inCart += 1;
                cartNumbers(cartItems[currentProduct])
                totalCost(cartItems[currentProduct])
                localStorage.setItem('productsInCart', JSON.stringify(cartItems))
                displayCart()
        })
    }
}

/* päivittää sivun automaattisesti */
displayCart()
onLoadCartNumbers()

