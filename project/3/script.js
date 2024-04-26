function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
let celsiusTemperature = 25;
let fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
console.log(celsiusTemperature + "°C is equal to " + fahrenheitTemperature.toFixed(2) + "°F");