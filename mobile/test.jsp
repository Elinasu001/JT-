<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<%@ include file="./public/inc/common.jsp" %>
</head>
<body>
<!-- // header -->
<%@ include file="./public/inc/header.jsp" %>

<div class="Aside">
	<div class="Info">
		<a href="#" class="Aside_bt_home">Home</a>
		<a href="javascript:close();" class="Aside_bt_close">닫기</a>

		<ul>
			<li><span></span></li>
			<li><span>김고객</span>님<br />반갑습니다.</li>
		</ul>
	</div>
	<ul>
		<li class="Active" rel="Active01"><a href="#">대출</a></li>
		<li rel="Active02"><a href="#">예금</a></li>
		<li rel="Active03"><a href="#">금융</a></li>
		<li rel="Active04"><a href="#">회사소개</a></li>
		<li rel="Active05"><a href="#">금융소비자보호</a></li>
		<li rel="Active06"><a href="#">고객센터</a></li>
	</ul>

	<ul>
		<li class="Active" id="Active01">
			<dl>
				<dt>예금상품</dt>
				<dd>
					<a href="#">목돈굴리기</a>
					<a href="#">목돈모으기</a>
					<a href="#">입출금자유</a>
					<a href="#">생계형저축</a>
					<a href="#">판매종료된상품</a>
				</dd>
			</dl>
			<dl>
				<dt>예금서비스 <span></span></dt>
				<dd>
					<a href="#">인터넷뱅킹</a>
					<a href="#">비대면뱅킹</a>
					<a href="#">인터넷뱅킹이용안내</a>
					<a href="#">보호금융상품등록부</a>
					<a href="#">예금금리</a>
					<a href="#">절세혜택안내</a>
				</dd>
			</dl>
		</li>
		<li id="Active02">
			<dl>
				<dt>대출상품 <span></span></dt>
				<dd>
					<a href="#">신용대출</a>
					<a href="#">보증부대출</a>
					<a href="#">주식매입자금대출</a>
					<a href="#">담보대출</a>
					<a href="#">판매종료된상품</a>
				</dd>
			</dl>
			<dl>
				<dt>대출서비스 <span></span></dt>
				<dd>
					<a href="#">대출신청</a>
					<a href="#">대출상담사</a>
					<a href="#">대출금리</a>
					<a href="#">한도조회</a>
				</dd>
			</dl>
		</li>
		<li id="Active03">
			<dl>
				<dt>금융서비스 <span></span></dt>
				<dd>
					<a href="#">금융계산기</a>
					<a href="#">CMS서비스</a>
					<a href="#">발급서비스</a>
					<a href="#">공동인증서 가져오기</a>
					<a href="#">적합성 확인서</a>
					<a href="#">적합성 결과서</a>
				</dd>
			</dl>
		</li>
		<li id="Active04">
			<dl>
				<dt>저축은행소개 <span></span></dt>
				<dd>
					<a href="#">입찰정보</a>
					<a href="#">광고홍보</a>
					<a href="#">경영이념</a>
					<a href="#">경영공시</a>
					<a href="#">채용정보</a>
					<a href="#">본점영업점안내</a>
				</dd>
			</dl>
			<dl>
				<dt>그룹사소개 <span></span></dt>
				<dd>
					<a href="#">J Trust 소개</a>
					<a href="#">기업이념</a>
					<a href="#">그룹사체계도</a>
					<a href="#">J Trust 연혁</a>
				</dd>
			</dl>
		</li>
		<li id="Active05">
			<dl>
				<dt>금융소비자보호 <span></span></dt>
				<dd>
					<a href="#">금융소비자보호안내</a>
					<a href="#">금융소비자보호공시</a>
					<a href="#">금융정보광장</a>
					<a href="#">금융취약계층지원안내</a>
					<a href="#">청약철회권안내</a>
					<a href="#">위법계약해지권안내</a>
					<a href="#">금리인하요구권</a>
					<a href="#">고객의 소리</a>
				</dd>
			</dl>
		</li>
		<li id="Active06">
			<dl>
				<dt>고객센터 <span></span></dt>
				<dd>
					<a href="#">공지사항</a>
					<a href="#">이벤트</a>
					<a href="#">상담서비스</a>
					<a href="#">자주묻는 질문</a>
					<a href="#">이용약관/자료실</a>
					<a href="#">출력서비스</a>
					<a href="#">간편서류제출 신청</a>
				</dd>
			</dl>
		</li>
	</ul>

