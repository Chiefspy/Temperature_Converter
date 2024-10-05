const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const FahrenheittoKelvin = document.getElementById("FahrenheittoKelvin");
const CelsiustoKelvin = document.getElementById("CelsiustoKelvin");
const result = document.getElementById("result");
let temp;

function convert() {
    if (toFahrenheit.checked) {
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "℉";
    } 
    else if (toCelsius.checked) {
        temp = Number(textBox.value);
        temp = (temp - 32) * 5 / 9;
        result.textContent = temp.toFixed(1) + "℃";
    } 
    else if (CelsiustoKelvin.checked){
        temp = Number(textBox.value);
        temp = temp + 273;
        result.textContent = temp.toFixed(1) + "K";
    }
    else {
        result.textContent = "Select a Unit";
    }
}
