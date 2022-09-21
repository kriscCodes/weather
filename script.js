let weather = {
    apiKey: 'f31fcd70c90083efb02ee5a6b0f95ce3',
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=imperial&appid="
            + this.apiKey
            )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));// init of api data, we acess data through json. First line is the api key then the function to acess and see our data. NOTE this.display ... was og console.log//
    },
    displayWeather: function(data) {
        const { name } = data;
        const {description} = data.weather[0];
        const {temp, humidity} = data.main;
        const { speed } = data.wind;// each of these constant is simply a propert from the JSON that we stored in a variable and acessed through dom notation.//
        console.log(name, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = speed + " KMH";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/2100x1600/?" + name + "')";

    },
    search: function(){
          this.fetchWeather(document.querySelector(".searchBar").value);
    }
};

document.querySelector(".searchButton").addEventListener("click", function(){
    weather.search();
});

document.querySelector(".searchBar").addEventListener("keypress", function(event){
if (event.key == "Enter"){
    weather.search();
}
})

