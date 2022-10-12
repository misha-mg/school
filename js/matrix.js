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