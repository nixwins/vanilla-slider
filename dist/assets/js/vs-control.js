import VSOptions from"./vs-options";class VSControl{static setControl(t){return this.options=t,this.options.isCtrlEnable&&VSControl.createButtons(),{btnLeftEl:document.querySelector(`#${this.options.sliderID}>.vs-btn-left`),btnRightEl:document.querySelector(`#${this.options.sliderID}>.vs-btn-right`),dots:""}}static createButtons(){const t=VSControl.create("button");t.classList.add("vs-btn-left");const o=VSControl.create("button");o.classList.add("vs-btn-right");const e=document.querySelector(`#${this.options.sliderID}`);e.appendChild(t),e.appendChild(o)}static createDots(){}static create(t){return document.createElement(t)}}export default VSControl;