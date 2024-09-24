$(document).ready(function(){
	// Nav SubMenu Action
	/*$('nav').hover(function(){ 
		$('header').attr('id', 'header_on');
		$('nav>div>div').stop().slideDown(200);
	},function(){
		$('header').removeAttr('id','header_on');
		$('nav>div>div').stop().slideUp(200);
	});
	});
*/
	$('nav').mouseover(function(){ 
		$('header').attr('id', 'header_on');
		$('nav>div>div').stop().slideDown(200);
	}).focusin(function(){
		$(this).mouseover();
	});

	$('nav').mouseout(function(){ 
		$('header').removeAttr('id','header_on');
		$('nav>div>div').stop().slideUp(200);
	}).focusout(function(){
		$(this).mouseout();
	});


	// Nav SubMenu Action	
	$('.call-3').click(function(){ 
		$(this).toggleClass('call-over');
		
	});


	$('.main-inbox-layout dt a').click(function() {
		var SelectTab = $(this).attr('title');
		
		$(this).parent('div').find('a').removeClass('Active');
		$(this).addClass('Active');

		$(this).parents('.main-inbox-layout').find('dd>div').css('z-index','-10');
		$('.' + SelectTab).css('z-index','1');
	});

	$(".Path > div > a").each(function(i, e){
		if( i > 0 ){
			$(this).replaceWith("<p>" + $(this).text() +  "</p>");
		}
	});


});

/*window.onload = function(){
	$('nav').mouseover(function(){ // Nav SubMenu Action
		$('header').attr('id', 'header_on');
		$('nav>div>div').stop().slideDown(200);
	});
	$('nav').mouseout(function(){
		$('header').removeAttr('id','header_on');
		$('nav>div>div').stop().slideUp(200);
	});

}*/
function callgnb() {
	$(".SC-modal").addClass("on");
	$("html, body").addClass("hidden");
};

function close() {
	$(".SC-modal").removeClass("on");
	$("html, body").removeClass("hidden");
};


	/* 모달 */
	function modalOn(modalID) { // 모달 On 모달 창 호출 후 해당 모달 컨텐츠 로드
		$("." + modalID).addClass('on');
		$("html").css("overflow","hidden");
	};

	function modalOff() { // 모달 Off
		$('.Acuon-Modal').removeClass('on');
		$("html").css("overflow","auto").css("height","100%");
	};

   


