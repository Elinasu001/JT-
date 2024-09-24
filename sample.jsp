<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
	<title>JT 저축은행</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<link rel="stylesheet" type="text/css" href="./public/css/reset.css" />
	<link rel="stylesheet" type="text/css" href="./public/css/common.css" />
	<link rel="stylesheet" type="text/css" href="./public/css/common01.css" />
	<link rel="stylesheet" type="text/css" href="./public/css/common02.css" />
	<link rel="stylesheet" type="text/css" href="./public/css/common03.css" />
	
	<script src="./public/js/jquery.min.js"></script>
	<script src="./public/js/common.js"></script>

	<style>
		.sampleWrap { width:100%; margin:0 auto; }
		.sampleWrap input { box-sizing:border-box; }

		.sampleWrap section { padding:50px 20px 0; }
		.sampleWrap section:after { content:""; clear:both; display:block; }
		.sampleWrap section>h2 { text-align:left; font-size:20px; padding:20px 0; }
		.sampleWrap section>h3 { text-align:left; height:56px; line-height:56px; display:inline-block; }
		.sampleWrap input:focus-visible { outline:none; }
		.sampleWrap input:disabled { background-color:#f8f8f8; }
	</style>
    
	<script>
	$(document).ready(function(){

		//tab menu 제어
		$(".tabOn>li").on("click",function(){
			$(this).parents("ul").find("li").removeClass("on")
			$(this).addClass("on")
		});

		//상단 tab 제어
		$(".tabWrap>li>h4").on("click",function(){
			$(this).parents("ul").find("li").removeClass("on");
			$(this).parent("li").addClass("on");
		});
		
	});
	</script>

</head>

<body>
<div class="sampleWrap">

<section>
	<button type="button" class="btnG" id="">본인확인송금</button>
	<button type="button" class="btnG02" id="">본인확인송금</button>
	<button type="button" class="btnG03" id="">본인확인송금</button>
	<button type="button" class="btnG04" id="">본인확인송금</button>

	<p class="bulR">필수항목입니다.</p>


<!------------------------------ //style 01 ------------------------------------------>


	<h2>input</h2>
	<form method="post">
		<div class="inpWrap">
			<p><label for="">input 100%</label></p>
			<p class="inpBox04"><!-- 클래스 inpBox 추가-->
				<input type="text" id="" name="" placeholder="입력해주세요.">
			</p>
			<input type="submit" value="전송">
		</div>
	</form>

	<div class="inpWrap">
		<p><label for="">input 100% - botton</label></p>
		<p class="inpBtn04"><!-- 클래스 inpBox 추가-->
			<input type="text" id="" name="" placeholder="입력해주세요.">
			<button type="button" class="btnG04" id="">전송</button>
		</p>
	</div>

	<div class="inpWrap">
		<p><label for="">input 100% - 인증번호</label></p>
		<p class="inpTime04"><!--클래스 inpTime 추가-->
			<input type="tel" id="" name="" placeholder="입력해주세요." maxlength="6">
			<span class="time">0:00</span>
			<button type="button" class="btnG04" id="">재요청</button>
		</p>
	</div>

	<div class="inpWrap">
		<p><label for="">input 100% - 원,개월</label></p>
		<p class="inpTxt04">
			<input type="text" id="" name="" placeholder="입력해주세요.">
			<span>원</span><!--클래스 inpBox 안의 span은 오른쪽 정렬-->
		</p>
	</div>

	<div class="inpWrap">
		<p><label for="">input 50% *2</label></p>
		<p class="inp5004"><!--클래스 inpBox에 클래스 inp50 추가-->
			<input type="text" id="" name="" placeholder="입력해주세요.">
			<input type="text" id="" name="" placeholder="입력해주세요.">
		</p>
	</div>
    <div class="inpWrap">
        <p><label for="">input 50% *2 - 캘린더</label></p>
        <p class="inp5004"><!-- 클래스 inp50 추가 후 input type="date"로 변경-->
            <input type="date" id="" name="" placeholder="입력해주세요.">
            <input type="date" id="" name="" placeholder="입력해주세요.">
        </p>
    </div>

	<div class="inpWrap">
		<p><label for="">input 50% *2 - 주민번호,전화번호</label></p>
		<p class="inp50Num04"><!--클래스 inpBox에 클래스 inp50Num 추가-->
			<input type="text" id="" name="" placeholder="입력해주세요.">
			<b>&#45;</b>
			<input type="text" id="" name="" placeholder="입력해주세요.">
		</p>
	</div>
    
    <div class="inpWrap">
        <p><label for="">input 100% *n</label></p>
		<!--클래스 inpWrap에 클래스 inpDoz 추가-->
		<div class="inpDoz04">
			<p class="inpBtn04">
				<input type="text" name="" placeholder="" disabled=""/>
				<button type="button" class="btnG04" id="">전송</button>
			</p>
			<p class="inpBox04">
				<input type="text" id="" name="" placeholder="" disabled=""/>
			</p>
			<p class="inpBox04">
				<input type="text" id="" name="" placeholder="상세주소를 입력해주세요." />
			</p>
		</div>
    </div>

	<h2>tab</h2>
	<h3>tab *4 + input 100% *n </h3>
	<ul class="tabMenu03 tabOn"><!--클래스 tabOn으로 tab 제어 -->
		<li class="on">최근입금</li>
		<li class="">자주쓰는</li>
		<li class="">내계좌</li>
		<li class="">입금지정</li>
	</ul>

	<h3>tab *4 - 통신사</h3>
    <ul class="tabMenu03 tabOn"><!--클래스 tabOn으로 tab 제어 -->
        <li value="1" class="on">SKT</li>
        <li value="2">KT</li>
        <li value="3">LGU+</li>
        <li class="liSel">
            <select>
                <option value="">알뜰폰</option>
                <option value="5">알뜰폰 SKT</option>
                <option value="6">알뜰폰 KT</option>
                <option value="7">알뜰폰 LGU+</option>
            </select>
        </li>
    </ul>
		

    <h3>tab *4 + input 100% *n </h3>
	<div class="tabInpWrap">
		<ul class="tabMenu03 tabOn"><!--클래스 tabOn으로 tab 제어 -->
			<li class="on">최근입금</li>
			<li class="">자주쓰는</li>
			<li class="">내계좌</li>
			<li class="">입금지정</li>
		</ul>
		<div class="inpWrap">
			<p class="inpLabBox labSel"><!--label,input 같이 있을 때 클래스 inpLabBox 추가-->
				<label for="">
					<select id="">
						<option val="">은행선택</option>
						<option val="">국민은행</option>
					</select>
				</label>
				<input id="" type="text" name="" placeholder="입력해주세요.">
			</p>
			<p class="inpBox04">
				<input id="" type="text" name="" placeholder="계좌번호를 입력해주세요.">
			</p>
		</div>
	</div>
    
    <h3>tab *4 + input 100% - 통신사</h3>
	<div class="tabInpWrap">
		<ul class="tabMenu03 tabOn"><!--클래스 tabOn으로 tab 제어 -->
			<li value="1" class="on">SKT</li>
			<li value="2">KT</li>
			<li value="3">LGU+</li>
			<li class="liSel">
				<select>
					<option value="">알뜰폰</option>
					<option value="5">알뜰폰 SKT</option>
					<option value="6">알뜰폰 KT</option>
					<option value="7">알뜰폰 LGU+</option>
				</select>
			</li>
		</ul>
		<div class="inpWrap">
			<p class="inpLabBox inpLabOnly">
				<label for="">휴대폰번호</label>
				<input type="tel" id="" name=""maxlength="11" placeholder="-제외, 숫자만 입력" title="휴대폰번호" value="">
			</p>
		</div>
	</div>

	<h3>tab*4 + input 100% - 금액</h3>
	<div class="tabInpWrap">
		<ul class="tabMenu03">
			<li>
				<input type="radio" id="" name=""/>
				<label for="" class="">+100만</label>
			</li>
			<li>
				<input type="radio" id="" name=""/>
				<label for="" class="">+10만</label>
			</li>
			<li>
				<input type="radio" id="" name=""/>
				<label for="" class="">+5만</label>
			</li>
			<li>
				<input type="radio" id="" name=""/>
				<label for="" class="">+1만</label>
			</li>
		</ul>
		<div class="inpWrap">
			<p class="inpTxt04 inpOnly">
				<input type="tel" id="" value="" name="" placeholder="이체금액을 입력해주세요." title="이체금액입력" maxlength="11" data-validate="required">
				<span>원</span>
			</p>
		</div>
	</div>

	<h3>tab*5 + input 100% - 금액</h3>
	<div class="tabInpWrap">
		<ul class="tabMenu04">
			<li>
				<input type="radio" id="" name=""/>
				<label for="" class="">+100만</label>
			</li>
			<li>
				<input type="radio" id="" name=""/>
				<label for="" class="">+10만</label>
			</li>
			<li>
				<input type="radio" id="" name=""/>
				<label for="" class="">+5만</label>
			</li>
			<li>
				<input type="radio" id="" name=""/>
				<label for="" class="">+1만</label>
			</li>
			<li>
				<input type="radio" id="" name=""/>
				<label for="" class="">전액</label>
			</li>
		</ul>
		<div class="inpWrap">
			<p class="inpTxt04 inpOnly">
				<input type="tel" id="" value="" name="" placeholder="이체금액을 입력해주세요." title="이체금액입력" maxlength="11"/>
				<span>원</span>
			</p>
		</div>
	</div>


<!------------------------------ style 01 // ------------------------------------------>





<!------------------------------ // style 02 ------------------------------------------>


	<h2>input</h2>
	<form method="post">
		<div class="inpWrap">
			<p><label for="">input 100%</label></p>
			<p class="inpBox">
				<input type="text" id="" name="" placeholder="입력해주세요."/>
			</p>
			<input type="submit" class="btnG" value="전송"/>
		</div>
	</form>

	<div class="inpWrap">
		<p><label for="">input 100% - button</label></p>
		<p class="inpBtn">
			<input type="text" id="" name="" placeholder="입력해주세요."/>
			<button type="button" class="btnG02" id="">전송</button>
		</p>
	</div>

	<div class="inpWrap">
		<p><label for="">input 100% - 인증번호</label></p>
		<p class="inpTime">
			<input type="tel" id="" name="" placeholder="입력해주세요." maxlength="6"/>
			<span class="time">0:00</span>
			<button type="button" class="btnG02" id="">재요청</button>
		</p>
	</div>

	<div class="inpWrap">
		<p><label for="">input 100% - 원,개월</label></p>
		<p class="inpTxt">
			<input type="text" id="" name="" placeholder="입력해주세요."/>
			<span>원</span>
		</p>
	</div>

	<div class="inpWrap">
		<p><label for="">input 50% *2</label></p>
		<p class="inp50"><!--클래스 inpBox에 클래스 inp50 추가-->
			<input type="text" id="" name="" placeholder="입력해주세요."/>
			<input type="text" id="" name="" placeholder="입력해주세요."/>
		</p>
	</div>
    <div class="inpWrap">
        <p><label for="">input 50% *2 - 캘린더</label></p>
        <p class="inp50"><!-- 클래스 inp50 추가 후 input type="date"로 변경-->
            <input type="date" id="" name="" placeholder="입력해주세요."/>
            <input type="date" id="" name="" placeholder="입력해주세요."/>
        </p>
    </div>

	<div class="inpWrap">
		<p><label for="">input 50% *2 - 주민번호,전화번호</label></p>
		<p class="inp50Num"><!--클래스 inpBox에 클래스 inp50Num 추가-->
			<input type="text" id="" name="" placeholder="입력해주세요."/>
			<b>&#45;</b>
			<input type="text" id="" name="" placeholder="입력해주세요."/>
		</p>
	</div>
    
    <div class="inpWrap">
        <p><label for="">input 100% *n</label></p>
		<!--클래스 inpWrap에 클래스 inpDoz 추가-->
		<div class="inpDoz">
			<p class="inpBtn">
				<input type="text" name="" placeholder="" disabled=""/>
				<button type="button" class="btnG02" id="">전송</button>
			</p>
			<p class="inpBox">
				<input type="text" id="" name="" placeholder="" disabled=""/>
			</p>
			<p class="inpBox">
				<input type="text" id="" name="" placeholder="상세주소를 입력해주세요." />
			</p>
		</div>
    </div>

	<h2>tab</h2>
	<h3>tab *4 + input 100% *n </h3>
	<ul class="tabMenu tabOn"><!--클래스 tabOn으로 tab 제어 -->
		<li class="on">최근입금</li>
		<li class="">자주쓰는</li>
		<li class="">내계좌</li>
		<li class="">입금지정</li>
	</ul>

	<h3>tab *4 - 통신사</h3>
    <ul class="tabMenu tabOn"><!--클래스 tabOn으로 tab 제어 -->
        <li value="1" class="on">SKT</li>
        <li value="2">KT</li>
        <li value="3">LGU+</li>
        <li class="liSel">
            <select>
                <option value="">알뜰폰</option>
                <option value="5">알뜰폰 SKT</option>
                <option value="6">알뜰폰 KT</option>
                <option value="7">알뜰폰 LGU+</option>
            </select>
        </li>
    </ul>
		

    <h3>tab *4 + input 100% *n </h3>
	<div class="tabInpWrap">
		<ul class="tabMenu tabOn"><!--클래스 tabOn으로 tab 제어 -->
			<li class="on">최근입금</li>
			<li class="">자주쓰는</li>
			<li class="">내계좌</li>
			<li class="">입금지정</li>
		</ul>
		<div class="inpWrap">
			<p class="inpLabBox labSel"><!--label,input 같이 있을 때 클래스 inpLabBox 추가-->
				<label for="">
					<select id="">
						<option val="">은행선택</option>
						<option val="">국민은행</option>
					</select>
				</label>
				<input id="" type="text" name="" placeholder="입력해주세요.">
			</p>
			<p class="inpBox">
				<input id="" type="text" name="" placeholder="계좌번호를 입력해주세요.">
			</p>
		</div>
	</div>
    
    <h3>tab *4 + input 100% - 통신사</h3>
	<div class="tabInpWrap">
		<ul class="tabMenu tabOn"><!--클래스 tabOn으로 tab 제어 -->
			<li value="1" class="on">SKT</li>
			<li value="2">KT</li>
			<li value="3">LGU+</li>
			<li class="liSel">
				<select>
					<option value="">알뜰폰</option>
					<option value="5">알뜰폰 SKT</option>
					<option value="6">알뜰폰 KT</option>
					<option value="7">알뜰폰 LGU+</option>
				</select>
			</li>
		</ul>
		<div class="inpWrap">
			<p class="inpLabBox inpLabOnly">
				<label for="">휴대폰번호</label>
				<input type="tel" id="" name=""maxlength="11" placeholder="-제외, 숫자만 입력" title="휴대폰번호" value="">
			</p>
		</div>
	</div>

	<h3>tab*4 + input 100% - 금액</h3>
	<div class="tabInpWrap">
		<ul class="tabMenu">
			<li>
				<input type="radio" id="" name=""/>
				<label for="" class="">+100만</label>
			</li>
			<li>
				<input type="radio" id="" name=""/>
				<label for="" class="">+10만</label>
			</li>
			<li>
				<input type="radio" id="" name=""/>
				<label for="" class="">+5만</label>
			</li>
			<li>
				<input type="radio" id="" name=""/>
				<label for="" class="">+1만</label>
			</li>
		</ul>
		<div class="inpWrap">
			<p class="inpTxt inpOnly">
				<input type="tel" id="" value="" name="" placeholder="이체금액을 입력해주세요." title="이체금액입력" maxlength="11" data-validate="required">
				<span>원</span>
			</p>
		</div>
	</div>

	<h3>tab*5 + input 100% - 금액</h3>
	<div class="tabInpWrap">
		<ul class="tabMenu02">
			<li>
				<input type="radio" id="" name=""/>
				<label for="" class="">+100만</label>
			</li>
			<li>
				<input type="radio" id="" name=""/>
				<label for="" class="">+10만</label>
			</li>
			<li>
				<input type="radio" id="" name=""/>
				<label for="" class="">+5만</label>
			</li>
			<li>
				<input type="radio" id="" name=""/>
				<label for="" class="">+1만</label>
			</li>
			<li>
				<input type="radio" id="" name=""/>
				<label for="" class="">전액</label>
			</li>
		</ul>
		<div class="inpWrap">
			<p class="inpTxt inpOnly">
				<input type="tel" id="" value="" name="" placeholder="이체금액을 입력해주세요." title="이체금액입력" maxlength="11"/>
				<span>원</span>
			</p>
		</div>
	</div>


<!------------------------------ style 02 //------------------------------------------>





<!------------------------------ // style 03 ------------------------------------------>


	<h2>input</h2>
	<div class="inpWrap">
		<p><label for="">input 100%, txt</label></p>
		<p class="inpTxt02">
			<input type="text" id="" name="" placeholder="입력해주세요."/>
			<span>원</span>
		</p>
		<p class="bulR">필수항목입니다.</p>
	</div>

	<div class="inpWrap">
		<p><label for="">input 100%, disabled</label></p>
		<p class="inpBox02">
			<input type="text" id="" name="" placeholder="입력해주세요." disabled="disabled"/>
		</p>
	</div>

	<div class="inpWrap">
		<p><label for="">input 100, *2</label></p>
		<p class="inpBox02">
			<input type="text" id="" name="" placeholder="입력해주세요."/>
			<input type="text" id="" name="" placeholder="입력해주세요."/>
		</p>
	</div>

	<div class="inpWrap">
		<p><label for="">input 50, *2</label></p>
		<p class="inp5002">
			<input type="text" id="" name="" placeholder="입력해주세요."/>
			<input type="text" id="" name="" placeholder="입력해주세요."/>
		</p>
	</div>

<!------------------------------ style 03 // ------------------------------------------

		<ul class="tabWrap li4"><!--li2, li3, li4 로 갯수 조절-->
			<li><h4>CEO인사말</h4></li> 
			<li class="on"><h4>사업영역</h4></li>
			<li><h4>은행연혁</h4></li>
			<li><h4>조직도</h4></li>
		</ul>

		<ul class="tabWrap li3"><!--li2, li3, li4 로 갯수 조절-->
			<li class="on"><h4>사업영역</h4></li> 
			<li><h4>CEO인사말</h4></li>
			<li><h4>조직도</h4></li>
		</ul>

		<ul class="tabWrap li2"><!--li2, li3, li4 로 갯수 조절-->
			<li class="on"><h4>민원공시</h4></li> 
			<li><h4>실태평가</h4></li>
		</ul>
</section>

</div><!-- sampleWrap -->

<section>
	<dl class="agree-list">
	<dt><input type="checkbox" id="all-check" name="all-check" /><label for="all-check">전체동의</label></dt>
	<dd class="required_check"> <!-- class required_check : 필수약관 / choice_check : 선택약관 -->
		<div>
			<fieldset>
				<div>01[필수]</div>
				
				<ol>
					<li><input type="checkbox" id="ckb0101" name="ckb01" /><label for="ckb0101">123123123123</label></li>
					<li><input type="checkbox" id="ckb0102" name="ckb01" /><label for="ckb0102">123123123123</label></li>
					<li><input type="checkbox" id="ckb0103" name="ckb01" /><label for="ckb0103">123123123123</label></li>
				</ol>

				<ul>
					<li><input type="radio" name="rab01" id="rab01-n" checked="checked"><label for="rab01-n">아니요</label></li>
					<li><input type="radio" name="rab01" id="rab01-y"><label for="rab01-y">예</label></li>
				</ul>
			</fieldset>	
		</div>
	</dd>
	<dd class="choice_check">
		<div>
			<fieldset>
				<div>02[선택]</div>
				
				<ol>
					<li><input type="checkbox" id="ckb0201" name="ckb02" /><label for="ckb0201">123123123123</label></li>
					<li><input type="checkbox" id="ckb0202" name="ckb02" /><label for="ckb0202">123123123123</label></li>
					<li><input type="checkbox" id="ckb0203" name="ckb02" /><label for="ckb0203">123123123123</label></li>
				</ol>

				<ul>
					<li><input type="radio" name="rab02" id="rab02-n" checked="checked"><label for="rab02-n">아니요</label></li>
					<li><input type="radio" name="rab02" id="rab02-y"><label for="rab02-y">예</label></li>
				</ul>
			</fieldset>	
		</div>
	</dd>
	<dd class="required_check">
		<div>
			<fieldset>
				<div>03[필수]</div>
				
				<ol>
					<li><input type="checkbox" id="ckb0601" name="ckb06" /><label for="ckb0601">123123123123</label></li>
					<li><input type="checkbox" id="ckb0602" name="ckb06" /><label for="ckb0602">123123123123</label></li>
					<li><input type="checkbox" id="ckb0603" name="ckb06" /><label for="ckb0603">123123123123</label></li>
				</ol>

				<ul>
					<li><input type="radio" name="rab06" id="rab06-n" checked="checked"><label for="rab06-n">아니요</label></li>
					<li><input type="radio" name="rab06" id="rab06-y"><label for="rab06-y">예</label></li>
				</ul>
			</fieldset>	
		</div>
	</dd>
	<dd class="required_check">
		<div>
			<fieldset>
				<div>04[필수]</div>
				
				<ol>
					<li><input type="checkbox" id="ckb0301" name="ckb03" /><label for="ckb0301">123123123123</label></li>
					<li><input type="checkbox" id="ckb0302" name="ckb03" /><label for="ckb0302">123123123123</label></li>
					<li><input type="checkbox" id="ckb0303" name="ckb03" /><label for="ckb0303">123123123123</label></li>
				</ol>

				<ul>
					<li><input type="radio" name="rab03" id="rab03-n" checked="checked"><label for="rab03-n">아니요</label></li>
					<li><input type="radio" name="rab03" id="rab03-y"><label for="rab03-y">예</label></li>
				</ul>
			</fieldset>	
		</div>
	</dd>
	<dd class="choice_check">
		<div>
			<fieldset>
				<div>05[선택]</div>
				
				<ol>
					<li><input type="checkbox" id="ckb0401" name="ckb04" /><label for="ckb0401">123123123123</label></li>
					<li><input type="checkbox" id="ckb0402" name="ckb04" /><label for="ckb0402">123123123123</label></li>
					<li><input type="checkbox" id="ckb0403" name="ckb04" /><label for="ckb0403">123123123123</label></li>
				</ol>

				<ul>
					<li><input type="radio" name="rab04" id="rab04-n" checked="checked"><label for="rab04-n">아니요</label></li>
					<li><input type="radio" name="rab04" id="rab04-y"><label for="rab04-y">예</label></li>
				</ul>
			</fieldset>	
		</div>
	</dd>
	<dd class="choice_check">
		<div>
			<fieldset>
				<div>06[선택]</div>
				
				<ol>
					<li><input type="checkbox" id="ckb0501" name="ckb05" /><label for="ckb0501">123123123123</label></li>
					<li><input type="checkbox" id="ckb0502" name="ckb05" /><label for="ckb0502">123123123123</label></li>
					<li class="choseck-p"><input type="checkbox" id="ckb0503" name="ckb05" /><label for="ckb0503">상품서비스 안내 수단</label></li>
				</ol>
				
				<p class="choseck-s">
					<span><input type="checkbox" name="ckbdm1" id="ckdm-sms" /><label for="ckdm-sms">문자</label></span>
					<span><input type="checkbox" name="ckbdm1" id="ckdm-mail" /><label for="ckdm-mail">이메일</label></span>
					<span><input type="checkbox" name="ckbdm1" id="ckdm-tel" /><label for="ckdm-tel">전화</label></span>
					<span><input type="checkbox" name="ckbdm1" id="ckdm-dm" /><label for="ckdm-dm">DM</label></span>
				</p>

				<ul>
					<li><input type="radio" name="rab05" id="rab05-n" checked="checked"><label for="rab05-n">아니요</label></li>
					<li><input type="radio" name="rab05" id="rab05-y"><label for="rab05-y">예</label></li>
				</ul>
			</fieldset>	
		</div>
	</dd>
	</dl>

<style>
.agree-list { display:block; margin:0px 20px 20px; text-align:left; }
.agree-list>dt { background:#F8F8F9; border-radius:10px 10px 0px 0px;  border:1px solid 
#ccc; padding:20px; }
.agree-list>dd { border-bottom:1px #ccc solid; border-right:1px #ccc solid; border-left:1px #ccc solid; padding:10px; }
.agree-list>dd fieldset { border:0px; }
.agree-list>dd fieldset div { border-bottom:1px #ccc solid; padding:10px; }
.agree-list>dd fieldset ol li { border-bottom:1px #ccc dashed; padding:10px; }
.agree-list>dd fieldset ul { padding:10px 0px 0px; }
.agree-list>dd fieldset ul:after { clear:both; display:block; content:''; }
.agree-list>dd fieldset ul li { text-align:right; padding:10px; float:right; }
.agree-list>dd:last-child { border-radius:0px 0px 10px 10px;  border:1px solid 
#ccc; border-top:0px; padding:20px; }
.choseck-p { border-bottom:0px!important; }
.choseck-s { background:#f8f8f9; margin:0px 10px 10px; padding:10px; border-radius:8px; }
</style>

</section>
</body>
</html>

