  $(document).ready(function(){
    $('.js-slider').slick({
      dots: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });

  // // // // Делаем карусель в секции photos
  // $('.js-click-slider').each(function (index, sliderWrap) {
  //   let slider = $(sliderWrap).find('.js-slider');
  //   let btnPrev = $(sliderWrap).find('.js-btn-prev');
  //   let btnNext = $(sliderWrap).find('.js-btn-next');

  //   $(slider).slick({
  //     autoplay: true,
  //     dots: true,
  //     prevArrow: btnPrev,
  //     nextArrow: btnNext,
  //   });

  // // //   // console.log(index);
  // // //   // console.log(sliderWrap);
  // });

  $('.burger').on('click', function () {
    $('.main-nav').slideToggle();
  });

  });


