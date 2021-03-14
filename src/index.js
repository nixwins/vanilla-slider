import VanillaSlider from './js/vanilla-slider';
import './scss/main.scss';
import VSOptions from './js/vs-options';

window.l = o=>{
    console.log(o)
};
;

const slider1 = new VanillaSlider("slider", {autoplay:true, timer:1000});


slider1.start();

const slider2 = new VanillaSlider("slider2");
slider2.start();


// const slider2 = new VanillaSlider("slider2", {slideClass:"some2"});


