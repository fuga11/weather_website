function ToCelsius(temp){
  return Math.round((temp - 274.15))
}
function GetCity(data){
  const city = data.name;
  return city;
  console.log(city);
}
function GetDate(data){
  const date = new Date(data.dt * 1000);
  const arr = date.toString().split(" ");
  const res = arr[0] + ' '+'|'+' '+arr[1];
  return res;
  console.log(res);
}
function GetIco(data){
  return data.weather[0].icon;
}
function GetTemporature(data){
  return data.main.temp
}
export function DateCityHTMLManager(data){
  const date = GetDate(data);
  const city = GetCity(data);
  let html_c = `<p style="margin:0;"> ${city} </p>`;
  let html_d = `<p style="margin:0;"> ${date} </p>`;
  document.querySelector('.city-name').innerHTML = html_c;
  document.querySelector('.date-info').innerHTML = html_d;
}
export function middlePart(data){
  const weatherDescriptoin = data.weather[0].description;
  const temperature = ToCelsius(GetTemporature(data));
  const ico = `https://openweathermap.org/img/wn/${GetIco(data)}@2x.png`;
  let html = `
    <div class="middleLeft">
      <div class="weather-img">
      <img src="${ico}" alt="image" class="weather-icon" />
      </div>
        <div class="weather-text-info">
          <div class="temp"> ${temperature}°</div>
          <div class="weather">${weatherDescriptoin}</div>
        </div>
    </div>  
    <div class="right-part">
      <div class="right-section right-section-Hight">
        <div class="value-right-part">
        <p class="value-right-part">6^</p>
        </div>
        <p>hight</p>
      </div>
      <div class="right-section right-section-Low">
        <p class="value-right-part">3^</p>
        <p>low</p>
      </div>
      <div class="right-section right-section-wind">
        <p class="value-right-part">3.1mph</p>
        <p>wind</p>
      </div>
      <div class="right-section right-section-rain">
        <p class="value-right-part">70%</p>
        <p>humidity</p> 
      </div>
      <div class="right-section right-section-sunrise">
        <p class="value-right-part">6:00</p>
        <p>sunrise</p>
      </div>
      <div class="right-section right-section-sunset">
        <p class="value-right-part">18:00</p>
        <p>sunset</p>
      </div>
    </div>
    `
  document.querySelector('.middle-block').innerHTML = html;
}