const date_El = document.querySelector(".date-day"),
    date_name = document.querySelector(".date-dayname"),
    f_day_name = document.querySelector(".fday-name"),
    s_day_name = document.querySelector(".sday-name"),
    t_day_name = document.querySelector(".tday-name"),
    fo_day_name = document.querySelector(".foday-name"),
    date = new Date(),
    date_year = date.getFullYear(),
    date_month = date.getMonth(),
    date_day = date.getDate(),
    date_hour = date.getHours(),
    date_week_day = date.getDay();
date_El.innerHTML = `${date_day} / ${date_month + 1} / ${date_year}`;
{
    if (date_week_day === 0) {
        date_name.innerHTML = 'Sunday';
        f_day_name.innerHTML = 'Sun';
        s_day_name.innerHTML = 'Mon';
        t_day_name.innerHTML = 'Tue';
        fo_day_name.innerHTML = 'Wed';
    } else if (date_week_day === 1) {
        date_name.innerHTML = 'Monday';
        f_day_name.innerHTML = 'Mon';
        s_day_name.innerHTML = 'Tue';
        t_day_name.innerHTML = 'Wed';
        fo_day_name.innerHTML = 'Thu';
    } else if (date_week_day === 2) {
        date_name.innerHTML = 'Tuesday';
        f_day_name.innerHTML = 'Tue';
        s_day_name.innerHTML = 'Wed';
        t_day_name.innerHTML = 'Thu';
        fo_day_name.innerHTML = 'Fri';
    } else if (date_week_day === 3) {
        date_name.innerHTML = 'Wednesday';
        f_day_name.innerHTML = 'Wed';
        s_day_name.innerHTML = 'Thu';
        t_day_name.innerHTML = 'Fri';
        fo_day_name.innerHTML = 'Sat';
    } else if (date_week_day === 4) {
        date_name.innerHTML = 'Thursday';
        f_day_name.innerHTML = 'Thu';
        s_day_name.innerHTML = 'Fri';
        t_day_name.innerHTML = 'Sat';
        fo_day_name.innerHTML = 'Sun';
    } else if (date_week_day === 5) {
        date_name.innerHTML = 'Friday';
        f_day_name.innerHTML = 'Fri';
        s_day_name.innerHTML = 'Sat';
        t_day_name.innerHTML = 'Son';
        fo_day_name.innerHTML = 'Mon';
    } else if (date_week_day === 6) {
        date_name.innerHTML = 'Saturday';
        f_day_name.innerHTML = 'Sat';
        s_day_name.innerHTML = 'Sun';
        t_day_name.innerHTML = 'Mun';
        fo_day_name.innerHTML = 'Tue';
    }
}


const location_button = document.querySelector(".location-button"),
    apiKey = "9fe670c445a03bd4b5d86ef2d523ac44";


location_button.addEventListener("click", (e) => {
    e.preventDefault();
    const user_location_city = document.querySelector(".user-location-city"),
        user_location_country = document.querySelector(".user-location-country"),
        weather_temp = document.querySelector(".weather-temp"),
        weather_desc = document.querySelector(".weather-desc"),
        weather_icon = document.querySelector(".weather-icon"),
        weather_desc_more = document.querySelector(".weather-desc-more"),
        wind_value = document.querySelector(".wind-value"),
        humidity_value = document.querySelector(".humidity-value"),
        clouds_value = document.querySelector(".clouds-value"),
        f_day_temp = document.querySelector(".fday-temp"),
        s_day_temp = document.querySelector(".sday-temp"),
        t_day_temp = document.querySelector(".tday-temp"),
        fo_day_temp = document.querySelector(".foday-temp"),
        first_weather_icon = document.querySelector(".first-weather-icon"),
        second_weather_icon = document.querySelector(".second-weather-icon"),
        third_weather_icon = document.querySelector(".third-weather-icon"),
        fourth_weather_icon = document.querySelector(".fourth-weather-icon");
    const city_name = prompt("Enter your Location");
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city_name}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const { city, list } = data;
            user_location_city.innerHTML = city.name;
            user_location_country.innerHTML = city.country;
            if (city.country !== '') {
                user_location_country.style = "display: inline";
            } else {
                user_location_country.style = "display: none";
            }


            weather_icon.setAttribute("src", `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${list[0].weather[0].icon}.svg`);
            weather_temp.innerHTML = `${Math.round(list[0].main.temp)}°C`;
            weather_desc.innerHTML = list[0].weather[0].main;
            weather_desc_more.innerHTML = `(${list[0].weather[0].description})`;
            wind_value.innerHTML = `${Math.ceil(list[0].wind.speed)} m/s`;
            humidity_value.innerHTML = `${list[0].main.humidity} %`;
            clouds_value.innerHTML = `${list[0].clouds.all}`;
            f_day_temp.innerHTML = `${Math.round(list[0].main.temp)}°C`;
            first_weather_icon.setAttribute("src", `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${list[0].weather[0].icon}.svg`);
            first_weather_icon.style = "opacity: 1"
            s_day_temp.innerHTML = `${Math.round(list[8].main.temp)}°C`;
            second_weather_icon.setAttribute("src", `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${list[8].weather[0].icon}.svg`);
            second_weather_icon.style = "opacity: 1"
            t_day_temp.innerHTML = `${Math.round(list[16].main.temp)}°C`;
            third_weather_icon.setAttribute("src", `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${list[16].weather[0].icon}.svg`);
            third_weather_icon.style = "opacity: 1"
            fo_day_temp.innerHTML = `${Math.round(list[24].main.temp)}°C`;
            fourth_weather_icon.setAttribute("src", `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${list[24].weather[0].icon}.svg`);
            fourth_weather_icon.style = "opacity: 1"


            const weather_side = document.querySelector(".weather-side");
            if (weather_desc_more.innerHTML === "(overcast clouds)") {
                weather_side.style = 'background-image: url(./Images/clouds.jpeg)';
            }
            if (weather_desc_more.innerHTML === "(light rain)") {
                weather_side.style = 'background-image: url(./Images/rain.jpeg)';
            }
            if (weather_desc_more.innerHTML === "(heavy intensity rain)") {
                weather_side.style = 'background-image: url(./Images/heavyRain.jpeg)';
            }
            if (weather_desc_more.innerHTML === "(broken clouds)" || weather_desc_more.innerHTML === "(few clouds)" || weather_desc_more.innerHTML === "(scattered clouds)") {
                weather_side.style = 'background-image: url(./Images/fewClouds.jpeg)';
            }
            if (weather_desc.innerHTML === "Clear") {
                weather_side.style = 'background-image: url(./Images/sunny.jpeg)';
            }
            if (weather_desc.innerHTML === "snow") {
                weather_side.style = 'background-image: url(./Images/snow.jpeg)';
            }
        }).catch(() => {
            alert("Search for a valid city")
        })
})