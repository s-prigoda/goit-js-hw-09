console.log('form');

let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const settings = 'feedback-form-state';
const savedData = localStorage.getItem(settings);

if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(settings, JSON.stringify(formData));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

  const { email, message } = formData;

  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  // Очищаємо все
  localStorage.removeItem(settings);
  formData = { email: '', message: '' };
  form.reset();
});
