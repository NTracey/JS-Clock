const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();

  /*
   * Convert time value to fraction
   * Then convert the fraction to degrees to represent the rotation angle on the clock face.
   * Add 90 degrees to shift the starting position of the clock hand from 3 o'clock to 12 o'clock.
   */
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hoursDegrees = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
