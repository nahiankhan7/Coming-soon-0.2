const aboutButton = document.getElementById("aboutBtn");
const aboutPage = document.getElementById("aboutUs");
const aboutCloseButton = document.getElementById("closeButton");

const modalOpenButton = document.getElementById("modalOpen");
const modalPopup = document.getElementById("modalWrapper");
const modalCloseButton = document.getElementById("modalCloseButton");

// event listener for about section
aboutButton?.addEventListener("click", () => {
  aboutPage.style.top = "0%";
  aboutCloseButton?.classList.remove("hidden");
});

aboutCloseButton?.addEventListener("click", () => {
  aboutPage.style.top = "100%";
  aboutCloseButton?.classList.add("hidden");
});

// event listener for modal popup
modalOpenButton?.addEventListener("click", () => {
  modalPopup?.classList.remove("hidden");
  setTimeout(() => {
    modalPopup?.classList.remove("opacity-0");
    modalPopup?.classList.add("opacity-100");
  }, 10);
});

modalCloseButton?.addEventListener("click", () => {
  modalPopup?.classList.remove("opacity-100");
  modalPopup?.classList.add("opacity-0");

  setTimeout(() => {
    modalPopup?.classList.add("hidden");
  }, 300);
});

// mobile modal element
const modalMobileMin = document.getElementById("modalWrapperMin");
const modalOpenMin = document.getElementById("modalOpenMin");
const modalCloseMin = document.getElementById("modalCloseMin");

// event listener for modal popup
modalOpenMin?.addEventListener("click", () => {
  modalMobileMin?.classList.remove("hidden");
  setTimeout(() => {
    modalMobileMin?.classList.remove("opacity-0");
    modalMobileMin?.classList.add("opacity-100");
  }, 10);
});

modalCloseMin?.addEventListener("click", () => {
  modalMobileMin?.classList.remove("opacity-100");
  modalMobileMin?.classList.add("opacity-0");

  setTimeout(() => {
    modalMobileMin?.classList.add("hidden");
  }, 300);
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
