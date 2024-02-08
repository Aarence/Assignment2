fetch('https://api.data.gov.sg/v1/environment/24-hour-weather-forecast')
            .then(response => response.json())
            .then(data => {
                // Extract relevant information from the response
                const forecastItems = data.items;

                // Display the forecast
                const forecastContainer = document.getElementById('forecast-container');

                // Iterate over forecast items and display each one
                forecastItems.forEach(item => {
                    const forecastItemElement = document.createElement('div');
                    forecastItemElement.classList.add('forecast-item');

                    // Format and display forecast information
                    const timestamp = new Date(item.timestamp);
                    const updateTimestamp = new Date(item.update_timestamp);

                    forecastItemElement.innerHTML = `
                        <h2>Forecast Information</h2>
                        <p>Update Time: ${updateTimestamp.toLocaleString()}</p>
                        <p>Forecast Issued Time: ${timestamp.toLocaleString()}</p>
                        <p>General Forecast: ${item.general.forecast}</p>
                        <p>Temperature: Low ${item.general.temperature.low}°C, High ${item.general.temperature.high}°C</p>
                        <p>Relative Humidity: Low ${item.general.relative_humidity.low}%, High ${item.general.relative_humidity.high}%</p>
                        <p>Wind Speed: Low ${item.general.wind.speed.low} km/h, High ${item.general.wind.speed.high} km/h</p>
                        <p>Wind Direction: ${item.general.wind.direction}</p>
                    `;

                    forecastContainer.appendChild(forecastItemElement);
                });
            })
            .catch(error => {
                console.error('Error fetching weather forecast:', error);
                const forecastContainer = document.getElementById('forecast-container');
                forecastContainer.innerHTML = '<p>Error fetching weather forecast. Please try again later.</p>';
            });

/* end of weather forecast code */
/* psi */
document.addEventListener("DOMContentLoaded", function (){
    var submitButton = document.getElementById("btnSubmit");

    submitButton.addEventListener("click", function() {
        // Get the date and time input by the user
        var dateTimeInput = document.getElementById("txtDate").value;

        // Construct the API URL based on the user input
        var url = "https://api.data.gov.sg/v1/environment/psi?date_time=" + dateTimeInput + "&date=" + dateTimeInput.substring(0, 10);

        // Fetch PSI data based on user input
        fetchPsiData(url);
    });
});

// Function to fetch PSI data based on the provided URL
function fetchPsiData(url) {
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log("API status:" + data.api_info.status);
        var reading_twenty_four = data.items[0].readings.psi_twenty_four_hourly;
        var reading_three_hour = data.items[0].readings.pm10_twenty_four_hourly;
        var contentTwentyFour = "";
        var contentThreeHour = "";

        for (var key in reading_twenty_four) {
            console.log(key + ": " + reading_twenty_four[key]);
            contentTwentyFour += key + ": " + reading_twenty_four[key] + "<br/>";
        }

        for (var key in reading_three_hour) {
            console.log(key + ": " + reading_three_hour[key]);
            contentThreeHour += key + ": " + reading_three_hour[key] + "<br/>";
        }

        document.getElementById("psi-twenty-four-hourly").innerHTML = contentTwentyFour;
        document.getElementById("pm10-twenty-four-hourly").innerHTML = contentThreeHour; 
        localStorage.setItem("three_hourly", JSON.stringify(reading_three_hour)); 
    })
    .catch(function(error) {
        console.error(error);
    });
}
