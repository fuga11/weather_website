import { response } from "./responce.js";
import { DateCityHTMLManager,middlePart } from "./dataManager.js";
response()
  .then(data => {
    console.log('Data:', data);
    DateCityHTMLManager(data);
    middlePart(data);
  })
  .catch(error => {
    console.log('Error:', error);
  });