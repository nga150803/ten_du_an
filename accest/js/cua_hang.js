const menuEl = document.querySelector('.menu');

window.addEventListener('scroll',(e)=>{
if(window.scrollY>50) menuEl.classList.add('scroll')
else menuEl.classList.remove('scroll')
})


const btnClose = document.querySelector('.close-btn');
const btnShow = document.querySelector('.show-btn');
const navEl = document.querySelector('.nav');

btnShow.addEventListener('click', (e)=>{
    navEl.classList.add('active');
   btnShow.style.display = 'none';
})

btnClose.addEventListener('click',()=>{
    navEl.classList.remove('active')
    btnShow.style.display = 'block';

})