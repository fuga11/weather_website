import { response } from "./responce.js";
import { GetCity,GetDate,DateCityHTMLManager } from "./dataManager.js";
response()
  .then(data => {
    console.log('Data:', data);
    GetCity(data);
    GetDate(data);
    DateCityHTMLManager(data);
  })
  .catch(error => {
    console.log('Error:', error);
  });