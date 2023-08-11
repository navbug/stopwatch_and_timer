const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const startBtn = document.querySelector('.btn--start');
const stopBtn = document.querySelector('.btn--pause');
const resetBtn = document.querySelector('.btn--reset');

let countdownTimer = null;

startBtn.addEventListener('click', () => {
  if(hours.value === 0 || minutes.value === 0 || seconds.value === 0) return;

  const startInterval = () => {
    startBtn.style.display = "none";
    stopBtn.style.display = "block";

    countdownTimer = setInterval(() => {
      timerFun();
    }, 1000);
  }

  startInterval();
});

const stopInterval = (state) => {
  startBtn.innerHTML = state === "pause" ? "Continue" : "Start";

  stopBtn.style.display = "none";
  startBtn.style.display = "block";

  clearInterval(countdownTimer);
}

const timerFun = () => {
  console.log(seconds.value);
  if(seconds.value > 60) {
    minutes.value++;
    seconds.value = parseInt(seconds.value) - 59;
  }
  if(minutes.value > 60) {
    hours.value++;
    minutes.value = parseInt(minutes.value) - 59;
  }

  if(hours.value === 0 && minutes.value === 0 && seconds.value === 0) {
    hours = "";
    minutes = "";
    seconds = "";
    stopInterval();

  } else if(seconds.value != 0) {
    seconds.value = `${seconds.value < 10 ? "0" : ""}${seconds.value - 1}`;

  } else if(minutes.value != 0 && seconds.value == 0) {
    seconds.value = 59;
    minutes.value = `${minutes.value < 10 ? "0" : ""}${minutes.value - 1}`;

  } else if(hours.value != 0 && minutes.value == 0) {
    minutes.value = 60;
    hours.value = `${hours.value < 10 ? "0" : ""}${hours.value - 1}`;
  }
}

stopBtn.addEventListener("click", () => {
  stopInterval("pause");
});

resetBtn.addEventListener("click", () => {
  stopInterval();

  hours.value = "";
  minutes.value = "";
  seconds.value = "";
});


