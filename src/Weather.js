import React from "react";
import axios from "axios";
export default function Weather(props) {
  function handleResponse(response) {
    alert(
      "The Weather in ${response.data.name} is ${response.data.main.temp}°C"
    );
  }
  return <h2>Hello Weather</h2>;
}
let apiKey = "3a94f3778290bfeee61278505dbbe51d";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric";
axios.get(apiUrl).then(handleResponse);
