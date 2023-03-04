const rateButtonOne = document.querySelector("#rate-one");
const rateButtonTwo = document.querySelector("#rate-two");
const rateButtonThree = document.querySelector("#rate-three");
const rateButtonFour = document.querySelector("#rate-four");
const rateButtonFive = document.querySelector("#rate-five");
const mainButton = document.querySelector("#main-btn");
const popupButton = document.querySelector(".popup")
const coverElement = document.querySelector(".cover")
const Rates = [];

mainButton.onclick = () => {
    window.location = "index.html"
}

rateButtonOne.onclick = () => {
    const rate = rateButtonOne.value;

    const UserRate = {rate};
    Rates.push(UserRate)
}

rateButtonTwo.onclick = () => {
    const rate = rateButtonTwo.value;

    const UserRate = {rate};
    Rates.push(UserRate)
}

rateButtonThree.onclick = () => {
    const rate = rateButtonThree.value;

    const UserRate = {rate};
    Rates.push(UserRate)
}

rateButtonFour.onclick = () => {
    const rate = rateButtonFour.value;

    const UserRate = {rate};
    Rates.push(UserRate)
}

rateButtonFive.onclick = () => {
    const rate = rateButtonFive.value;

    const UserRate = {rate};
    Rates.push(UserRate)
}


console.log(Rates)