</div>
<!-- header // -->

<section>
	<article class="main_banner01">
		
		<ul>
			<li>
				<div class="ac-slider01">
					<div class="banner-style01">
						<p>더 낮은 금리로<br />여유로운 금융생활<br />
						<span>당신의 더 나은 미래를 꿈꾸는 JT저축은행</span></p>
						<img src="./public/img/mainimg01.png" alt="" />
					</div>
					<div class="banner-style01">
						<p>금융을 따뜻하게<br />고객을 행복하게<br />
						<span>당신의 더 나은 미래를 꿈꾸는 JT저축은행</span></p>
						<img src="./public/img/mainimg02.png" alt="" />
					</div>
				</div>
			</li>				
		</ul>

		<div class="main_banner01_nav">
			<a href="#">한도조회</a>
			<a href="#">대출신청</a>
			<a href="#">인증센터</a>
			<a href="#">약정동의</a>
			<p><a href="#">JT저축은행 APP 다운 받기<span class="bullet_right"></span></a></p>
		</div>

	</article>

	<article class="main_banner02">
		<ul>
			<li>
				<p>당신을 위한<br /><span>JT 추천상품</span></p>
				<div>
					<span class="active">대출상품</span>
					<span>예금상품</span>
				</div>
			</li>
			<li>
				<div class="ac-slider02">
					<div class="style_banner02 main_banner0201">
						<p><img src="./public/img/icon_main_banner020102.png" alt="" /></p>
						<p>파라솔 직장인<br />신용대출</p>
						<p>최대 <span>1억원</span></p>
					</div>

					<div class="style_banner02 main_banner0202">
						<p><img src="./public/img/icon_main_banner020101.png" alt="" /></p>
						<p>점프론 신용대출</p>
						<p>최대 <span>2천만원</span></p>
					</div>

					<div class="style_banner02 main_banner0203">
						<p><img src="./public/img/icon_main_banner020103.png" alt="" /></p>
						<p>햇살론(근로자)</p>
						<p>최대 <span>3천 5백만원</span></p>
					</div>
					<div class="style_banner02 main_banner0201">
						<p><img src="./public/img/icon_main_banner020102.png" alt="" /></p>
						<p>파라솔 직장인<br />신용대출</p>
						<p>최대 <span>4억원</span></p>
					</div>

					<div class="style_banner02 main_banner0202">
						<p><img src="./public/img/icon_main_banner020101.png" alt="" /></p>
						<p>점프론 신용대출</p>
						<p>최대 <span>5천만원</span></p>
					</div>

					<div class="style_banner02 main_banner0203">
						<p><img src="./public/img/icon_main_banner020103.png" alt="" /></p>
						<p>햇살론(근로자)</p>
						<p>최대 <span>6천 5백만원</span></p>
					</div>
					<div class="style_banner02 main_banner0201">
						<p><img src="./public/img/icon_main_banner020102.png" alt="" /></p>
						<p>파라솔 직장인<br />신용대출</p>
						<p>최대 <span>7억원</span></p>
					</div>

					<div class="style_banner02 main_banner0202">
						<p><img src="./public/img/icon_main_banner020101.png" alt="" /></p>
						<p>점프론 신용대출</p>
						<p>최대 <span>8천만원</span></p>
					</div>

					<div class="style_banner02 main_banner0203">
						<p><img src="./public/img/icon_main_banner020103.png" alt="" /></p>
						<p>햇살론(근로자)</p>
						<p>최대 <span>9천 5백만원</span></p>
					</div>
				</div>
			</li>
		</ul>
	</article>

	<article class="notice_area">
		<ul>
			<li>
				<dl>
					<dt><span>새소식</span><span><img src="./public/img/arrow24_b.png" alt="더보기" /></span></dt>
					<dd>
						<p><a href="#">JT저축은행 맴버십 서비스 종료 안내</a><span>10.28</span></p>
					</dd>
					<dd>
						<p><a href="#">코로나19 확진자 현황 안내</a><span>10.28</span></p>
					</dd>
					<dd>
						<p><a href="#">코로나19 확진자 현황 안내코로나19 확진자 현황 안내코로나19 확진자 현황 안내코로나19 확진자 현황 안내코로나19 확진자 현황 안내코로나19 확진자 현황 안내</a><span>10.28</span></p>
					</dd>
					<dd>
						<p><a href="#">JT저축은행 맴버십 서비스 종료 안내</a><span>10.28</span></p>
					</dd>
					<dd>
						<p><a href="#">JT저축은행 맴버십 서비스 종료 안내</a><span>10.28</span></p>
					</dd>
				</dl>
			</li>
			<li class="bt_banner">
				<div>
					<a href="#">금융계산기 <span class="bullet_right">오른쪽 화살표</span></a>
					<a href="#">다이렉트콜 <span class="bullet_right">오른쪽 화살표</span></a>
					<a href="#">영업점안내 <span class="bullet_right">오른쪽 화살표</span></a>
				</div>
			</li>
		</ul>
	</article>

	<article class="main_banner03">
		<div class="ac-slider03">
			<div class="banner-style03 banner-style0301">
				<a href="#">
					<p>미래를 위한 특별한 약속</p>
					<p>아동학대 방지 캠페인</p>
				</a>
			</div>
			<div class="banner-style03 banner-style0302">
				<a href="#">
					<p>함께 나아가는 우리</p>
					<p>We Are Together</p>
				</a>
			</div>
			<div class="banner-style03 banner-style0301">
				<a href="#">
					<p>미래를 위한 특별한 약속</p>
					<p>JT저축은행 캠패인03</p>
				</a>
			</div>
			<div class="banner-style03 banner-style0302">
				<a href="#">
					<p>미래를 위한 특별한 약속</p>
					<p>JT저축은행 캠패인04</p>
				</a>
			</div>
		</div>
	</article>

