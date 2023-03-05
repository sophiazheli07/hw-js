const rateButtonOne = document.querySelector("#rate-one");
const rateButtonTwo = document.querySelector("#rate-two");
const rateButtonThree = document.querySelector("#rate-three");
const rateButtonFour = document.querySelector("#rate-four");
const rateButtonFive = document.querySelector("#rate-five");

const openModalButton = document.querySelectorAll("[data-modal-target]");
const closeModalButton = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
const Rates = [];

rateButtonOne.onclick = () => {
  const rate = rateButtonOne.value;

  const UserRate = { rate };
  Rates.push(UserRate);
  sendFeedback(rate);
};

rateButtonTwo.onclick = () => {
  const rate = rateButtonTwo.value;

  const UserRate = { rate };
  Rates.push(UserRate);
  sendFeedback(rate);
};

rateButtonThree.onclick = () => {
  const rate = rateButtonThree.value;

  const UserRate = { rate };
  Rates.push(UserRate);
  sendFeedback(rate);
};

rateButtonFour.onclick = () => {
  const rate = rateButtonFour.value;

  const UserRate = { rate };
  Rates.push(UserRate);
  sendFeedback(rate);
};

rateButtonFive.onclick = () => {
  const rate = rateButtonFive.value;

  const UserRate = { rate };
  Rates.push(UserRate);
  sendFeedback(rate);
};

function sendFeedback(score) {
  fetch("http://localhost:3000/feedbacks", {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ score: score }),
    method: "POST",
  })
    .then(() => {
      console.log("data sent");
    })
    .catch(() => {
      console.log("error");
    });
}

openModalButton.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const Modals = document.querySelectorAll(".modal.active");
  Modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButton.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
    window.location.href = "main.html";
  });
});
function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}
function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
  window.location.href = "main.html";
}

console.log(Rates);
