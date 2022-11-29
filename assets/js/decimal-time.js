const [hourHand, minuteHand, secondHand] = document.querySelectorAll(".hand");
const OFFSET = new Date().getTimezoneOffset() * 60000;

/**
 * Provides decimal time "past midnight" in seconds
 * @param {Number} t local ms past epoch to be converted to decimal time
 * @returns number of decimal seconds past midnight
 */
const convertToDecimal = (t) => ((t - OFFSET) % 86400000) / 864;

const setClock = (providedTime) => {
  // `+ 90` is used to ensure midnight is straight up
  const time = providedTime ? new Date(providedTime).getTime() : Date.now();
  const hourAngle = convertToDecimal(time) * 0.0036 + 90;  // convert to degrees
  const minuteAngle = convertToDecimal(time) % 10000 * 0.036 + 90;
  const secondAngle = convertToDecimal(time) % 100 * 3.6 + 90;
  hourHand.style.transform = `rotate(${hourAngle}deg)`;
  minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
  secondHand.style.transform = `rotate(${secondAngle}deg)`;
};

timerRunning = setInterval(setClock, 864);
const stopClock = () => clearInterval(timerRunning);
