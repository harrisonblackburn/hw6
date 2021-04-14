// function mockFetch(){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve( {
//                 "coord": {
//                   "lon": -0.13,
//                   "lat": 51.51
//                 },
//                 "weather": [
//                   {
//                     "id": 300,
//                     "main": "Drizzle",
//                     "description": "light intensity drizzle",
//                     "icon": "09d"
//                   }
//                 ],
//                 "base": "stations",
//                 "main": {
//                   "temp": 280.32,
//                   "pressure": 1012,
//                   "humidity": 81,
//                   "temp_min": 279.15,
//                   "temp_max": 281.15
//                 },
//                 "visibility": 10000,
//                 "wind": {
//                   "speed": 4.1,
//                   "deg": 80
//                 },
//                 "clouds": {
//                   "all": 90
//                 },
//                 "dt": 1485789600,
//                 "sys": {
//                   "type": 1,
//                   "id": 5091,
//                   "message": 0.0103,
//                   "country": "GB",
//                   "sunrise": 1485762037,
//                   "sunset": 1485794875
//                 },
//                 "id": 2643743,
//                 "name": "London",
//                 "cod": 200
//                 })
//         },  250)
//     })
// }

// function getCurrentWeather(){
//     mockFetch().then(function(data){
//         console.log(data);
//         // use jquery to display this accessed data to user
//     })
// }
// getCurrentWeather();

// function getApi() {
//   var requestUrl = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=a540ec06d4c60adcc15148c69b2c836f'
//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       //Using console.log to examine the data
//       console.log(data);
//     });
// }
// getApi();

var weatherDetailsTableEl = document.getElementById('weatherDetailsTable')

function handleGetWeather(userInput){
var requestUrl = `https://api.opencagedata.com/geocode/v1/json?q=${userInput}&key=0639f907a9094fdf9b691df6cd367823`
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
    var requestUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latLon.lat}&lon=${latLon.lng}&appid=a540ec06d4c60adcc15148c69b2c836f`
     fetch(requestUrl)
       .then(function (response) {
         return response.json();
       })
       .then(function (data) {
       //Using console.log to examine the data
         console.log(data);
        
         var tableRow = document.createElement('tr'); 

         tableRow.innerHTML = `<td> ${data.current}</td>
         <td> ${data.weather[0].main} </td>
         <td> ${data.main.humidity} </td>`;

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