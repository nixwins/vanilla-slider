class VSOptions{constructor(s,t){this.options={sliderID:s,sliderClass:"vs-slider",slideClass:"vs-slide",autoplay:!0,timer:2e3,idx:0,infinty:!0,isCtrlEnable:!0,animation:{name:"vs-default",durition:2}},null!=t&&this.setOptions(t)}setOptions(s){new Map(Object.entries(s)).forEach(((s,t)=>{null!=t&&(this.options[t]=s)}))}getOptions(){return this.options}}export default VSOptions;