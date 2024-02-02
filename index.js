const slides = document.getElementsByClassName("contain");
const btns = document.getElementsByClassName("yes");
const formEl = document.querySelectorAll("form");
const inputEl = document.querySelectorAll("input");
var n = 0;
var userAnswers = [];
for (let index = 0; index < slides.length; index++) {
    slides[index].style.display = "none";
}

slides[0].style.display = "flex";

for (let index = 0; index < btns.length; index++) {
    btns[index].addEventListener("click", nextSlide);
}
for (let index = 0; index < formEl.length; index++) {

    formEl[index].addEventListener("submit", (event) => {
        event.preventDefault();
        if (inputEl[index].value != "") {
            userAnswers.push(inputEl[index].value);
            nextSlide();
        }
        else {
            alert("Pls fill in the input bar")
        }
    })

}

function nextSlide() {
    if (n === 13) {
        slides[n].style.display = "none";
        n = 0;
        console.log(userAnswers.toString());
        window.open(`mailto:okemeizu021@gmail.com?subject=subject&body=${userAnswers.toString()}.`);
    }
    slides[n].style.display = "none";
    n++;
    slides[n].style.display = "flex";
}

