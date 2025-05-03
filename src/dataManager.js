export function GetCity(data){
  const city = data.name;
  return city;
  console.log(city);
}
export function GetDate(data){
  const date = new Date(data.dt * 1000);
  const arr = date.toString().split(" ");
  const res = arr[0] + ' '+'|'+' '+arr[1];
  return res;
  console.log(res);
}
export function DateCityHTMLManager(data){
  const date = GetDate(data);
  const city = GetCity(data);
  let html_c = `<p style="margin:0;"> ${city} </p>`;
  let html_d = `<p style="margin:0;"> ${date} </p>`;
  document.querySelector('.city-name').innerHTML = html_c;
  document.querySelector('.date-info').innerHTML = html_d;
}