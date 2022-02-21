// Slider Code
const mySliders = document.querySelectorAll('.slider');
mySliders.forEach(mySlider => mySlider.addEventListener('input', () => {
    let valPercent = (mySlider.value / mySlider.max) * 100;
    mySlider.style.background = `linear-gradient(to right,var(--secondary-300) ${valPercent}%,var(--primary-200) ${valPercent}%)`
}))

//Terms and condition dialogue box.
let termsInfo = document.querySelector('.terms-info');
let checkbox=document.querySelector('#checkTerms');
termsInfo.addEventListener('click', () => {
    document.querySelector('#popup-box').style.display = "grid";
})
document.querySelector('#cancel').addEventListener('click', () => {
    
    checkbox.checked = false;
    document.querySelector('#popup-box').style.display = "none";
})
document.querySelector('#accept').addEventListener('click', () => {
    checkbox.checked = true;
    document.querySelector('#popup-box').style.display = "none";
})

