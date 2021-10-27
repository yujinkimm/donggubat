/* 인스타그램   */
var feed = new Instafeed({
	get: 'user',
	resolution: 'low_resolution',
	userId: '4808872131', // 고객 유저넘버
	limit: '12', // 총 출력 이미지갯수
	accessToken: '4808872131.e6e095f.06a27c8ed44b45e882b6a4e91f4e6731', // 고객 토큰넘버
	template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>'
});
feed.run();

jQuery(document).ready(function() {	
	setTimeout(function(){
		var instafeed_now = jQuery('#instagramWidgetManual iframe').html();
		var instafeed_now2 = jQuery('.main_insta_box #instafeed').html();

		/* 인스타그램이 없다면 실행 */
		if ( instafeed_now != false && instafeed_now2 == '' )  {
			jQuery('.main_insta_box').html('<img src="/images/insta_bg.jpg" style="width:100%;">');
		}
	}, 500);
});

