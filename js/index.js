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

// menuNav.addEventListener('click', (event) => {
//     const target = event.target;
//         if(target && target.classList.contains('header-menu__navbar')){
//             menuNav.classList.remove('active');
//             burger.classList.remove('active');
//         }
// });

// const s = window.screen;  //Переменная для выясняющая размер вашего экрана 
const width = q.width = 500;
const height = q.height = 500;
const letters = Array(256).join(1).split('');

const draw = function () {
  q.getContext('2d').fillStyle='rgba(1, 28, 38,.097)'; //Тут цвет фона
  q.getContext('2d').fillRect(0,0,width,height);
  q.getContext('2d').fillStyle='#41BF9B'; //Тут цвет букв
  letters.map(function(y_pos, index){
  text = String.fromCharCode(65+Math.random()*33);
  x_pos = index * 10;
  q.getContext('2d').fillText(text, x_pos, y_pos);
  letters[index] = (y_pos > 758 + Math.random() * 1e4) ? 0 : y_pos + 10;
  });
};
setInterval(draw, 33);

});