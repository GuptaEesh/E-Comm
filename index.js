// Slider Code
const mySliders = document.querySelectorAll('.slider');
mySliders.forEach(mySlider => mySlider.addEventListener('input', () => {
    let valPercent = (mySlider.value / mySlider.max) * 100;
    mySlider.style.background = `linear-gradient(to right,var(--secondary-300) ${valPercent}%,var(--primary-200) ${valPercent}%)`
}))

//Terms and condition dialogue box.
let termsInfo = document.querySelector('.terms-info');
termsInfo.addEventListener('click', () => {
    document.querySelector('.dialogue-container').style.display = "grid";
})
document.querySelector('.border-between-button').addEventListener('click', () => {
    document.querySelector('.signup-page .input').checked = false;
    document.querySelector('.signup-page .dialogue-container').style.display = "none";
})
document.querySelector('.accept').addEventListener('click', () => {
    document.querySelector('.signup-page .input').checked = true;
    document.querySelector('.signup-page .dialogue-container').style.display = "none";
})

