// Slider Code
const mySliders=document.querySelectorAll('.slider');
            mySliders.forEach(mySlider=>mySlider.addEventListener('input',()=>{
                let valPercent=(mySlider.value/mySlider.max)*100;
                mySlider.style.background=`linear-gradient(to right,var(--secondary-300) ${valPercent}%,var(--primary-200) ${valPercent}%)`
            }))

