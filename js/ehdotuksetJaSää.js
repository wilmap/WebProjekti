let weathersArray= [
    {
        description: 'Päivä on kirkas ja aurinkoinen. Muista vesipullo!',
        img1: src="img/hattu.jpg",
        img2: src='img/toppi.jpg',
        img3: src="img/shortsit.jpg",
        img4: src="img/varvassandaalit.jpg"
    },
    {
        description: 'Taivalla näkyy muutama pilvi. Takkia ei tarvitse, mutta ulkona voi olla hieman viileä',
        img1: src="img/pehmeäneule.jpg",
        img2: src='img/farkut.jpg',
        img3: src="img/matalavartisettennarit.jpg",
    },
    {
        description: 'Taivas on täyttynyt pilvistä! Parempi ottaa hupullinen takki varmuuden vuoksi',
        img1: src="img/kevyttakki.jpg",
        img2: src='img/mustapitkähihainenpaita.jpg',
        img3: src="img/kangashousut.jpg",
    },
    {
        description: 'Taivas on hieman pilvinen, toivottavasti se vielä selvenee',
        img1: src="img/pinkkihuppari.jpg",
        img2: src='img/legginsit.jpg',
        img3: src="img/platoo-avokkaat.jpg",
    }, {
        description: 'Taivas on selkeä, vain muutama pilvi näkyvillä. Aika laittaa kevyempää päälle!',
        img1: src = "img/vapaa-ajanmekko.jpg",
        img2: src = 'img/juoksukengät.jpg'
    },{
        description: 'Ulkona sataa! Parempi laittaa saappaat jalkaan ja sadevarjo kainaloon.',
        img1: src="img/parkatakki.jpg",
        img2: src='img/collegepaita.jpg',
        img3: src="img/sateenvarjo.jpg",
        img4: src="img/sadesaappaat.jpg"
    },{
        description: 'Ukkosen keskelle ei kannata vaeltaa, mutta jos on pakko lähteä ulos, suosittelemme näitä',
        img1: src="img/pitkätakki.jpg",
        img2: src='img/ruskeacollegepaita.jpg',
        img3: src="img/straightlegfarkut.jpg",
        img4: src="img/kumisaappaat.jpg"
    },{
        description: 'Lunta sataa, joten kannattaa laittaa lämpimästi päälle.',
        img1: src="img/talvitakki.jpg",
        img2: src='img/villapaita.jpg',
        img3: src="img/verryttelyhousut.jpg",
        img4: src="img/talvisaappaat.jpg"
    }
    ,{
        description: 'Sumuisessa kelissä kannattaa laittaa pitkähihaista päälle.',
        img1: src="img/sininenpitkähihainen.jpg",
        img2: src='img/mustatverryttelyhousut.jpg'
    }
]




//Haetaan rajapinta säälle openweathermap.org


