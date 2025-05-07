import { response } from "./responce.js";
import { DateCityHTMLManager,middlePart } from "./dataManager.js";
alert("Введите название города")
const inputfield = document.querySelector('.search-input');
document.querySelector('.search-button').addEventListener('click',() =>{
  response(inputfield.value)
  .then(data => {
    console.log('Data:', data);
    DateCityHTMLManager(data);
    middlePart(data);
  })
  .catch(error => {
    console.log('Error:', error);
  });
});