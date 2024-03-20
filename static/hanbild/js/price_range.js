let sliders = document.querySelectorAll(".my-slider");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 254000;
let sliderTrack = document.querySelector(".my-slider-track");
let sliderMaxValue = sliders[0].max;

sliders[0].addEventListener("input", slideOne);
sliders[1].addEventListener("input", slideTwo);

displayValOne.addEventListener("input", function () {
    if (this.value == ""){
        sliders[0].value = 0;
    }
    else if (this.value > parseInt(sliders[1].value) - minGap){
        sliders[0].value = parseInt(sliders[1].value) - minGap;
    } else {
        sliders[0].value = this.value;
    }
    fillColor();
});

displayValTwo.addEventListener("input", function () {
    if (this.value == ""){
        sliders[1].value = 2000000;
    }
    else if (this.value < parseInt(sliders[0].value) + minGap){
        sliders[1].value = parseInt(sliders[0].value) + minGap;
    } else {
        sliders[1].value = this.value;
    }
    fillColor();
});

function slideOne() {
    if (parseInt(sliders[1].value) - parseInt(sliders[0].value) <= minGap) {
        sliders[0].value = parseInt(sliders[1].value) - minGap;
    }
    displayValOne.value = sliders[0].value;
    fillColor();
}

function slideTwo() {
    if (parseInt(sliders[1].value) - parseInt(sliders[0].value) <= minGap) {
        sliders[1].value = parseInt(sliders[0].value) + minGap;
    }
    displayValTwo.value = sliders[1].value;
    fillColor();
}

function fillColor() {
    percent1 = (sliders[0].value / sliderMaxValue) * 100;
    percent2 = (sliders[1].value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #f0500a ${percent1}% , #f0500a ${percent2}%, #dadae5 ${percent2}%)`;
}

fillColor();