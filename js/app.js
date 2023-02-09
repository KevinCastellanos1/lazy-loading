const loading = document.querySelector('.loading');
const background = document.querySelector('.background')
let load = 0;
const intervalTime = 30;
const endPorcentage = 99;


let int = setInterval(lazyLoad, intervalTime)

function lazyLoad () {
    load++;
    if(load>endPorcentage){
        clearInterval(int)
    }
    updateStyling();
    updateText();
}

function updateStyling() {
    loading.style.opacity = getScale(load, 0, 100, 1, 0);
    background.style.filter = `blur(${getScale(load, 0, 100, 30, 0)}px)`;
}

function updateText (){
    loading.innerHTML = `${load}%`;
}


function getScale (num, in_min, in_max, out_min, out_max) {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

