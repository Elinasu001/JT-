$(document).ready(function(){
	/* ег */
	$('.Aside>ul:nth-of-type(1)>li').click(function() {
		var ActiveMenu = $(this).attr("rel");
		$('.Aside>ul>li').removeClass("Active");
		$(this).addClass("Active");
		$('.Aside>ul:nth-of-type(2)>li').hide();
		$('#'+ActiveMenu).show();		
	});

	$('.Aside>ul:nth-of-type(2)>li>dl>dt').click(function() {
		$(this).next('dd').toggle()
		$(this).parents('dl').toggleClass('Active')
	});

	$('.main-inbox-layout dt  a').click(function() {
		var SelectTab = $(this).attr('title');
		
		$(this).parent('div').find('a').removeClass('Active');
		$(this).addClass('Active');

		$(this).parents('.main-inbox-layout').find('dd>div').css('z-index','-10');
		$('.' + SelectTab).css('z-index','1');
	});

});




function callgnb() {
	$(".Aside").addClass("Aside_Open");
	$('body').css('overflow','hidden').bind('touchmove');
};

function close() {
	$(".Aside").removeClass("Aside_Open");
	$('body').css('overflow','auto').unbind('touchmove');;
};

