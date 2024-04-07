function getWeather() {
    let city = document.getElementById("cityName").value;
    let name = '';
    let lat = '';
    let lon = '';
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=5&appid=b9445ef7368618290ad5db4f1f8c21e1')
        .then(response => {
            if (response.ok)
                return response.json();
            else {
                console.log("Server Error");
                return Promise.reject(new Error('Server Error'));

            }
        }).then(geoResponse => {
            name = geoResponse[0].name;
            lat = geoResponse[0].lat;
            lon = geoResponse[0].lon;
            country = geoResponse[0].country
            fetch('https://api.openweathermap.org/data/3.0/onecall?lat=' + lat + '&lon=' + lon + '&units=metric&appid=b9445ef7368618290ad5db4f1f8c21e1')
                .then(response => {
                    return response.json()

                }).then(apiResponse => {

                    displayWeather(apiResponse, name, country)

                }).catch(err => {
                    console.log("Error in OpenAPI Server", err)

                })

        }).catch(err => {
            console.log("Error in Geocoding Server", err)
            let element = document.getElementById('weatherDetails');
            element.innerHTML = `<h4  style="color: black;font-weight:bolder">Enter Valid City Name !!!</h4>`
            element = document.getElementById('forecastDaily');
            element.innerHTML = ``
            element = document.getElementById('forecastHourly');
            element.innerHTML = ``


        })
}



function displayWeather(apiResponse, city, country) {

    let current = apiResponse['current']
    let icon = (current.weather[0]).icon
    let weatherDescription = (apiResponse.daily[0].summary)

    let element = document.getElementById('weatherDetails');
    htmlcontent = `
    <h4>Current Weather at <span class ="city" >`+ city + `, ` + country + `</span> </h4>
    <h2><img src="https://openweathermap.org/img/wn/`+ icon + `.png">${current.temp}&deg;C</h2>
    <h5>Feels like ${current.feels_like}&deg;C</h5>
    <h5> ${weatherDescription}</h5>

    <h6>Humidity: ${current.humidity}%  &emsp;     UV: ${current.uvi} </h6>
    <h6>Dew point: ${current.dew_point}&deg;C  &emsp;  Visibility: ${current.visibility / 1000}KM</h6>
    `
    element.innerHTML = htmlcontent
    eightDayForecast(apiResponse)


}


function eightDayForecast(apiResponse) {
    let htmlcontent = '';
    let element = document.getElementById('forecastDaily');
    htmlcontent = `
    <h3 class = "text-center">8-Day Forecast</h3> <table class = "t-left" > `;
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    apiResponse.daily.forEach(ele => {
        //console.log(ele)
        let date = new Date(ele.dt * 1000);
        htmlcontent = htmlcontent + `<tr>
        <td>
        <h6><a>${weekday[date.getDay()]}, ${date.getDate()}</a>&emsp;</h6><h6>
        </td>
        <td>
        <h6><span>${Math.round(ele.temp.max)}&deg;C/${Math.round(ele.temp.min)}&deg;C  &emsp;</span></h6>
        </td>
        <td>
        <h6><span>${ele.weather[0].description}<span></h6>
        </td>
        </tr>
        
        `
    });
    htmlcontent + `</table>`
    element.innerHTML = htmlcontent

    element = document.getElementById('forecastHourly');
    htmlcontent = `
    <h3 class = "text-center">Hourly Forecast</h3> <table class = "t-left" > `;
    i = 0;

    for (let ele of apiResponse.hourly) {
        i++
        //console.log(ele)
        let date = new Date(ele.dt * 1000);
        htmlcontent = htmlcontent + `<tr>
        <td>
        <h6><a>${weekday[date.getDay()]}, ${date.toLocaleString('en-US', { hour: 'numeric', hour12: true })}</a>&emsp;</h6><h6>
        </td>
        <td>
        <h6>${Math.round(ele.temp)}&deg;C&emsp;</h6>
        </td>
        <td>
        <h6><span>${ele.weather[0].description}<span></h6>
        </td>
        </tr>
        
        `
        if (i == 8)
            break
    };
    htmlcontent + `</table>`
    element.innerHTML = htmlcontent


}