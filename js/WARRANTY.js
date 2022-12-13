const animContainer = document.querySelector('.anim-container');

const car = [...document.querySelectorAll('.car')];
const indicators = [...document.querySelectorAll('.indicators span')];

let car_index = 0;

setTimeout(() => {
    animContainer.remove();
    car[0].classList.add('active');
    setIntervalForSlider();
},500);

const setIntervalForSlider = () => {
    setInterval(() =>{

        indicators[car_index].classList.remove('active');
        car[car_index].classList.remove('active');

        if(car_index == car.length - 1){
            car_index = 0
        } else{
            car_index++;
        }

        indicators[car_index].classList.add('active');
        car[car_index].classList.add('active');

    }, 3000);
}

document.getElementById("btnn").onclick = function () {
    location.href = "WARR.html";
};
document.getElementById("btnnn").onclick = function () {
    location.href = "WARR.html";
};
document.getElementById("bttnn").onclick = function () {
    location.href = "WARR.html";
};