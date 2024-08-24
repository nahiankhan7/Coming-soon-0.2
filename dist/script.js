const aboutButton = document.getElementById("aboutBtn");
const homePage = document.getElementById("homePage");
const aboutPage = document.getElementById("aboutUs");
const aboutCloseButton = document.getElementById("closeButton");

aboutButton?.addEventListener("click", () => {
  aboutPage.style.top = "0%";
  aboutCloseButton?.classList.remove("hidden");
});

aboutCloseButton?.addEventListener("click", () => {
  aboutPage.style.top = "100%";
  aboutCloseButton?.classList.add("hidden");
});

// Reverse countdown timer
const startDate = new Date("Aug 21, 2025 00:00:00").getTime();
const x = setInterval(() => {
  // Countdown DOM elements
  const showDays = document.getElementById("days");
  const showHours = document.getElementById("hours");
  const showMinutes = document.getElementById("minute");
  const showSeconds = document.getElementById("second");

  // get new date
  const currentTime = new Date().getTime();
  const distance = startDate - currentTime;

  // calculate time
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // add DOM
  showDays.innerHTML = days;
  showHours.innerHTML = hours < 10 ? "0" + hours : hours;
  showMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
  showSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;

  if (distance < 0) {
    clearInterval(x);
    showDays.innerHTML = "00";
    showHours.innerHTML = "00";
    showMinutes.innerHTML = "00";
    showSeconds.innerHTML = "00";
  }
}, 1000);
