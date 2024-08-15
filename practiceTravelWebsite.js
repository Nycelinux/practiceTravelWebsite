const navMenu= document.getElementById('navMenu');
const navClose= document.getElementById('navClose');
const navToggle= document.getElementById('navToggle');


if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('showMenu')
    })
}

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('showMenu')
    })
}

const navLink=document.querySelector('.navLink');

const linkAction=()=>{
    const navMenu=document.getElementById('navMenu');
    navMenu.classList.remove('showMenu');
}
navLink.forEach(n=>n.addEventListener('click', linkAction))