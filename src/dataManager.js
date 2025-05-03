export function GetCity(data){
  const city = data.name;
  console.log(city);
}
export function GetDate(data){
  const date = new Date(data.dt * 1000);
  const arr = date.toString().split(" ");
  const res = arr[0] + ' '+'|'+' '+arr[1];
  console.log(res);
}