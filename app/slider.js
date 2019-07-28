let  obj= {
    findFriend   : document.querySelector('.findFriend'),
    slider         : document.querySelector('.slider'),
    listItems   : document.querySelectorAll('.sliderItem'),
    buttonLeft : document.querySelector('.leftButton'),
    buttonRight:document.querySelector('.rightButton'),

};
let  slider = {
    widthItem   :  parseFloat(getComputedStyle(obj.listItems[0]).width),
    widthSlider : parseFloat(getComputedStyle(obj.slider).width),
    getMax    : obj.listItems.length - 1,
    getMin     : 0,
    positionLefyItem: 0,
    transform  : 0

};

function leftButton() {
    if((slider.positionLefyItem + slider.widthSlider / slider.widthItem - 1) >= slider.getMax) { return;}
        slider.positionLefyItem++;
        slider.transform -= slider.widthItem / slider.widthSlider * 100;
        obj.slider.style.transform = 'translateX(' + slider.transform + '%)';

}
function rightButton() {
    if(slider.positionLefyItem <= slider.getMin) { return;}
        slider.positionLefyItem--;
        slider.transform += slider.widthItem / slider.widthSlider * 100;
        obj.slider.style.transform = 'translateX(' + slider.transform + '%)';
}

obj.buttonLeft.addEventListener('click', leftButton);
obj.buttonRight.addEventListener('click', rightButton);

//================= Generating random colors ============================================
function getRandomInt(min,max){

    return Math.floor(Math.random()*(max-min+1))+min;
}
function SetColor(){

    let r = getRandomInt(200,255);
    let g = getRandomInt(200,255);
    let b = getRandomInt(200,255);

    return "rgb(" + r + "," + g + "," + b + ")";

}
function colorItem(){

    for(let i = 1; i < obj.listItems.length; i++){
        obj.listItems[i].style.backgroundColor = SetColor();
    }

    // obj.listItems.forEach((el)=>{
    //      el.style.backgroundColor = SetColor();
    // });
}
colorItem();