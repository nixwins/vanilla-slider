import VanillaSlider from './js/vanilla-slider';
import './scss/main.scss';
import VSOptions from './js/vs-options';

window.l = o=>{
    console.log(o)
};


const slider1 = new VanillaSlider("slider", {autoplay:false, timer:500});


slider1.start();
// slider1.l("12");

// const slider2 = new VanillaSlider("slider2");
// slider2.start();


// const slider2 = new VanillaSlider("slider2", {slideClass:"some2"});


