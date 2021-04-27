import VSOptions from './vs-options';

class VSControl {

    static setControl(options) {

        this.options = options;
        // l(this.options);

        if (this.options.controlEnable) {
            VSControl.createButtons();
        }

        const btnLeft = document.querySelector(`#${this.options.sliderID}>.vs-btn-left`);
        const btnRight = document.querySelector(`#${this.options.sliderID}>.vs-btn-right`);

        return { btnLeftEl: btnLeft, btnRightEl: btnRight, dots: "" };
    }

    static createButtons() {

        const btnLeft = VSControl.create("button");
        // btnLeft.innerHTML = "&#8249;";
        btnLeft.classList.add("vs-btn-left");

        const btnRight = VSControl.create("button");
        // btnRight.innerHTML = "&#8250;";
        btnRight.classList.add("vs-btn-right");

        const sliderContainer = document.querySelector(`#${this.options.sliderID}`);

        sliderContainer.appendChild(btnLeft);
        sliderContainer.appendChild(btnRight);
    }

    static createDots() {

    }

    static create(e) { return document.createElement(e); }
}

export default (VSControl);