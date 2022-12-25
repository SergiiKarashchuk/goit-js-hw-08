import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

const formData = {};
const LOCALSTOREGE_KEY = 'feedback-form-state';

dataFromLocalStorage()

function onFormData(evt) {
  let persistedData = localStorage.getItem(LOCALSTOREGE_KEY);
  persistedData = persistedData? JSON.parse(persistedData) : {};
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmitForm(evt) {
  console.log(JSON.parse(localStorage.getItem(LOCALSTOREGE_KEY)));
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(LOCALSTOREGE_KEY);
}

function dataFromLocalStorage() {
let persistedData = localStorage.getItem(LOCALSTOREGE_KEY);
  if (persistedData) {
    persistedData = JSON.parse(persistedData);
    Object.entries(persistedData).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
};