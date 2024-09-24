/**
 * LOAN0600.js 스탁론 대출안내
 */
$(document).ready(function(){
	var testForm = makeForm("test");
	// 아코디언 제어
	$(".accordian02 > li > a:first-child").click(function(){
		var tg = $(this).siblings("div");
		var dis = tg.css("display");
		if (dis=="none") {
			$(this).addClass("Active");
			$(".Active").attr('aria-expanded','true');
			tg.slideDown(300);
		} else {
			$(this).removeClass("Active");
			$(this).removeClass("Active").attr('aria-expanded','false');
			tg.slideUp(300);
		}
		return false;
	});
	
	//간편한도조회
	$('#loneBtn01').click(function(){
		doActionURL('/loan/LOAN1800');
	});
	//대출신청
	$('#loneBtn02').click(function(){
		var url='http://stock.jt-bank.co.kr/index.jsp';
		window.open(url,'_blank');
	});
	//상담신청
	$('#loneBtn03').click(function(){
		doActionURL('/loan/LOAN1900');
	});
	//전화
	$('#loneBtn04').click(function(){
		callLink();
	});
	//온라인상담신청
	$('#loneBtn05').click(function(){
		doActionURL('/loan/LOAN1900');
	});
	//자주묻는질문
	$('#loneBtn06').click(function(){
		doActionURL('/service/SERV0800');
	});
});