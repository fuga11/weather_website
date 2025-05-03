import { response } from "./responce.js";
import { GetCity,GetDate } from "./dataManager.js";
response()
  .then(data => {
    console.log('Data:', data);
    GetCity(data);
    GetDate(data);
  })
  .catch(error => {
    console.log('Error:', error);
  });