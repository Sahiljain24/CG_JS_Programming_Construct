// Convert temperature between Celsius and Fahrenheit
const prompt = require("prompt-sync")();

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

const choice = parseInt(prompt("Choose conversion: 1. C to F | 2. F to C: "));
const temp = parseFloat(prompt("Enter temperature: "));

switch (choice) {
    case 1:
        if (temp < 0 || temp > 100) console.log("Temperature out of range!");
        else console.log(`${temp}°C = ${celsiusToFahrenheit(temp).toFixed(2)}°F`);
        break;
    case 2:
        if (temp < 32 || temp > 212) console.log("Temperature out of range!");
        else console.log(`${temp}°F = ${fahrenheitToCelsius(temp).toFixed(2)}°C`);
        break;
    default:
        console.log("Invalid choice!");
}
