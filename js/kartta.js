let weathers= [
    {
        name: 'clear sky',
        img: src='img/'
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
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";

        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp.toFixed(0) + "°C";
        document.querySelector(".wind").innerText = "Wind speed: " + speed.toFixed() + "km/h";
        document.querySelector(".weather").classList.remove("loading");


        if(description.includes('few clouds')){
            console.log('few clouds')
        }else if(description.includes('clear sky')){
            console.log('clear sky')
        }else if(description.includes('overcast clouds')){
            console.log('overcast clouds')
        }else if(description.includes('light rain')){
            console.log('light rain')
        }else if(description.includes('broken clouds')){
            console.log('broken clouds')
        }else if(description.includes('scattered clouds')){
            console.log('scattered clouds')
        }else if(description.includes('rain')){
            console.log('rain')
        }else if(description.includes('thunderstorm')){
            console.log('thunderstorm')
        }else if(description.includes('snow')){
            console.log('snow')
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

