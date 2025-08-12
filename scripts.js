const navLinks = document.querySelectorAll('.nav-links li');
const slider = document.querySelector('.slider');
navLinks.forEach((link,index) =>  {
    link.addEventListener('mouseover',() => {
        const linkRect = link.getBoundingClientRect();
        const parentRect = 
        link.parentElement.getBoundingClientRect ();
        slider.style.width =`${linkRect.width}px`;
        slider.style.transform = `translateX(${link.offsetLeft}px)`;
    });
});

