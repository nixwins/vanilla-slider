import VSOptions from './vs-options';

class VanillaSlider{
    

    constructor(sliderID, options = null){

        this.sliderID = sliderID;
        this.options = new VSOptions(options).getOptions();

        this.init();

    }

    init(){

        this.initSliderElements();
        this.initSliderStyles();  
    }

    
  
    initSliderElements(){
        
        this.sliderContainer =  document.getElementById(this.sliderID);
        this.slides = document.querySelectorAll(`#${this.sliderID}>div`);
    }

    initSliderStyles(){

          this.sliderContainer.classList.add("slider");
          for(const el of this.slides){
              el.classList.add(this.options.slideClass);
          }

    }

    start(){

        if(this.options.autoplay && this.options.infinty) this.startInfinity();
        else this.startClickable();
           
    }

    startInfinity(){

        setInterval(()=>{

            for(let i = 0; i < this.slides.length; i++){
                this.slides[i].classList.remove("current-slide");
          
            }
            
            this.options.idx++;

            if(this.options.idx == this.slides.length){ this.options.idx = 0; }

            this.slides[this.options.idx].classList.add("current-slide");

        }, this.options.timer);

    }


    l(o){console.log(o)}
}


export default(VanillaSlider);


