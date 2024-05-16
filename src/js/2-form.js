const localStorageKey = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email.trim() || !formData.message) {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    formData = { email: '', message: '' };
    form.reset();
  }
});

const storedData = localStorage.getItem(localStorageKey);
if (storedData) {
  formData = JSON.parse(storedData);
  form.email.value = formData.email;
  form.message.value = formData.message;
}