</section>


<!-- // footer -->
<footer>
	<ul>
		<li>
			<p>전화상담 <span>1688-8877</span></p>
			<p>온라인상담 24시간 (답변시간 : 평일 9시 ~ 18시)</p>
		</li>	
		<li><a href="#"><img src="./public/img/logo.png" alt="JT 저축은행" /></a></li>
		<li>
			경기도 성남시 분당구 황새울로 324(서현동 270 - 2)<i></i>대표전화 : 1688-8877<br />
			사업자등록번호 : 129 - 86 - 05071<i></i>대표이사 : 최성욱
		</li>
		<li>COPYRIGHT&copy;2019 BY Savings Bank co, Ltd, ALL RIGHTS RESERVED.</li>
		<li>
			<a href="#"><img src="./public/img/icon_blog.png" alt="Blog" /></a>
			<a href="#"><img src="./public/img/icon_kakao.png" alt="Kakao" /></a>
		</li>
	</ul>
</footer>
<!-- footer // -->

<script>
/* $(document).ready(function(){ */
$(window).load(function(){

	var slider = $('.ac-slider01').bxSlider({
		auto: true, 
		speed: 500,
		pause: 5000,
		slideMargin: 15,
		infiniteLoop: true,
		autoHover : true,
		pager : false,
		touchEnabled : (navigator.maxTouchPoints > 0),
		onSlideAfter : function() {
			slider.stopAuto();
			slider.startAuto();
			// alert('01 배너 슬라이딩 완료');
		},
	});

	var slider = $('.ac-slider02').bxSlider({
		auto: true, 
		speed: 500,
		pause: 5000,
		minSlides : 1.4,
		maxSlides : 1.4,
		slideWidth : 380,
		slideMargin : 20,
		moveSlides : 1,
		infiniteLoop: true,
		autoHover : true,
		pager : false,
		touchEnabled : (navigator.maxTouchPoints > 0),
		onSlideAfter: function() {
			slider.startAuto();
			slider.stopAuto();
		}
	});

	var slider = $('.ac-slider03').bxSlider({
		auto: true, 
		speed: 500,
		pause: 5000,
		mode : 'fade',
		slideMargin: 15,
		infiniteLoop: true,
		autoHover : true,
		touchEnabled : (navigator.maxTouchPoints > 0),
		onSlideAfter: function() {
			slider.startAuto();
		}
	});

});
</script>

</body>
</html>
