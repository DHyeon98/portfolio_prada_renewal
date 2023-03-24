$(function() {
   const swiper = new Swiper('.all', {
      autoHeight: true,
      speed: 500,
      direction: 'vertical',
      mousewheel: true,
      on: {
         reachEnd: function () {
            swiper.mousewheel.disable();
         }
      }
      });
      window.addEventListener('wheel', function (event) {
      if (event.deltaY < 100) {
         swiper.mousewheel.enable();
      }
      });

   const swiper2 = new Swiper('.new_container', {
      autoplay: true,
      loop: true,
      slidesPerView: '3',
      spaceBetween: 30,
      slideToClickedSlide : true,
      centeredSlides: true,
      })

   const swiper3 = new Swiper('.sphere_container', {
      slidesPerView: '1.3',
      centeredSlides: true,
      navigation: {
         prevEl: '.swiper-button-prev',
         nextEl: '.swiper-button-next',
      },
   })

   $('.gnb_btn').click(function() {
      $('.gnb').toggleClass('toggle');
   })
})