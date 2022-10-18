window.addEventListener('DOMContentLoaded', () => {

    const burger = document.querySelector('#header__burger'),
          body = document.querySelector('body'),
          menuNav = document.querySelector('#header-menu__navbar');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menuNav.classList.toggle('active');
        body.classList.toggle('lock');
    });

    menuNav.addEventListener('click', () => {
        burger.classList.toggle('active');
        menuNav.classList.toggle('active');
        body.classList.toggle('lock');
    });
    
});