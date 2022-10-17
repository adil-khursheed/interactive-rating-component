const btn = document.querySelectorAll(".btn");
const submitBtn = document.getElementById("submit-btn");
const rated = document.getElementById("rated");
const thankYouPage = document.getElementById("thank-you-page");
const mainContainer = document.querySelector(".main-container");


submitBtn.addEventListener("click", () => {
    thankYouPage.classList.remove("hidden");
    mainContainer.style.display = "none";
})

btn.forEach((rate) => {
    rate.addEventListener("click", () => {
        rated.innerHTML = rate.innerHTML;
    })
})