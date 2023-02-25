import './scss/main.scss'; // main styles
import './scss/swiper.css';
import {Navigation, Pagination} from "swiper"; // swiper styles
import Swiper from 'swiper'
require('./js/cities') // city script
require('./js/business') // business scripts
require('./js/animations') // animation



// Slider scripts
var swiper = new Swiper(".mySwiper", {
  modules: [Navigation, Pagination],
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



