import VSOptions from './vs-options';
import VSControl from './vs-control';

class VanillaSlider{

    constructor(sliderID, options = null){

        this.sliderID = sliderID;
        this.options = new VSOptions(this.sliderID, options).getOptions();
        this.init();
    }

    init(){

        this.initSliderElements();
        this.initSliderStyles();  
    }

    initSliderElements(){

        this.controlElements = VSControl.setControl(this.options);
        l(this.controlElements);

        this.sliderContainer =  document.getElementById(this.sliderID);
        this.slides = document.querySelectorAll(`#${this.sliderID}>div`);
    }

    initSliderStyles(){

          this.sliderContainer.classList.add(this.options.sliderClass);

          for(const el of this.slides){

                 el.classList.add(this.options.slideClass);
                 el.classList.add(this.options.animation.name);
          }

    }

    start(){

        this.slides[this.options.idx].classList.add("vs-current-slide");

        this.controlShow();

        if(this.options.autoplay && this.options.infinty) this.startInfinity();
           
    }

    controlShow(){
        
        this.controlElements.btnLeftEl.onclick = (event)=>{

            this.clearCurrentClass();

            this.options.idx--;

            if(this.options.idx <= -1){ this.options.idx = this.slides.length - 1; }

            this.slides[this.options.idx].classList.add("vs-current-slide");
        };

        this.controlElements.btnRightEl.onclick = (event)=>{

            this.clearCurrentClass();

            this.options.idx++;

            if(this.options.idx  >= this.slides.length){ this.options.idx = 0; }

           
            l(this.options.idx)
            this.slides[this.options.idx].classList.add("vs-current-slide");

        

           
           
        };
    }

    startInfinity(){

        setInterval(()=>{

            this.clearCurrentClass();

            this.options.idx++;

            if(this.options.idx == this.slides.length){ this.options.idx = 0; }

            this.slides[this.options.idx].classList.add("vs-current-slide");

        }, this.options.timer);

    }

    clearCurrentClass(){

        for(let i = 0; i < this.slides.length; i++){
            this.slides[i].classList.remove("vs-current-slide");
      
        }
    }
}


export default(VanillaSlider);


