// Завдання 2 - Генератор промісів

'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const delayInput = document.querySelector("input[name='delay']");
  const delay = parseInt(delayInput.value);

  const stateRadio = document.querySelector("input[name='state']:checked");
  const state = stateRadio ? stateRadio.value : null;

  if (delay && state) {
    if (delay === '') {
      iziToast.warning({
        title: 'Warning',
        message: 'Please fill in all fields.',
      });
    } else {
      const promise = new Promise((resolve, reject) => {
        if (state === 'fulfilled') {
          setTimeout(() => resolve(delay), delay);
        } else if (state === 'rejected') {
          setTimeout(() => reject(delay), delay);
        }
      });

      promise.then(
        delay => {
          iziToast.success({
            title: 'Success',
            message: `✅ Fulfilled promise in ${delay}ms`,
            position: 'topRight',
            backgroundColor: '#59A10D',
            messageColor: '#FFFFFF',
            titleColor: '#FFFFFF',
            progressBarColor: '#326101',
            closeOnClick: true,
            timeout: 3000,
          });
        },
        delay => {
          iziToast.error({
            title: 'Error',
            message: `❌ Rejected promise in ${delay}ms`,
            position: 'topRight',
            backgroundColor: '#EF4040',
            messageColor: '#FFFFFF',
            titleColor: '#FFFFFF',
            progressBarColor: '#FFBEBE',
            closeOnClick: true,
            timeout: 3000,
          });
        }
      );
    }
  }

  delayInput.value = '';
  stateRadio.checked = false;
});
