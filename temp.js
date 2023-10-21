function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const tempUnit = document.getElementById('tempUnit').value;
    let result = 0;

    if (tempUnit === "celsius") {
        result = (inputTemp * 9/5) + 32;
    } else {
        result = (inputTemp - 32) * 5/9;
    }

    document.getElementById('result').innerText = `Result: ${result.toFixed(2)} ${tempUnit === "celsius" ? "Fahrenheit" : "Celsius"}`;
}