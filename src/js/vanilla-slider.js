class VanillaSlider{
    

    constructor(sliderID, options){

        if(options != null) this.options = options;
        this.l(this.options)
        this.sliderID = sliderID;
        this.init();

    }

    init(){
        
        this.initOptions();
        this.initSliderElements();
        this.initSliderStyles();  
    }

    initOptions(){

        if(this.options != null){

            for(const [key, opt] of Object.entries(this.options)){

                if(key == undefined || key == ''){

                    this.options.slideClass = "slide";

                }
            }

        }else{
           
            this.options = {
                slideClass:'slide'
            }
        }
        
        
        
    }
  
    initSliderElements(){
        
        this.sliderContainer =  document.getElementById(this.sliderID);
        this.slides = document.querySelectorAll("#slider > div");
    }

    initSliderStyles(){
          
        this.l(this.slides)
          this.sliderContainer.classList.add("slider");
          for(const el of this.slides){
              el.classList.add(this.options.slideClass)
          }

    }

    l(o){console.log(o)}
}


export default(VanillaSlider);


