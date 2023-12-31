const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

hamburger.addEventListener('click', () => {
    hamburger.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

closeElem.addEventListener('click', () => {
    hamburger.classList.remove('active');
});

const percents = document.querySelectorAll('.skills__rate-percent'),
      lines = document.querySelectorAll('.skills__rate-line .skills__rate-line_percent');
      
percents.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});





