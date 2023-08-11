let [millisecs, secs, mins, hrs] = [0, 0, 0, 0];
let showTime = document.querySelector(".stopwatch__time");

const startTimer = document.querySelector(".stopwatch__btn--start");
const stopTimer = document.querySelector(".stopwatch__btn--stop");
const resetTimer = document.querySelector(".stopwatch__btn--reset");

let timer = null;

startTimer.addEventListener("click", () => {
  timer = setInterval(stopWatch, 10);
});

stopTimer.addEventListener("click", () => {
  clearInterval(timer);
});

resetTimer.addEventListener("click", () => {
  clearInterval(timer);
  millisecs = 0;
  secs = 0;
  mins = 0;
  hrs = 0;
  showTime.innerHTML = "00:00:00:00";
});

const stopWatch = () => {
  millisecs++;
  if (millisecs / 100 === 1) {
    millisecs = 0;
    secs++;
    if (secs / 60 === 1) {
      secs = 0;
      mins++;
      if (mins / 60 === 1) {
        mins = 0;
        hrs++;
      }
    }
  }

  showTime.innerHTML = `${hrs < 10 ? "0" + hrs : hrs}:${
    mins < 10 ? "0" + mins : mins
  }:${secs < 10 ? "0" + secs : secs}:${millisecs < 10 ? "0" + millisecs : millisecs}`;
};
