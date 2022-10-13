import "./slider";
import modals from "./modules/modals";
import tabs from './modules/tabs';
import forms from "./modules/forms";
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', () => {
    "use strict"

    let modalState = {};
    let deadline = '2022-10-15'
    changeModalState(modalState);;
    modals();
    tabs('.glazing_slider','.glazing_block', '.glazing_content', 'active',);
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img' , 'do_image_more', 'inline-block');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click' );
    forms(modalState);
    timer('#timer', deadline);
    images();
})