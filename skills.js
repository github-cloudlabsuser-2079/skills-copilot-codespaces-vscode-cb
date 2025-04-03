// function to covert Celsius
// to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// function to covert Fahrenheit
// to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Driver code
let celsius = 25;
console.log(celsius + "°C is equal to " + celsiusToFahrenheit(celsius) + "°F");

// Driver code
let fahrenheit = 77;
console.log(fahrenheit + "°F is equal to " + fahrenheitToCelsius(fahrenheit) + "°C");