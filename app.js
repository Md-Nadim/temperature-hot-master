const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', function(){
   const inputbtn = document.getElementById('input-btn').value;
   
   fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputbtn+'&appid=a6a5d2022188d670243427dc4639ff4a')
   .then(response => response.json())
   .then(data => {
    const cityName = data.name;
    const tem = data.main.temp;
    const temp = tem - 273.15;
    const clouds = data.weather[0].description;

    document.getElementById('city').innerText = cityName;
    document.getElementById('temp').innerText = temp.toFixed(2);
    document.getElementById('clouds').innerText = clouds;
   })

   .catch(res => alert('Please Type Right City Name'));
})