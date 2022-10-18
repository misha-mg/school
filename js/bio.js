window.addEventListener('DOMContentLoaded', () => {

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


      // SLIDER

      
      if ($(window).width() < 769) {   
        $('.bio-prog__skils').addClass('owl-carousel');
      } else {
          $('.bio-prog__skils').removeClass('owl-carousel');
      };
    
        $(".owl-carousel").owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 600
        });

    
});