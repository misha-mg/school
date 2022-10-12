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



    // const s = window.screen;  //Переменная для выясняющая размер вашего экрана 



  // BIO HIDE

  const bioEl = document.querySelectorAll('.bio-element'),
        bioBtn = document.querySelectorAll('.bio-button'),
        bioBtns = document.querySelector('.bio__buttons');


      function hideBtnContent() {

        bioEl.forEach(item => {
            item.style.display = 'none';
        })

        bioBtn.forEach(item => {
            item.classList.remove('bio-button__active');
        })
      }
      

      function showBtnContent(i = 0) {

        bioEl[i].style.display = 'block';

        bioBtn[i].classList.add('bio-button__active');

      }

      bioBtns.addEventListener('click', (event) => {
        const target = event.target;
        if(target && target.classList.contains('bio-button')){
          bioBtn.forEach((item, i) => {
                if(target == item) {
                    hideBtnContent();
                    showBtnContent(i);
                }
            })
        }

      })
      hideBtnContent();
      showBtnContent(0);



    
    


});