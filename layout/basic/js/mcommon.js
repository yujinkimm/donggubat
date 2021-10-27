jQuery(document).ready(function() {
	/* 상단영역 고정   */
	var msie6 = $.browser == 'msie' && $.browser.version < 7;
	if (!msie6) {
		var top = jQuery('#comment_top').offset().top - parseFloat(jQuery('#comment_top').css('margin-top').replace(/auto/, 0));
		jQuery(window).scroll(function(event) {
			// what the y position of the scroll is
			var y = jQuery(this).scrollTop();

			// whether that's below the form
			if (y >= 100) {
				// if so, ad the fixed class
				jQuery('#comment_top').addClass('fixed');
			} else {
				// otherwise remove it
				jQuery('#comment_top').removeClass('fixed');
			}
		});
	}

	/* 검색 팝업   */
	jQuery("#icon_search").bind('click', function(e) {
		e.preventDefault();
		jQuery('#quick_search').bPopup({
			follow: [true, true],
			position: ['auto', 'auto'],
			closeClass : '.quick_searchClose',
			modalClose: true,
			modalColor : '#000',
			opacity: 0.7,
			positionStyle: 'fixed',
			transition : 'fadeIn'
		});
	});

	/* 카테고리 SHOP버튼 토글.   */
	jQuery('.top_cate').mouseenter(function(){
		jQuery("#category").css('display', 'block');
		jQuery(".top_cate > a").addClass('on');
	}).mouseleave(function(){
		jQuery("#category").css('display', 'none');
		jQuery(".top_cate > a").removeClass('on');
	});

	/* 상단 멤버 토글.   */
	jQuery('.top_search_area .icon_menber').mouseenter(function(){
		jQuery("> ul", this).css('display', 'block');
	}).mouseleave(function(){
		jQuery("> ul", this).css('display', 'none');
	});

	/* 전체 게시판 적립금아이콘 수정   */
	jQuery('#mileage_icon a').html("적립금주기");
});
