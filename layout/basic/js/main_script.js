jQuery(document).ready(function() {
    /* 메인상품이 1개 이상일때 실행   */
	jQuery(".swiper1 .swiper-wrapper").each(function(){
		var swiperslidelength = jQuery('.swiper-slide',this).length;

		if ( swiperslidelength > 1 ) {
			var swiper1 = new Swiper('.swiper1', {
				slidesPerView: 2,
				autoHeight: true, //enable auto height
				spaceBetween: 30,
				loop: true,
				autoplay: {
					delay: 10000,
					disableOnInteraction: false,
				},
				pagination: {
					el: '.swiper-pagination1',
					type: 'progressbar',
			  },
			});
		}
	});

	jQuery("#mainBannerSwiper .swiper-wrapper").each(function(){
		var swiperslidelength = jQuery('.swiper-slide',this).length;

		if ( swiperslidelength > 1 ) {
			var swiper1 = new Swiper('#mainBannerSwiper', {
				slidesPerView: 1,
				autoHeight: true, //enable auto height
				spaceBetween: 0,
				loop: true,
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
				pagination: {
					el: '#mainBannerSwiper .swiper-pagination',
					clickable: true,
				},
			});
		}
	});


});