let weather = {
    apiKey: "c042c0bcea83f22bde97ce234ae8c4f7",
    fetchWeather: function (city) {
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    //Haetaan halutut parametrit (kaupunki, sääkuvake, kuvaus, lämpötila ja tuuli) datasta.
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp } = data.main;
        const { speed } = data.wind;
        let productContainer = document.querySelector(".outfitSuggestion")
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";

        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp.toFixed(0) + "°C";
        document.querySelector(".wind").innerText = "Wind speed: " + speed.toFixed() + "km/h";
        document.querySelector(".weather").classList.remove("loading");


        if(description.includes('few clouds')){
            console.log('few clouds')
            productContainer.innerHTML = ''
            productContainer.innerHTML+=
                `<div></div>
                <img class="clothingImg" src="${weathersArray[1].img1}">
                <img class="clothingImg" src="${weathersArray[1].img2}">
                <img class="clothingImg" src="${weathersArray[1].img3}">
                
                <p>${weathersArray[1].description}</p>
                </div>
            `;

        }else if(description.includes('clear sky')){
            console.log('clear sky')
            productContainer.innerHTML = ''
                productContainer.innerHTML+=
                    `<div></div>
                <img class="clothingImg" src="${weathersArray[0].img1}">
                <img class="clothingImg" src="${weathersArray[0].img2}">
                <img class="clothingImg" src="${weathersArray[0].img3}">
                <img class="clothingImg" src="${weathersArray[0].img4}">
                
                <p>${weathersArray[0].description}</p>
                </div>
            `;


        }else if(description.includes('overcast clouds')){
            console.log('overcast clouds')
            productContainer.innerHTML = ''
            productContainer.innerHTML+=
                `<div></div>
                <img class="clothingImg" src="${weathersArray[2].img1}">
                <img class="clothingImg" src="${weathersArray[2].img2}">
                <img class="clothingImg" src="${weathersArray[2].img3}">
                <p>${weathersArray[2].description}</p>
                </div>
            `;


        }else if(description.includes('broken clouds')){
            console.log('broken clouds')

            productContainer.innerHTML = ''
            productContainer.innerHTML+=
                `<div></div>
                <img class="clothingImg" src="${weathersArray[3].img1}">
                <img class="clothingImg" src="${weathersArray[3].img2}">
                <img class="clothingImg" src="${weathersArray[3].img3}">
                <p>${weathersArray[3].description}</p>
                </div>
            `;

        }else if(description.includes('scattered clouds')){
            console.log('scattered clouds')
            productContainer.innerHTML = ''
            productContainer.innerHTML+=
                `<div></div>
                <img class="clothingImg" src="${weathersArray[4].img1}">
                <img class="clothingImg" src="${weathersArray[4].img2}">
                <p>${weathersArray[4].description}</p>
                </div>
            `;

        }else if(description.includes('rain')){
            console.log('rain')

            productContainer.innerHTML = ''
            productContainer.innerHTML+=
                `<div></div>
                <img class="clothingImg" src="${weathersArray[5].img1}">
                <img class="clothingImg" src="${weathersArray[5].img2}">
                <img class="clothingImg" src="${weathersArray[5].img3}">
                <img class="clothingImg" src="${weathersArray[5].img4}">
                <p>${weathersArray[5].description}</p>
                </div>
            `;

        }else if(description.includes('thunderstorm')){
            console.log('thunderstorm')
            productContainer.innerHTML = ''
            productContainer.innerHTML+=
                `<div></div>
                <img class="clothingImg" src="${weathersArray[6].img1}">
                <img class="clothingImg" src="${weathersArray[6].img2}">
                <img class="clothingImg" src="${weathersArray[6].img3}">
                <img class="clothingImg" src="${weathersArray[6].img4}">
                <p>${weathersArray[6].description}</p>
                </div>
            `;

        }else if(description.includes('snow')){
            console.log('snow')
            productContainer.innerHTML = ''
            productContainer.innerHTML+=
                `<div></div>
                <img class="clothingImg" src="${weathersArray[7].img1}">
                <img class="clothingImg" src="${weathersArray[7].img2}">
                <img class="clothingImg" src="${weathersArray[7].img3}">
                <img class="clothingImg" src="${weathersArray[7].img4}">
                <p>${weathersArray[7].description}</p>
                </div>
            `;

        }else if(description.includes('mist')){
            console.log('mist')
        }

    },
    //Tehdään funktio haulle. Haetaan haluttu kaupunki hakukentästä
    search: function () {
        this.fetchWeather(document.querySelector(".search_bar_weather").value);
    }
};


    //Tehdään eventlistener hakunapille. Kun klikataan hakunappia haetaan halutun kaupungin sää.
    document.querySelector("#hakunappi").addEventListener("click", function () {
        weather.search();
    });

    //Haun voi tehdä myös painamalla enter-näppäintä.
    document.querySelector(".search_bar_weather").addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            weather.search();
        }
    });

    //Default- kaupungiksi laitettu Helsinki.
    weather.fetchWeather("Helsinki");

