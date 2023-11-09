const swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const swiper2 = new Swiper('.testomonial',{
  paginationClickable: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1224:{
      slidesPerView: 4,
      spaceBetween : 40
    }
  }
})
const swiper3 = new Swiper('.swiper-article', {
  pagination: '.swiper-pagination2',
  paginationClickable: true,
  breakpoints:{
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1224:{
      slidesPerView: 4,
      spaceBetween : 40
    }
  }
});

const Swiper4 = new Swiper('.swiper_product_slider',{
  paginationClickable : true,
  navigation: {
    640:{
      slidesPerView: 1,
      spaceBetween : 20
    },
    768:{
      slidesPerView: 2 ,
      spaceBetween: 20
    },
    1024:{
      slidesPerView: 3 ,
      spaceBetween: 20
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})