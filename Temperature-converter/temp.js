document.addEventListener("DOMContentLoaded", function() {
    const celsiusInput = document.getElementById("celsius");
    const convertButton = document.getElementById("convert");
    const resetButton = document.getElementById("reset");
    const resultsContainer = document.getElementById("results");

    convertButton.addEventListener("click", function() {
        const celsiusValue = parseFloat(celsiusInput.value);

        if (isNaN(celsiusValue)) {
            alert("Please enter a valid temperature in Celsius.");
            return;
        }

        const convertedTemperatures = convertCelsius(celsiusValue);
        displayResults(convertedTemperatures);
    });

    resetButton.addEventListener("click", function() {
        celsiusInput.value = "";
        resultsContainer.innerHTML = "";
    });

    function convertCelsius(celsius) {
        const fahrenheit = (celsius * 9/5) + 32;
        const kelvin = celsius + 273.15;
        const rankine = (celsius + 273.15) * 9/5;

        return {
            Fahrenheit: fahrenheit.toFixed(2),
            Kelvin: kelvin.toFixed(2),
            Rankine: rankine.toFixed(2)
        };
    }

    function displayResults(convertedTemperatures) {
        resultsContainer.innerHTML = "";
        const resultsList = document.createElement("ul");

        for (const unit in convertedTemperatures) {
            const resultItem = document.createElement("li");
            resultItem.innerHTML = `${unit}: ${convertedTemperatures[unit]}`;
            resultsList.appendChild(resultItem);
        }

        resultsContainer.appendChild(resultsList);
    }
});
