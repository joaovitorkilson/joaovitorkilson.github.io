
import RotateCardTecnology from "./sections/Tecnologies.js";
import SlideNav from "./sections/slide/slide.js";
import scrollSuave from "./sections/global/ScrollSuave.js";


RotateCardTecnology()
scrollSuave()
const slide = new SlideNav('.slide', '.slide-wrapper');

slide.init();


slide.addControl();

