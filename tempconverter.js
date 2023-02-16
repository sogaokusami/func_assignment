function celsiusToFahrenheit(currentTempCelsius) {
  let fahrenheit = `${currentTempCelsius}℃ is ${
    currentTempCelsius * 1.8 + 32
  }℉ `;
  return fahrenheit;
}

console.log(celsiusToFahrenheit(45));

function fahrenheitToCelsius(currentTempFahrenheit) {
  let celsius = `${currentTempFahrenheit}℉ is ${
    (currentTempFahrenheit - 32) * (5 / 9)
  }℃`;
  return celsius;
}

console.log(fahrenheitToCelsius(45));
