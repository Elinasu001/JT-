<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<!DOCTYPE html>
<html lang="ko">
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
<head>
<%@ include file="./public/inc/common.jsp" %>
<link rel="stylesheet" type="text/css" href="../../../../jt/mobile/public/css/reset.css"/>
<link rel="stylesheet" type="text/css" href="../../../../jt/mobile/public/css/common.css"/>
<link rel="stylesheet" type="text/css" href="../../../../jt/mobile/public/css/common01.css"/>
<!--<link rel="stylesheet" type="text/css" href="../../../../jt/mobile/public/css/common02.css"/>-->
<link rel="stylesheet" type="text/css" href="../../../../jt/mobile/public/css/common03.css"/>
</head>
<body>
<!-- // header -->
<%@ include file="./public/inc/header.jsp" %>
<!-- header // -->

<script>
$(document).ready(function(){

	/* 아코디언 동작 */
	$(".accordian>li>h3").click(function(){
		if( $(this).parent("li").hasClass("on") ){
			$(this).next(".table01").slideUp(2500);
			$(this).parent("li").removeClass("on");
		}else{
			$(this).next(".table01").slideDown(2500);
			$(this).parent("li").addClass("on");
		};
	})

	$(".tabWrap>li").on("click",function(){
		$(".tabWrap>li").removeClass("on");
		$(this).addClass("on");
	});

});
</script>

 <!--<div id="skip" class="skip">
	<a href="#contents">본문 바로가기</a>
 </div>-->

