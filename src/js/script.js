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

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.menu__list a[href^="#"]')
    const scrollToTopButton = document.getElementById('scrollToTop')
    const pageup = document.querySelector('.pageup');

    //Smooth scrolling
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    //Pageup scrolling
    scrollToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', function() {
        const documentHeight = document.body.scrollHeight;
        const scrollStart = 1600;
        const scrollEnd = documentHeight - 1300;
        const scrollPosition = window.scrollY;

        if (scrollPosition > scrollStart && scrollPosition < scrollEnd) {
            pageup.style.display = 'block';
        } else {
            pageup.style.display = 'none';
        }
    });
});