class VSOptions{

    constructor(options){

        this.options = {
            slideClass:'slide',
            autoplay:true,
            timer:2000,
            idx:0,
            infinty:true,
            animation:{
                name:"default",
                durition:2
            }
        };

        if(options !== null) this.setOptions(options);
    }

    setOptions(options){

            const optMap = new Map(Object.entries(options));

            optMap.forEach((v, k)=> {

                if(k !==  undefined && k !== null){
                   this.options.k = v;
                }

            });
    }

    getOptions(){ return this.options; }

}

export default(VSOptions);