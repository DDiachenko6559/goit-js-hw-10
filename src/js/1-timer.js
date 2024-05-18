('use strict');
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userSelectedDate;
let countdownInterval;

const inputDate = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    const currentDate = new Date();
    if (userSelectedDate < currentDate) {
      iziToast.error({
        title: 'Please',
        message: ' choose a date in the future',
        position: 'topRight',
        backgroundColor: '#B51B1B',
        messageColor: '#FFFFFF',
        titleColor: '#FFFFFF',
        progressBarColor: '#FFBEBE',
        timeout: 3000,
        closeOnClick: true,
      });
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
};

flatpickr(inputDate, options);

const daysCounter = document.querySelector('[data-days]');
const hoursCounter = document.querySelector('[data-hours]');
const minutesCounter = document.querySelector('[data-minutes]');
const secondsCounter = document.querySelector('[data-seconds]');

startBtn.addEventListener('click', () => {
  const countdownUpdate = () => {
    const now = new Date().getTime();
    const delta = userSelectedDate - now;

    if (delta <= 0) {
      clearInterval(countdownInterval);
      inputDate.disabled = false;
      startBtn.disabled = true;
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(delta);

    daysCounter.innerText = days.toString().padStart(2, '0');
    hoursCounter.innerText = hours.toString().padStart(2, '0');
    minutesCounter.innerText = minutes.toString().padStart(2, '0');
    secondsCounter.innerText = seconds.toString().padStart(2, '0');
  };

  inputDate.disabled = true;
  startBtn.disabled = true;
  countdownUpdate();
  countdownInterval = setInterval(countdownUpdate, 1000);
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
