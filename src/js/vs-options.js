class VSOptions {

    constructor(sliderID, options) {

        this.options = {
            sliderID: sliderID,
            sliderClass: 'vs-slider',
            slideClass: 'vs-slide',
            autoplay: true,
            timer: 2000,
            idx: 0,
            infinty: true,
            controlEnable: true,
            dotsEnable: true,
            animation: {
                name: "vs-default",
                durition: 2
            }
        };

        if (options !== null && options !== undefined) this.setOptions(options);
    }

    setOptions(options) {
        //l(options)
        const optMap = new Map(Object.entries(options));

        optMap.forEach((v, k) => {

            if (k !== undefined && k !== null) {
                this.options[k] = v;
            }

        });
    }

    getOptions() { return this.options; }
}

export default VSOptions;