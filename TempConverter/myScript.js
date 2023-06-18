
    function convertTemperature() {
      var fromUnit = document.getElementById("temperatureFrom").value;
      var toUnit = document.getElementById("temperatureTo").value;
      var value = parseFloat(document.getElementById("temperatureValue").value);

      var result;
      if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        result = (value * 9 / 5) + 32;
      } else if (fromUnit === "celsius" && toUnit === "kelvin") {
        result = value + 273.15;
      } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        result = (value - 32) * 5 / 9;
      } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        result = (value + 459.67) * 5 / 9;
      } else if (fromUnit === "kelvin" && toUnit === "celsius") {
        result = value - 273.15;
      } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        result = (value * 9 / 5) - 459.67;
      } else {
        result = value; // If the same units are selected, no conversion is needed
      }

      document.getElementById("result").textContent = value + " " + fromUnit + " = " + result.toFixed(2) + " " + toUnit;
    }
 