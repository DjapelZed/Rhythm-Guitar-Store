"use strict"
const reviewsSwiper = document.querySelector('.swiper-reviews');
if (reviewsSwiper){
    console.log("here")
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        autoHeight: true,
        direction: 'horizontal',
        loop: true,
        
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
      
}
