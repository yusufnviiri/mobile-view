const errorMessage = document.querySelector('#emailErr');
const form = document.querySelector('form');
const email = document.querySelector('#email');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value.toLowerCase() === email.value) {
    form.submit();
  } else {
    errorMessage.innerHTML = 'email address must be lower case';
    errorMessage.style.display = 'block';
  }
});

// preserve data

const inputValue = document.querySelectorAll('input');
inputValue.forEach((input) => {
  input.addEventListener('change', (event) => {
    let formData = JSON.parse(localStorage.getItem('formData'));
    if (!formData) {
      formData = { name: '', email: '', message: '' };
    }
    formData[event.target.name] = event.target.value;
    localStorage.setItem('formData', JSON.stringify(formData));
  });
});

const textArea = document.getElementById('testarea');
textArea.addEventListener('change', (event) => {
  let formData = JSON.parse(localStorage.getItem('formData'));
  if (!formData) {
    formData = { name: '', email: '', message: '' };
  }
  formData.message = event.target.value;
  localStorage.setItem('formData', JSON.stringify(formData));
});