<div class="contents">

	<div class="sub01">
		<div class="subTxt">
			<p>안전하고 든든한</p><br/>
			<h2>정기예금</h2>
		</div>
		<div class="subList">
			<ul>
				<li><p><b>가입대상</b><br/>제한없음</p></li>
				<li><p><b>금리</b><br/>연 2.25%</p></li>
				<li><p><b>가입기간</b><br/>1~36개월</p></li>
			</ul>
		</div>
	</div>

	<div class="sub02">
		<div>
			<p>안전하고 든든한<br/>저축은행 대표상품</p>
			<p>높은 수익까지 누릴 수 있는 대표예금상품으로<br/>이자는 복리식, 단리식 중 선택 가입 가능해요</p>
			<div class="btnWrap">
				<button>상담신청</button>
				<button onclick="document.location.href='tel:1688-8877'">1688-8877</button>
			</div>
		</div>
	</div>

	<div class="accordianWrap">
		 <ul class="accordian">
			<li class="on">
				<h3>상품안내</h3>
					<table class="table01" summary="상품명, 상품특징, 가입신청대상, 가입계약금액, 가입기간, 이자지급방식, 가입금리, 예금이자에 대한 세율, 절세혜택 가입, 예적금 담보대출에 대한 표" >
						<caption class="skip">상품안내 표</caption>
						<colgroup>
							<col width="15%">
							<col width="*"/>
						</colgroup>
						<tbody>
							<tr>
								<th>상품명</th>
								<td><b>정기예금(거치식예금)</b></td>
							</tr>
							<tr>
								<th>상품특징</th>
								<td><b>안전하고 든든한, 더불어 높은 수익까지 누릴 수 있는 대표예금상품으로 <br/>이자는 복리식, 단리식 중 원하는대로 선택 가입 가능</b></td>
							</tr>
							<tr>
								<th>가입신청대상</th>
								<td><b>제한없음(개인 및 법인)</b></td>
							</tr>
							<tr>
								<th>가입계약금액</th>
								<td>최소 10만원이상 ~제한없음</td>
							</tr>
							<tr>
								<th>가입기간</th>
								<td>1~36개월</td>
							</tr>
							<tr>
								<th>이자지급방식</th>
								<td><!--td 안에 p 태그 추가 시 "-" 생성-->
									<b>매월이자지급식(단리식) 또는 만기이자지급식 (복리식) 중 선택가능</b>
									<p>매월이자지급식 : 매월 확정금리로 예금에 대한 이자를 고객의 계좌로 이체</p>
									<p>만기이자지급식 : 이자를 찾아가지 않는 대신 이자에 다시 이자가 붙는 최고의 확정금리예금</p>
									<p>만기이자지급식은 매월이자지급식으로 변경가능합니다.(반대의 경우는 불가능)</p>
									<p>가입금액을 분할 및 일부해지하시어 중도인출도 가능합니다.</p>
								</td>
							</tr>
							<tr>
								<th>가입금리</th>
								<td>
									<b><p>매월이자지급식 연 2.25%(비대면:연2.25%)(세전)</p>
									<p>만기이자지급식 연 2.25%(비대면:연2.25%)(세전)</p></b>
									&#8251; 상기금리는 본점영업점 12개월 가입기준이며, 영업점별 금리가 상이할 수 있으므로 가입시 꼭 확인하시기 바랍니다.
								</td>
							</tr>
							<tr>
								<th>예금이자에 대한<br/>세율</th>
								<td>
									가입기간중 발생된 예금이자에 대하여 비과세 종합저축 가입 여부에 따라 아래의 세액이 원천징수처리<br/>
									<p>개인 (일반예금) : 이자소득의 15.4% [이자소득세(14%) + 지방소득세(1.4%)]</p>
									<p>개인 (비과세종합저축) : 이자 소득에 대한 세액 면제</p>
									<p>법인 : 이자소득의 15.4% [법인세(14%) + 지방소득세 (1.4%)]</p>
									&#8251; 세율은 가입일 현재의 세율이며, 관계 법률의 개정에 따라 변경될 수 있습니다.
								</td>
							</tr>
							<tr>
								<th>절세혜택 가입</th>
								<td>
									비과세 종합저축으로 가입 가능 (전 금융기관 통합한도 5천만원 범위)<br/>
									가입대상자 (만 65세 이상 고령자, 장애인, 독립유공자 그 유가족 및 가족, 국가유공상이자,<br/>
									기초생활수급자, 고엽제 후유증 환자, 5.18 민주화 운동 부상자)<br/>
									&#8251; 단, 직전 3개 과세기간 내 1회 이상 금융소득 종합과세 대상자*는 제외 (금융소득 연간 합계액 2천만원 초과)
								</td>
							</tr>
							<tr>
								<th>예적금 담보대출</th>
								<td>
									가입 예적금을 담보로 가입 금액의 90%~100%까지 강입금리의 +1.5%의 금리로 신속한 대출이 가능<br/>
									&#8251; 디지털뱅킹 (SB톡톡 플러스) 이용시 비대면 채널에서도 대출신청가능
								</td>
							</tr>
						</tbody>
					</table>
				</li>
				<li>
					<h3>준비서류</h3>
					<table class="table01" summary="">
						<caption class="skip">준비서류 표</caption>
						<colgroup>
							<col width="15%">
							<col width="*"/>
						</colgroup>
						<tbody>
							<tr>
								<th></th>
								<td></td>
							</tr>
							<tr>
								<th></th>
								<td></td>
							</tr>
						</tbody>
					</table>
				</li>
				<li>
					<h3>절차안내</h3>
					<table class="table01" summary="">
						<caption class="skip">절차안내 표</caption>
						<colgroup>
							<col width="15%">
							<col width="*"/>
						</colgroup>
						<tbody>
							<tr>
								<th></th>
								<td></td>
							</tr>
							<tr>
								<th></th>
								<td></td>
							</tr>
						</tbody>
					</table>
				</li>
				<li>
					<h3>유의사항</h3>
					<table class="table01" summary="">
						<caption class="skip">유의사항 표</caption>
						<colgroup>
							<col width="15%">
							<col width="*"/>
						</colgroup>
						<tbody>
							<tr>
								<th></th>
								<td></td>
							</tr>
							<tr>
								<th></th>
								<td></td>
							</tr>
						</tbody>
					</table>
				</li>
			</ul>
		</div><!--accordianWrap-->


	</div><!--contents-->

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
</body>
</html>