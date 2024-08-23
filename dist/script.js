document.addEventListener("DOMContentLoaded", () => {
  const aboutButton = document.getElementById("aboutBtn"); // Replace with your actual selector
  const homePage = document.getElementById("homePage"); // Replace with your actual selector
  const aboutPage = document.getElementById("aboutUs"); // Replace with your actual selector

  if (aboutButton) {
    aboutButton.addEventListener("click", () => {
      if (homePage) {
        homePage.classList.add("animate-fade-out"); // Add an animation class
        setTimeout(() => {
          homePage.classList.remove("transition-page");
          homePage.classList.remove("lg:top-0");
          homePage.classList.add("lg:top-[100%]");
        }, 500); // Adjust timeout to match the animation duration
      }
      if (aboutPage) {
        aboutPage.classList.add("transition-page");
        aboutPage.classList.remove("lg:top-[100%]");
      }
    });
  }
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
