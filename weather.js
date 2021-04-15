

var weatherDetailsTableEl = document.getElementById('weatherDetailsTable')


function handleGetWeather(userInput){
var requestUrl = `https://api.opencagedata.com/geocode/v1/json?q=${userInput}&units=imperial&key=0639f907a9094fdf9b691df6cd367823`
  fetch(requestUrl)
    .then(function (response){
      return response.json();
    })
    .then(function(data){
      var result = data.results.shift();
      var latLon = result.geometry;
      getWeatherApi(latLon);
    })
    





}
function getWeatherApi(latLon) {
    var requestUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latLon.lat}&lon=${latLon.lng}&units=imperial&appid=a540ec06d4c60adcc15148c69b2c836f`
     fetch(requestUrl)
       .then(function (response) {
         return response.json();
       })
       .then(function (data) {
       //Using console.log to examine the data
         console.log(data);
        
         var tableRow = document.createElement('tr'); 

         tableRow.innerHTML = 
      
        ` <td> ${data.current.temp}</td>
         <td> ${data.current.humidity} </td>
         <td> ${data.current.uvi} </td>
         <td> ${data.current.wind_speed} </td>`;

      weatherDetailsTable.append(tableRow);
      })
    } 
      // 5 day forecast
  //  http://api.openweathermap.org/data/2.5/forecast?q=chicago&appid=a540ec06d4c60adcc15148c69b2c836f





   $(document).on('click', '#userInputCityButton', function(){
     var userInputCityEl = document.getElementById('userInputCity').value;
     console.log('userInputCityEl');
    handleGetWeather(userInputCityEl);
});


