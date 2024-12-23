//****************************************************************************************************
//Filename     :   common.js
//Description  :   업무공통 JavaScript
//****************************************************************************************************
var SYSTEM_MODE	= $('#application_common').attr("data-system_mode"); // 환경구분
var SERVICE_CD   	= $('#application_common').attr("data-serviceCd");   // 서비스코드
var CUST_NM      	= $('#application_common').attr("data-custNm");  	  // 고객명
var SERVER_TIME  	= $('#application_common').attr("data-serverTime");  // 서버시각 고객명
var IS_MOBILE  		= $('#application_common').attr("data-isMobile");  // 서버시각 
var IS_IPHONE  		= $('#application_common').attr("data-isIphone");  // 아이폰여부 
var GUBUN_CD  		= $('#application_common').attr("data-gubunCd");  // 업무명 



var AUTH_ERROR_CNT       = 0;	// 인증오류건수
var AUTH_ERROR_CHECK_CNT = 0; 	// 인증오류 허용 건  수
var AUTH_ERROR_MAX_CNT   = 4; 	// 인증오류 최대 허용 건  수

// 공통로깅
var LOG = function() {
	var _debug = function(logMessage) {
		if (SYSTEM_MODE != "R") { // 운영환경이 아닌 경우만 Debug 로그 출력
			console.log("[DEBUG]:"+ logMessage);	
		}
	};
	var _info = function(logMessage) {
		console.log("[INFO]:"+ logMessage);
	};
	var _error = function(logMessage) {
		console.log("[ERROR]:"+ logMessage);
	};
	return {
		debug : _debug
	   ,info : _info
	   ,error: _error
	};
}();

LOG.debug("[application_common.js] :: ====================================================");
LOG.debug("[application_common.js] :: SYSTEM_MODE [" + SYSTEM_MODE + "]");
LOG.debug("[application_common.js] :: navigator.userAgent [" + navigator.userAgent + "]");
LOG.debug("[application_common.js] :: ====================================================");

// Document Ready
$(document).ready(function(){
	$(".call-admin").attr("id", "loanRink");
	
	
	//0617Footer
	/**웹접근성관련 스크립트 수정
	var dropdown = document.querySelectorAll('.dropdown');
	var dropdownArray = Array.prototype.slice.call(dropdown,0);
	dropdownArray.forEach(function(el){
		var button = el.querySelector('a[data-toggle="dropdown"]'),
				menu = el.querySelector('.dropdown-menu');

		button.onclick = function(event) {
			if(!menu.hasClass('show')) {
				menu.classList.add('show');
				menu.classList.remove('hide');
				event.preventDefault();
			}
			else {
				menu.classList.remove('show');
				menu.classList.add('hide');
				event.preventDefault();
			}
		};**/
	
	/**s:웹접근성관련 스크립트 추가**/
	var dropdowns = document.querySelectorAll('.dropdown');
	dropdowns.forEach(function (el) {
		var button = el.querySelector('a[data-toggle="dropdown"]');
		var menu = el.querySelector('.dropdown-menu');

		button.onclick = function (event) {
			event.preventDefault();
			var isVisible = menu.classList.contains('show');

			// 모든 드롭다운 메뉴를 닫기
			dropdowns.forEach(function (dropdown) {
				var dropdownMenu = dropdown.querySelector('.dropdown-menu');
				var dropdownButton = dropdown.querySelector('a[data-toggle="dropdown"]');
				dropdownMenu.classList.remove('show');
				dropdownMenu.classList.add('hide');
				dropdownButton.setAttribute('title', dropdownButton.getAttribute('title').replace('열림', '닫힘'));
			});

			// 클릭된 드롭다운 메뉴의 상태 토글
			if (!isVisible) {
				menu.classList.add('show');
				menu.classList.remove('hide');
				button.setAttribute('title', button.getAttribute('title').replace('닫힘', '열림'));
			}
		};
	/**e:웹접근성관련 스크립트 추가**/

	})

	Element.prototype.hasClass = function(className) {
	 return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
	};
	
	/**
	 * 보안솔루션 셋팅
	 * WEB : nxFire , nxKey , AnySign
	 * Mobile Web : 
	 */
	if(IS_MOBILE=='Y'){
		if(SERVICE_CD == 'main'){
			//메인스크롤시 상단 메뉴바 action
			$(window).scroll(function(){
				if($(this).scrollTop() > 5){
					$("header").removeClass("mainHeader");
					$(".sublogo").show();
					$(".mainlogo").hide();
				}else{
					$("header").addClass("mainHeader");
					$(".sublogo").hide();
					$(".mainlogo").show();
				}
			});	
			
			// 메인 팝업모달 쿠키확인
			if($(".event-popup.on").length){
				if(document.cookie.indexOf("mobilepop=done")>=0){
					modalOff();
				}
			}
		}
		

		//m백신
		if(('R'==SYSTEM_MODE||'D'==SYSTEM_MODE) && IS_IPHONE!='Y' && (SERVICE_CD == 'LOAN1800' || SERVICE_CD == 'LOAN2000' || SERVICE_CD == 'FIN0401' || SERVICE_CD == 'FIN0500' || SERVICE_CD == 'FIN0801' || SERVICE_CD == 'FIN0900')){
			startmVaccine();
		}
		
		//모바일 상품서비스 약관 체크 자동화
		$(".smsAllChk").click(function(){
			if( $(this).prop("checked") == true ){
				$(".smsChk input[type='checkbox']").prop("checked", true);
			}else{
				$(".smsChk input[type='checkbox']").prop("checked", false);
			}
		});
		$(".smsChk input[type='checkbox']").click(function(){
			var smsChkLen = $(this).closest(".smsChk").find("input[type='checkbox']").length;
			var smsChkedLen = $(this).closest(".smsChk").find("input[type='checkbox']:checked").length;
			if(smsChkedLen == 0){
				$(".smsAllChk").prop("checked", false);
			}else{
				$(".smsAllChk").prop("checked", true);
			}
		});
	}
	//웹
	else
	{
		//데이트픽커 사용
		if(('R'==SYSTEM_MODE||'D'==SYSTEM_MODE||'L'==SYSTEM_MODE)){
			$(".inpDate input[type='text']").datepicker({ 
				constrainInput: false
				,dateFormat: "yy-mm-dd"
				,changeYear: true //콤보박스에서 년 선택 가능
	            ,changeMonth: true //콤보박스에서 월 선택 가능    
	            ,yearRange: 'c-30:c+30' // 년도 선택 셀렉트박스를 현재 년도에서 이전, 이후로 얼마의 범위르 표시할것인가.
	            ,minDate: "-30Y" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
	            ,maxDate: "+0Y" //최대 선택일자(-1D:하루후, -1M:한달후, -1Y:일년후)
	            ,monthNamesShort: ['1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , '10' , '11' , '12' ] // 달력의 월부분 텍스트	
				,monthNames: ['1월' , '2월' , '3월' , '4월' , '5월' , '6월' , '7월' , '8월' , '9월' , '10월' , '11월' , '12월' ] // 달력의 월부분 tooltip텍스트	
	            ,dayNamesMin: ['일' , '월' , '화' , '수' , '목' , '금' , '토']	 // 달력의 월부분 텍스트
				,dayNames: ['일요일' , '월요일' , '화요일' , '수요일' , '목요일' , '금요일' , '토요일'] // 달력의 요일부분 tooltip텍스트	
			});
		}
		
		//1.라온시큐어 모듈은 지가 알아서돌고있음
		//설치페이지 제외
		if(GUBUN_CD=='loan'){
			//2.공동인증서모듈 설치여부 체크
//			PrintObjectTag();
		}
		
		// 메인 팝업모달 쿠키확인
		if(SERVICE_CD == 'main' && $(".event-popup.on").length){
			$(".event-popup.on").each(function(index, item){
				if(document.cookie.indexOf($(item).attr("id")+"=done")>=0){
					modalOff($(item).attr("id"));
				}
			});
		}
	}
	
	$(".inpDate input[type='text']").keyup(function(key){
		var formVal=$(this).val();
		if(key.keyCode==13||formVal.length==10){
			//220802 주석처리 $(this).blur();
			$(".inpDate input[type='text']").datepicker('hide');
		}
	});
	
	/**
	 * 성명 한글입력
	 */
	$('input[name=table_name],input[name=table-name],input[name=ipt01]').keyup(function(event){
		var key = event.key;
		var data = $(this).val();
		regexp = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
		if(regexp.test(data) ) {
		  alert("한글만입력하세요");
		  $(this).val(data.replace(regexp,''));
		  return false;
		}
		return true;
	});
	/**
	 * type tel 문자 입력방지
	 */
	$('input[type=tel]').keyup(function(event){
		var key = event.key;
		var data = $(this).val();
		if(key == 'Unidentified'  || typeof(key) == 'Unidentified' || typeof(key) == 'undefined' || key>=0 || key<=9 ||key=='Backspace'||key=='Enter'||key=='Tab'||key=='Shift'||key=='Process'||key=='.'||key=='Decimal' || key=='ArrowRight'||key=='ArrowLeft'||key=='ArrowUp'||key=='ArrowDown'){
			return true;
		}
		alert('숫자만 입력할수 있습니다. ('+key+')');
		var regex=/[^0-9]/g;
		$(this).val(data.replace(regex,''));
		return false;
	});
	
	$('input[type=password]').keyup(function(event){
		var key = event.key;
		var data = $(this).val();
		if(key == 'Unidentified'  || typeof(key) == 'Unidentified' || typeof(key) == 'undefined' || key>=0 || key<=9 ||key=='Backspace'||key=='Enter'||key=='Tab'||key=='Shift'||key=='Process'||key=='.'||key=='Decimal' || key=='ArrowRight'||key=='ArrowLeft'||key=='ArrowUp'||key=='ArrowDown'){
			return true;
		}
		alert('숫자만 입력할수 있습니다. ('+key+')');
		var regex=/[^0-9]/g;
		$(this).val(data.replace(regex,''));
		return false;
	});
	
	$('input[type=number]').keyup(function(event){
		var key = event.key;
		var data = $(this).val();
		if(key == 'Unidentified'  || typeof(key) == 'Unidentified' || typeof(key) == 'undefined' || key>=0 || key<=9 ||key=='Backspace'||key=='Enter'||key=='Tab'||key=='Shift'||key=='Process'||key=='.'||key=='Decimal' || key=='ArrowRight'||key=='ArrowLeft'||key=='ArrowUp'||key=='ArrowDown'){
			return true;
		}
		alert('숫자만 입력할수 있습니다. ('+key+')');
		var regex=/[^0-9]/g;
		$(this).val(data.replace(regex,''));
		return false;
	});
	
	/*영문 숫자 입력*/
	$('.dlpass input[type=text]').keyup(function(event){
		var key = event.key;
		var data = $(this).val();
		var regex=/[^a-z|A-Z|0-9]/g;
		if(regex.test(data) ) {
			  alert("영문과 숫자만 입력할 수 있습니다.");
			  $(this).val(data.replace(regex,''));
			  return false;
			}
		return false;
	});
	
	//약관전체동의 토글
	this.allChk=false;
	$("#btnNv01").click(function(){
		this.allChk=!this.allChk;
		if(this.allChk){
			$(".chk>input").prop("checked",true);
		}else{
			$(".un_chk>input").prop("checked",true);
		}
	});
	
	
	/**
	 * 하단 사이트 이동
	 */
	$('#loanSite').change(function(){
		doPopupURL($(this).val());
	});
	
	/**
	 * 쿠콘 모듈 체크
	 */
	function cooconCheck(){
		try{
			CooconiSASNX.init( function (b){
				//실행가능여부
				if(!b){
					confirmView('[쿠콘 for PC] 공인인증 보안 프로그램 설치가 필요합니다.\n[확인]을 선택하시면 설치페이지로 연결됩니다',function(){
						document.location ='/asset/solution/coocon/install/NXiSAS.exe';
					});
				}
			});
		}catch(error){
			confirmView('[쿠콘 for PC] 공인인증 보안 프로그램 설치가 필요합니다.\n[확인]을 선택하시면 설치페이지로 연결됩니다',function(){
				document.location ='/asset/solution/coocon/install/NXiSAS.exe';
			});
		}
	}
	
	function startmVaccine(){
		mVaccine_onload();
		setTimeout("mVaccineCallbackCheck(callbackFunctionDemo);", 5000);  
	}
	function mVaccineCallbackCheck(callbackFunction){
		var request = new XMLHttpRequest();
		request.open("POST", _mVaccine.callback_url, false);
		request.onreadystatechange = function(){
			if (request.readyState == 4 && request.status == 200) {
				var returnValue = request.responseText.replace(/^\s+|\s+$/g,"");
				mVaccineCheckResult(returnValue, callbackFunction);
			}
		};
		request.send();
		setTimeout("mVaccineCallbackCheck(callbackFunctionDemo);", 10000);  
		return false;
	}
	function mVaccineCheckResult(resultValue, callbackFunction){
		var request = new XMLHttpRequest();
		var params = '?value='+resultValue;
		var url = _mVaccine.validate_url+params;
		url= url.replace(/&/g,"%26"); 
	    url= url.replace(/\+/g,"%2B"); 
		request.open("POST", url, false);
		request.onreadystatechange = function(){
			if (request.readyState == 4 && request.status == 200) {
				var returnValue = request.responseText.replace(/^\s+|\s+$/g,"");
				var returnValueArray = returnValue.split(",");
				returnValue = returnValueArray[0];
				if(returnValue=='null'){
					var cToken = returnValueArray[4];
					if(cToken!=null){
						if(_mVaccine.callback_token!=cToken)
							_mVaccine.callback_token = cToken;
					}
				}
				if(callbackFunction!=null){
					callbackFunction(returnValueArray);
				}
			}
		};
		request.send();
		return false;
	}
});

$(window).load(function(){
	if(SERVICE_CD != 'install'){
		$('#loding').hide();
	}
});
$(window).bind("pageshow",function(event){
	if(event.originalEvent.persisted){
		$('#loding').hide();
	}
});

jQuery.fn.serializeObject = function() {
	var obj = null;
	try {
		if (this[0].tagName && this[0].tagName.toUpperCase() == "FORM") {
			var arr = this.serializeArray();
			if (arr) {
				obj = {};
				jQuery.each(arr, function() {
					obj[this.name] = this.value;
				});
			}// if ( arr ) {
		}
	} catch (e) {
		alert(e.message);
	} finally {
	}
	return obj;
};
//****************************************************************************************************
//1. Description : 프로그래스바 Layer 호출
//2. Parameters : String flag (true, false)
//3. Return Type : 
//****************************************************************************************************
var timeoutFunc;
function progressBar(flag) {
	if (flag) {
		$('#loding').show();
	} else {
		$('#loding').hide();
	}
}
//****************************************************************************************************
//1. Description : 이전페이지 재정의
//2. Parameters : 
//3. Return Type : void
//****************************************************************************************************
history.back = function() {
	progressBar(true);
	history.go(-1);
};
//****************************************************************************************************
//1. Description : JSP 호출 (동기)
//2. Parameters : String serviceCd, Object srcForm 
//3. Return Type : void
//****************************************************************************************************
function doActionView(serviceCd, srcForm) {
	progressBar(true);
	var reqForm;
	if (typeof(srcForm) == 'undefined') {
		reqForm = makeForm("frameForm");
	} else {
		reqForm = srcForm;
	}
	reqForm.attr("action", serviceCd + '.view');
	reqForm.attr("method", 'POST');
	reqForm.submit();
}

function doActionPopupView(serviceCd, srcForm) {
	var reqForm;
	if (typeof(srcForm) == 'undefined') {
		reqForm = makeForm("frameForm");
	} else {
		reqForm = srcForm;
	}
	var viewName='win'+SERVER_TIME;
	reqForm.attr("action", serviceCd + '.view');
	reqForm.attr("method", 'POST');
	reqForm.attr("target",viewName);
	var gsWin=window.open("about:blank",viewName);
	reqForm.submit();
}

//****************************************************************************************************
//1. Description : JSP 호출 (URL동기)
//2. Parameters : String URL
//3. Return Type : void
//****************************************************************************************************
function doActionURL(url) {
	progressBar(true);
	if(url=="scrapy"){
		if(SYSTEM_MODE=='R'){
			location.href = 'http://loan.jt-bank.co.kr:8040/loan/scrapy_view.do';
		}else{
			location.href = 'http://devloan.jt-bank.co.kr:8040/loan/scrapy_view.do';
		}
	}else{
		location.href = url+'.view';
	}
}

function doActionWindowURL(url) {
	progressBar(true);
	window.location.href = url+'.view';
}
//****************************************************************************************************
//1. Description : 메인화면이동
//2. Parameters : 
//3. Return Type : 
//****************************************************************************************************
function goMainPage(){
	progressBar(true);
	doActionURL("/main");
}
function goSignPage(){
	if(SYSTEM_MODE=='R'){
		doPopupURL('http://sign.jt-bank.co.kr/credit/signAuthCenter.do');
	}else if(SYSTEM_MODE=='D'){
		doPopupURL('http://devsign.jt-bank.co.kr/credit/signAuthCenter.do');
	}else if(SYSTEM_MODE=='L'){
		doPopupURL('http://devsign.jt-bank.co.kr/credit/signAuthCenter.do');
	}
}

//****************************************************************************************************
//1. Description : 페이지새로고침
//2. Parameters : 
//3. Return Type : 
//****************************************************************************************************
function refreshPage(){
	progressBar(true);
	history.go(0);
}
//****************************************************************************************************
//1. Description : form 객체생성
//2. Parameters : String formId 
//3. Return Type : Object Form
//****************************************************************************************************
function makeForm(formId) {
	var newForm =  $('<form>', {
		 'id' : formId
		,'name' : formId
		,'method' : 'POST'
	});
	newForm.appendTo($(document.body));
	return newForm;
}

//****************************************************************************************************
//1. Description : form 객체에 데이터 추가
//2. Parameters : Object form, String name, String value 
//3. Return Type : void
//****************************************************************************************************
function addFormData(form, name, value) {
	var inputField = $("<input>").attr("type", "hidden").attr("name", name).val(value);
	$(form).append($(inputField));
}
function deleteForm(form){
	form.remove();
}
//****************************************************************************************************
//1. Description : form 객체에 링크서비스 설정
//2. Parameters : Object form, String serviceCd 
//3. Return Type : void
//****************************************************************************************************
function addLinkService(form, serviceCd) {
	if(typeof($("input[name=linkServiceCd]",form).val())== 'undefined'){
		var inputField = $("<input>").attr("name","linkServiceCd").val(serviceCd);
		$(form).append($(inputField));
	}else{
		$("input[name=linkServiceCd]",form).val(serviceCd);
	}
}
//****************************************************************************************************
//1. Description : cookie 등록, 조회, 삭제
//2. Parameters : String cookieName, String cookieValue 
//3. Return Type : void
//****************************************************************************************************
function setCookie(cookieName, cookieValue, exdays) {
	if(exdays != undefined && exdays != ""){
		$.cookie(cookieName, cookieValue);
	}else{
		$.cookie(cookieName, cookieValue, {expires: exdays});
	}
}
function getCookie(cookieName) {
	return $.cookie(cookieName);
}
function removeCookie(cookieName) {
	$.removeCookie(cookieName);
}
//****************************************************************************************************
//1. Description : RESTFul API 호출 (비동기)
//2. Parameters : String serviceCd, Form Object, function callback 
//3. Return Type : Call Back
//****************************************************************************************************
function doAction(serviceCd, srcForm, callbackFunc) {
	// Validation Check
	if (doValidate(srcForm)) {
		return;
	}

	progressBar(true);
	
	var url = '/'+serviceCd + ".act";
	var data = srcForm.serializeObject();

	setTimeout(function(){
		var requestVal = {
				 url: url
					,type : 'POST'
					,accept: "application/json"
					,contentType: "application/json; charset=utf-8"
					,async : false
					,cache : false
					,headers : {
						"Content-Type":"application/json; charset=UTF-8"
					}
					,dataType: "json"
					,data : JSON.stringify(data)
					,beforeSend : function (xhr, opts) {
						if (false) {
				            xhr.abort(); // submit Cancel
				        }
						progressBar(true);
					}
					,success: function(resData){
						callbackFunc(resData);
					}
					,error: function(request, status, error){
						var resData={"APP_HEADER":{"respCd":"E00000","respMsg":"처리 중 오류가 발생하였습니다."}}
						callbackFunc(resData);
					}
					,complete: function(xhr, status) {
						progressBar(false);
					}
				};
		
		$.ajax(requestVal);
	}, 100);
}
function doActionValue(serviceCd, srcForm) {
	// Validation Check
	if (doValidate(srcForm)) {
		return;
	}
	progressBar(true);
	
	var url = '/'+serviceCd + ".act";
	var data = srcForm.serializeObject();
	
	$.ajax({
		 url: url
		,type : 'POST'
		,accept: "application/json"
		,contentType: "application/json; charset=utf-8"
		,async : false
		,cache : false
		,headers : {
			"Content-Type":"application/json; charset=UTF-8"
		}
		,dataType: "json"
		,data : JSON.stringify(data)
		,beforeSend : function (xhr, opts) {
			if (false) {
	            xhr.abort(); // submit Cancel
	        }
			progressBar(true);
		}
		,success: function(resData){
			data = resData;
		}
		,error: function(request, status, error){
			var resData={"APP_HEADER":{"respCd":"E00000","respMsg":"처리 중 오류가 발생하였습니다."}}
			data = resData;
		}
		,complete: function(xhr, status) {
			progressBar(false);
		}
	});
	return data;
}
// ****************************************************************************************************
//1. Description : RESTFul API 호출 (비동기)_즉시대출시 값 빠지는 현상 발생으로  promise 사용해서 기존 doAction 재정의
//2. Parameters : String serviceCd, Form Object, function callback 
//3. Return Type : Call Back
//****************************************************************************************************

function doActionPromise(serviceCd, srcForm) {
	// Validation Check
	if (doValidate(srcForm)) {
		return;
	}
	var url = serviceCd + ".act";
	var data = srcForm.serializeObject();
	return new Promise(function(resolve, reject){
		$.ajax({
			 url: url 
			,type : 'POST'
			,accept: "application/json"
			,contentType: "application/json; charset=utf-8"
			,async : true
			,cache : false
			,headers : {"Content-Type":"application/json; charset=UTF-8"}
			,dataType : "json"
			,data : JSON.stringify(data)
			,beforeSend : function (xhr, opts) {
				if (false) {
		            xhr.abort(); // submit Cancel
		        }
				progressBar(true);
			}
			,success: function(resData){
				resData.succYn = "Y";
				return resolve(resData);
			}
			,error : function(request, status, error){
				LOG.error("error" + error);
				var resData = {"succYn":"N"};
				return reject(error);
			}
			,complete : function(xhr, status) {
				progressBar(false);
			}
		})
	});
};


//****************************************************************************************************
//1. Description : trgtDate (20200305) 현재일자와의 차이 반환 과거일자는 -일자
//2. Parameters : String trgtDate 
//3. Return Type : String
//****************************************************************************************************
function getDiffDay(trgtDate) {
	var toDay = new Date();
	var trgtDay = new Date(trgtDate.substr(0, 4), Number(trgtDate.substr(4, 2))-1, trgtDate.substr(6, 2));
	var betweenDay = (trgtDay.getTime()-toDay.getTime()) / 1000 / 60 / 60 / 24;
	return Math.ceil(betweenDay);
}
//****************************************************************************************************
//1. Description : 나이체크
//2. Parameters :  
//3. Return Type : custAge
//****************************************************************************************************

function ageChk(rbrNo){
	var rbrno1 = rbrNo; //고객생년월일
	var custAge = 0;			//고객나이
	var curDate = "";		//현재일자
	curDate =SERVER_TIME.substring(0,8);
	var genType = parseInt(SEX_CD);	//고객성별코드
	if(genType <= 2)/*1900년대생일경우(1,2)*/{
		rbrno1 = "19"+rbrno1;
	} else/*2000년대생일경우(3,4)*/{
		rbrno1 = "20"+rbrno1;	
	}
	var tmpAge  = (parseInt(curDate) - parseInt(rbrno1)); //현재일자 - 생년월일
	custAge = String(tmpAge).substring(0,2); //만나이
	return custAge;
}


//****************************************************************************************************
//1. Description : 폼 데이터 유효성검증
//2. Parameters : 대상 form 객체
//3. Return Type : boolean
//****************************************************************************************************
function doValidate(srcForm) {
	LOG.debug("doValidate call");
	
	var errCnt = 0;
	srcForm.find("input, select").each(function(i, item) {
		var dataValidate = $(this).attr("data-validate");
		if (typeof(dataValidate) == "undefined") return true;
		var validateOpt = dataValidate.split(",");
		
		LOG.debug("doValidate Opt::" + validateOpt.length);
		
		if (validateOpt.length > 0) { // 유효성검증대상
			for (var i=0; i < validateOpt.length; i++) {
				var validateType = validateOpt[i];
				LOG.debug("doValidate validateType:"+validateType);
				if (validateType=="required") {
					if ($.trim($(this).val()) == "") {
						errCnt++;
						doValidateError($(this));
					}
				} else if (validateType=="number") {
					// 숫자여부 확인
					if (!/^[0-9]*$/.test($(this).val())) {
						errCnt++;
						doValidateError($(this));
					}
					
				} else if (validateType=="phoneNo") {
					// 휴대전화여부
					if (!/^\d{2,3}\d{3,4}\d{4}$/.test($(this).val())) {
						errCnt++;
						doValidateError($(this));
					}
				} else if (validateType=="korean") {
					// 한글만입력가능
					if (!/[가-힣]/.test($(this).val())) {
						errCnt++;
						doValidateError($(this));
					}
				} else if (validateType=="email") {
					// 이메일형식
					if (!/^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{1,5}$/.test($(this).val())) {
						errCnt++;
						doValidateError($(this));
					}
				}
				// ValidateType 추가지점
			}
		}
	});
	
	LOG.debug("doValidate errCnt:" + errCnt);
	return (errCnt > 0) ? true : false;
}

function doValidateError(target){
	$(target).closest("li").addClass("error");
	
	LOG.error($(target).attr(name) + " is Error");
}


function getXMLHttpRequest() {
	if (window.ActiveXObject) {
		try {
			return new ActiveXObject("Msxml2.XMLHTTP");
		} catch(e) {
			try {
				return new ActiveXObject("Microsoft.XMLHTTP");
			} catch(e1) { return null;}
			
		}
	} else if (window.XMLHttpRequest) {
		return new XMLHttpRequest();
	} else {
		return null;
	}
}

var httpRequest = null;

function sendRequest(url, params, callback, method) {
	httpRequest = getXMLHttpRequest();
	var httpMethod = method ? method : 'GET';
	if (httpMethod != 'GET' && httpMethod != 'POST') {
		httpMethod = 'GET';
	}
	var httpParams = (params == null || params == '') ? null : params;
	var httpUrl = url;
	if (httpMethod == 'GET' && httpParams != null) {
		httpUrl = httpUrl + "?" + httpParams;
	}
	httpRequest.open(httpMethod, httpUrl, true);
	httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	httpRequest.onreadystatechange = callback;
	httpRequest.send(httpMethod == 'POST' ? httpParams : null);
}


function callLink(){
	document.location.href='tel:1688-8877';
}

function loanRqsGo(pdcd){
	var loanForm = makeForm("loan");
	addFormData(loanForm,'pdcd',pdcd);
	doActionView('/loan/LOAN1700',loanForm);
}

//****************************************************************************************************
//1. Description : 정상 메시지 Layer 호출
//2. Parameters : String 메시지
//3. Return Type : void
//****************************************************************************************************
function messageView(message) {
	alert(message);
}
//****************************************************************************************************
//1. Description : 확인취소메세지
//2. Parameters : String 메시지
//3. Return Type : void
//****************************************************************************************************
function confirmView(message,func) {
	if(confirm(message)){
		func();
	}
}

//****************************************************************************************************
//1. Description : 입력
//2. Parameters : String 메시지
//3. Return Type : void
//****************************************************************************************************
function promptView(message,func) {
	var str = prompt(message);
	func(str,func);
}



function valueCheckById(formId){
	if (typeof($('#'+formId).val()) == 'undefined' || $('#'+formId).val() == "" ){
		return false;
	}else{
		return true;
	}
}
function valueSizeEqualCheckById(formId,size){
	if (!valueCheckById(formId)){
		return false;
	}else{
		if($('#'+formId).val().length==size){
			return true;
		}
		return false;
	}
}

function selectBoxValueCheckById(formId){
	if (typeof($('#'+formId+' option:selected').val()) == 'undefined' || $('#'+formId+' option:selected').val() == "" ){
		return false;
	}else{
		return true;
	}
}

function selectBoxCodeApeend(formId,codeGroupId){
	var optionSize = $('#'+formId+' option').size();
	if (optionSize < 2){
		var codeForm = makeForm("codeForm");
		addFormData(codeForm,'codeGroupId',codeGroupId);
		doAction('CODE0000SC',codeForm,function(res){
			if(res.APP_HEADER.respCd='N00000'){
				var codes = res.code;
				var htmlStr='';
				for(i in codes){
					var code=codes[i];
					htmlStr+='<option value="'+code.CODEXD+'">'+code.CODENAME+'</option>';
				}
				$('#'+formId).append(htmlStr);
			}else{
				messageView('['+res.APP_HEADER.respCd+']'+res.APP_HEADER.respMsg);
			}
		});
	}
}

function liSelectBoxCodeAppend(formId,codeGroupId){
	$('.select-popup ul').empty();
	
	var codeForm = makeForm("codeForm");
	addFormData(codeForm,'codeGroupId',codeGroupId);
	doAction('CODE0000SC',codeForm,function(res){
		if(res.APP_HEADER.respCd='N00000'){
			var codes = res.code;
			var htmlStr='';
			for(i in codes){
				var code=codes[i];
				htmlStr+='<li value="'+code.CODEXD+'"><a href="javascript:void(0);" onclick="javascript:liSelectBoxToInput(this,'+formId+');">'+code.CODENAME+'</a></li>';
			}
			$('.select-popup ul').html(htmlStr);
		}else{
			messageView('['+res.APP_HEADER.respCd+']'+res.APP_HEADER.respMsg);
		}
	});
}

function liSelectBoxToInput(e, formId){
	$(formId).val($(e).text());
	var value=String($(e).parent().val());
	if(value.length==1){
		value='0'+value;
	}
	$("#" + formId.id + "_cd").val(value);
	modalOff();
}

function getValueById(formId){
	return $('#'+formId).val();
}
function getSelectBoxValueById(formId){
	return $('#'+formId+' option:selected').val();
}
function getSelectBoxTextById(formId){
	return $('#'+formId+' option:selected').text();
}
function getRadioBoxValueById(formId){
	if($('#'+formId).is(':checked')){
		return 'Y';
	}else{
		return 'N'
	}
}
function getRadioBoxValueByName(formName){
	return $('input[name='+formName+']:checked').val();
}
function getRadioBoxCheckByName(formName){
	return $('input[name='+formName+']').is(':checked');
}
function getRadioBoxCheckById(formId){
	if($('#'+formId).is(':checked')){
		return true;
	}else{
		return false;
	}
}
function getValueByUlTabId(formId){
	return $('#'+formId).find('li.active button').val();
}
function inputNumberFormat(formId){
	$('#'+formId).val(comma(uncomma($('#'+formId).val())));
}
function comma(str){
	str=String(str);
	return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g,'$1,');
}s
function uncomma(str){
	str=String(str);
	return str.replace(/[^\d]+/g,'');
}

//****************************************************************************************************
//1. Description : 보안키패드 복호화
//2. Parameters : formId 값
//3. Return Type : String 복호화한값
//****************************************************************************************************
function decodeTransKey(formId,callbackFunc){
	var values = mtk.inputFillEncData(document.getElementById(formId));
	var name = document.getElementById(formId).name;
	var hidden = values.hidden;
	var hmac = values.hmac;
	var frmId = use_form_id?"_"+$("#hidfrmId").val():"";
	var transkey = makeForm("TRANSKEY");
	addFormData(transkey,'id',formId);
	addFormData(transkey,'name',formId);
	addFormData(transkey,'hidden',hidden);
	addFormData(transkey,'hmac',hmac);
	addFormData(transkey,'transkey_'+formId+'_'+frmId			,hidden);
	addFormData(transkey,'transkey_HM_'+formId+'_'+frmId		,hmac);
	addFormData(transkey,'transkey_ExE2E_'+formId+'_'+frmId	,'raon');
	addFormData(transkey,'transkeyUuid_'+frmId						,mtk.transkeyUuid);
	addFormData(transkey,'hidfrmId',frmId+tk_origin);
	doAction('TRANSKEY',transkey,function(res){
		if(res.APP_HEADER.respCd=='N00000'){
			callbackFunc(res.TRANSKEY);
		}else{
			messageView('키보드 보안 에러');
		}
	});
}


//애니사인 인증서 호출
function anySignSimpleSign () {

    var now = new Date(); // 현재시간 가져오기
    var year = now.getFullYear(); // 년도 가져오기
    var month = now.getMonth() + 1; // 월 가져오기 (+1)
    var date = now.getDate(); // 날짜 가져오기
    var hr = now.getHours(); // 시 가져오기
    var mn = now.getMinutes(); // 분 가져오기
    var sc = now.getSeconds(); // 초 가져오기
    
	 var egsnStr = "[신청인정보]\n"
         + " * 이름: " + "남교" + "\n"
         + " * 주민등록번호: "+"931103-1"+"-****** \n"
         + " * 인증일시: "+year+"년 "+month+"월 "+date+"일 "+hr+":"+mn+":"+sc+"\n"
         + " * 인증방법: 공동인증서 \n"
         + "------------------------------\n";
         
	AnySign.mDivInsertOption = 2;
	AnySign.SetUITarget(document.getElementById('certDialog'));	
	AnySign.SignDataCMS (AnySign.mXgateAddress
			, AnySign.mCAList
			, "hello"
			, 0
			, ""
			, 3
			, 
			//서명완료
			function(signData){
				alert(signData);
			});
}

//핸드폰인증번호 인증서 호출
function phone () {
	 var egsnStr = "[신청인정보]\n"
         + " * 이름: " + "남교" + "\n"
         + " * 주민등록번호: "+"931103-1"+"-****** \n"
         + " * 인증일시: "+''+"년 "+''+"월 "+''+"일 "+''+":"+''+":"+''+"\n"
         + " * 인증방법: PC-휴대폰인증 \n"
         + "------------------------------\n"
	 	+ "JT저축은행 약관에 동의하고 인증 하였습니다";
}

function lpad(s,padLength,padString){
	var padStr='';
	for(var i=s.length;i<padLength;i++){
		padStr+=padString;
	}
	padStr+=s;
	return padStr;
}

/* 모달 */
function modalOn(modalID) { // 모달 On 모달 창 호출 후 해당 모달 컨텐츠 로드
	$("." + modalID).attr("tabindex", "0").addClass('on').focus();
	$("html").css("overflow","hidden");
	$(".Acuon-Modal dd > div").scrollTop(0);
	layerFocusControl( $("." + modalID) );
		
	//인증번호 확인창 일시 타이머 작동
	if(modalID=='phoneAuthModal'||modalID=='phone-popup'){
		$('#smsCtfcNo').val('');
		this.timerYn=true;
		var time=180; //180초 3분
		var min='';//분
		var sec='';//초
		this.x=setInterval(function(){
			min=lpad(String(parseInt(time/60)),2,'0');
			sec=lpad(String(time%60),2,'0');
			var text=min+':'+sec;
			$('#timer').html(text);
			time--;
			if(time<0&&this.timerYn){
				alert('인증요청시간을 초과하였습니다.');
				modalAllOff();
				modalOff2();
				clearInterval(x);
			}
		},1000);
	}
	
	
};
function modalOff(modalID) {
	if(this.x != undefined){
		clearInterval(this.x);
	}
	if(modalID != undefined && modalID != ""){
		$("#" + modalID).removeClass('on');
		
		if (!$(".Acuon-Modal.on").length){
			$("html").css("overflow","auto").css("height","100%");
		}
	}else{
		$('.Acuon-Modal').removeClass('on');
		$("html").css("overflow","auto").css("height","100%");
		$(".currPos").focus().removeClass("currPos");
		
	}
};
function modalOff3() {
	if(this.x != undefined){
		clearInterval(this.x);
	}
	$('.result').removeClass('on');
	$("html").css("overflow","auto").css("height","100%");
	$(".currPos").focus().removeClass("currPos");
};
function modalOff2() {
	if(this.x != undefined){
		clearInterval(this.x);
	}
	$('.full-Modal').removeClass('on');
	$("html").css("overflow","auto").css("height","100%");
	$(".currPos").focus().removeClass("currPos");
};
function modalAllOff() { // 모달 Off
	if(this.x != undefined){
		clearInterval(this.x);
	}
	this.timerYn=false;
	$('.Acuon-Modal').removeClass('on');
	$("html").css("overflow","auto").css("height","100%");
	$(".currPos").focus().removeClass("currPos");
};
function modalOffDay(modalID, exdays) {		// 일정일자동안 모달 열리지 않도록 쿠키설정
	if(this.x != undefined){
		clearInterval(this.x);
	}
	setCookie(modalID, "done", exdays);	
	if(modalID == "mobilepop"){
		modalOff();
	}else{
		modalOff(modalID);
	}
};

function layerFocusControl(target){
	
	var $firstEl = target.find("a, button, input, textarea, select, [tabindex='0'], iframe").first();
	var $lastEl = target.find("a, button, input, textarea, select, [tabindex='0'], iframe").last();
	
	$firstEl.on("keydown", function(e){
		if( e.keyCode == 9 && e.shiftKey){
			$lastEl.focus();
			e.preventDefault();		
		}
	});
	
	$lastEl.on("keydown", function(e){
		if( e.keyCode == 9 && !e.shiftKey){
			$firstEl.focus();
			e.preventDefault();	
		}
	});
	
}

/**
 * 약관 자세히보기후 미확인=>확인 메세지변경
 */
function modalOffStateChange(){
	$('#'+this.checkFormId+'_y').show();
	$('#'+this.checkFormId+'_n').hide();
	if(IS_MOBILE=='Y'){
		modalOff2();
	}else{
		modalOff();
	}
}

/**
 * 약관 모달 PDF뷰어
 */
function goPdfViewer(manageNo,checkFormId){
	
	$("[onclick*=" + manageNo + "]").addClass("currPos");
	//layerFocusControl( $(".Acuon-Modal") );
	
	//약관 확인후 체크할 폼 id 전역변수 저장
	if(checkFormId != undefined){
		this.checkFormId=checkFormId;
	}
	var bbsForm = makeForm("bbsForm");
	addFormData(bbsForm,'txGnbCd','S');
	addFormData(bbsForm,'manageNo',manageNo);
	progressBar(true);
	setTimeout(function(){
		doAction('SERV0901SC',bbsForm,function(res){
			if(res.APP_HEADER.respCd='N00000'){
				var viewerURL = '/asset/solution/pdfjs/web/viewer.html';
				if(res.FILEPATH1 != null && res.FILENAME1 != null){
					//약관확인체크 필요한 모달인지 여부
					if(checkFormId != undefined){
						if(SYSTEM_MODE!='L'){
							var agent = navigator.userAgent.toLowerCase();
							//익스일때는팝업
							if(agent.indexOf("trident")>-1){
								goPdfPopup(res.FILEPATH1 + res.FILENAME1);
								modalOffStateChange();
							}else{
								modalOn('pdfViewerModalCheck');
								$("#pdfViewerDt2").text(res.TTL);
								$("#pdfViewerFrame2").attr('src', viewerURL + '?file=' + res.FILEPATH1 + res.FILENAME1);
							}
							
							
						}else{
							modalOn('pdfViewerModalCheck');
							LOG.debug('PDF뷰어 로컬패스');
						}
					}else{
						if(SYSTEM_MODE!='L'){
							var agent = navigator.userAgent.toLowerCase();
							if(agent.indexOf("trident")>-1){
								goPdfPopup(res.FILEPATH1 + res.FILENAME1);
							}else{
								modalOn('pdfViewerModal');
								$("#pdfViewerDt").text(res.TTL);
								$("#pdfViewerFrame").attr('src', viewerURL + '?file=' + res.FILEPATH1 + res.FILENAME1);
							}
						}else{
							modalOn('pdfViewerModal');
							LOG.debug('PDF뷰어 로컬패스');
						}
					}
					progressBar(false);
				}
			}else{
				messageView('['+res.APP_HEADER.respCd+']'+res.APP_HEADER.respMsg);
				progressBar(false);
			}
		});
	},100);
}

/**
 * 약관 모달 url 
 */
function goUrlViewer(url,checkFormId){	
	//약관 확인후 체크할 폼 id 전역변수 저장
	if(checkFormId != undefined){
		this.checkFormId=checkFormId;
	}
	
	if(SYSTEM_MODE!='L'){
		var agent = navigator.userAgent.toLowerCase();
		//익스일때는팝업
		if(agent.indexOf("trident")>-1){
			modalOffStateChange();
		}else{
			modalOn('pdfViewerModalCheck');
			$("#pdfViewerDt2").text(res.TTL);
			$("#pdfViewerFrame2").attr('src', url);
		}
		
		
	}else{
		modalOn('pdfViewerModalCheck');
		LOG.debug('url뷰어 로컬패스');
	}
	
}










function goPdfPopup(url){
	var agent = navigator.userAgent.toLowerCase();
    var pHeight = "589px";
    if (agent.indexOf('Safari') != -1){pHeight = "529px";}
    window.open(url, 'agreeV', 'width=800px, height='+pHeight+', top=0, left=0, scrollbars=yes','_blank');
}

function goPdfViewerCheck(manageNo,checkFormId){
	var bbsForm = makeForm("bbsForm");
	addFormData(bbsForm,'txGnbCd','S');
	addFormData(bbsForm,'manageNo',manageNo);
	progressBar(true);
	setTimeout(function(){
		doAction('SERV0901SC',bbsForm,function(res){
			if(res.APP_HEADER.respCd='N00000'){
				var viewerURL = '/asset/solution/pdfjs/web/viewer.html';
				if(res.FILEPATH1 != null && res.FILENAME1 != null){
					$("#pdfViewerDt").text(res.TTL);
					$("#pdfViewerFrame").attr('src', viewerURL + '?file=' + res.FILEPATH1 + res.FILENAME1);
					modalOn('pdfViewerModal');
					progressBar(false);
				}
			}else{
				messageView('['+res.APP_HEADER.respCd+']'+res.APP_HEADER.respMsg);
				progressBar(false);
			}
		});
	},100);
}

/**
 * 영역 프린트
 */
function printElem(targetId, addClass){
	let app = document.getElementById('app');
	const printCont = document.getElementById(targetId).innerHTML;
	let printDiv = document.createElement('DIV');
	printDiv.setAttribute('id', 'print1');
	
	if(addClass != undefined && addClass != ''){
		printDiv.setAttribute('class', addClass);
	}
	
	document.body.appendChild(printDiv);
	printDiv.innerHTML = printCont;
	window.print();
	
	app.style.display = 'block';
	$('#print1').remove();
}
/**
 * DIV 영역 pdf 다운로드
 */
function divPrintDownload(formID,name){
	if($('#'+formID)==null){
		alert('폼 오류');
		return false;
	}
	$('html').scrollTop(0);
	progressBar(true);
	
	setTimeout(function(){
		var t=$('#'+formID)[0];
		html2canvas(t,{
			logging:false,
			allowTaint:true,
			useCORS:true,
			scale:2,
			dpi:600,
			imageTimeout:0,
			letterRendering:true
		}).then(function(canvas){
			var imgData = canvas.toDataURL("image/JPEG"); //PNG방식은 느리고 50M가가 되서 못써먹고 JPG방식이 좋습니다.
			
			var margin=10; //여백
			var imgWidth	=	210 - (margin * 2); //210 이미지 가로길이 (mm) A4용지기준
			var pageHeight	=	imgWidth * 1.0;//출력페이지 세로길이 계산 A4기준
			var imgHeight		=	(canvas.height * imgWidth / canvas.width);
			var heightLeft		=	imgHeight;
			
			var doc=new jsPDF({
				'orientation':'p',
				'unit':'mm',
				'format':'a4'
			});
			var position=margin;
			//첫페이지 출력
			doc.addImage(imgData,'JPEG',margin,position,imgWidth,imgHeight);
			heightLeft-=pageHeight;
			
			//다음페이지 반복
			while(heightLeft>=100){
				position=heightLeft-imgHeight;
				doc.addPage();
				doc.addImage(imgData,'JPEG',margin,position,imgWidth,imgHeight);
				heightLeft-=pageHeight;
			}

			doc.save(name+'.pdf');
			progressBar(false);
		});
	},100);
	
	
	
}
/**
 * 공통페이징 페이지 이동
 * @param pageNum
 */
function paggingNumClick(pageNum){
	var serviceCd = $(location).attr('pathname').replace('.view','');
	var movePage = makeForm('movePage');
	addFormData(movePage,'page',pageNum);
	doActionView(serviceCd,movePage);
}

function doPopupURL(url){
	window.open(url,'_blank');
}
function appLink(){
	//아이폰
	if(IS_IPHONE=='Y'){
		doPopupURL('https://apps.apple.com/us/app/id1514708860');
	}
	//안드로이드
	else{
		doPopupURL('https://play.google.com/store/apps/details?id=kr.co.jtbank.app');
	}
}
function sbLink(){
	//아이폰
	if(IS_IPHONE=='Y'){
		doPopupURL('https://apps.apple.com/us/app/sb톡톡플러스/id1469002262');
	}
	//안드로이드
	else{
		doPopupURL('https://play.google.com/store/apps/details?id=kr.or.sbbank.plus');
	}
}
function callInsta(){
	//인스타그램아이콘
	doPopupURL('https://instagram.com/jtsavingsbank/');
}
function callFb(){
	//페이스북아이콘
	doPopupURL('https://www.facebook.com/JT-저축은행-108949018514723/');
}
function callBlog(){
	doPopupURL('https://blog.naver.com/jtsavingsbank');
}
function callKakao(){
	doPopupURL('https://pf.kakao.com/_txgxeMd');
}
function bankingLink(){
	doPopupURL('https://jt.ibs.fsb.or.kr/main.act');
}
function fsbLink(){
	doPopupURL('https://www.fsb.or.kr/busconspeti_0100.act');
}
function damboLink(){
	doPopupURL('https://jt.ibs.fsb.or.kr/LonInfoInfo0100.act');
}
function wbLink(){
	doPopupURL('https://abr.ge/lsqgik');
}

//이메일 무단 수집거부
function goNotEmailSendInfo(){
	var sendForm = makeForm("sendForm");
	addFormData(sendForm,'txGnbCd',"S");
	addFormData(sendForm,'manageNo','20220506000039');
	doActionView('/customer/CUS1501',sendForm);
}
//인터넷뱅킹 사기 예방을 위한 소비자 유의사항 안내
function goNotInternetSendInfo(){
	var sendForm = makeForm("sendForm");
	addFormData(sendForm,'txGnbCd',"S");
	addFormData(sendForm,'manageNo','20130722000596');
	doActionView('/service/SERV0102',sendForm);
}
var s = '';
s += '-----BEGIN CERTIFICATE-----\n';
s += 'MIIFzzCCBLegAwIBAgIEBKsWWDANBgkqhkiG9w0BAQsFADBKMQswCQYDVQQGEwJL\n';
s += 'UjENMAsGA1UECgwES0lDQTEVMBMGA1UECwwMQWNjcmVkaXRlZENBMRUwEwYDVQQD\n';
s += 'DAxzaWduR0FURSBDQTUwHhcNMTkwMTMxMDQ0NTAxWhcNMjAwMjExMTQ1OTU5WjCB\n';
s += 'hzELMAkGA1UEBhMCS1IxDTALBgNVBAoMBEtJQ0ExEzARBgNVBAsMCmxpY2Vuc2Vk\n';
s += 'Q0ExDzANBgNVBAsMBlNFUlZFUjENMAsGA1UECwwES0lDQTEPMA0GA1UECwwGU0VS\n';
s += 'VkVSMSMwIQYDVQQDDBrsoJzsnbTti7DsoIDstpXsnYDtloko7KO8KTCCASIwDQYJ\n';
s += 'KoZIhvcNAQEBBQADggEPADCCAQoCggEBAILnHpeBfwRkIXe/bv+MhvYMfRR/ddyi\n';
s += 'SutgVENm3Pa0esOSYwWt2zZSQS3mBMLC1WimWH9kN4XlFC86V3iGUipyoAYuidyy\n';
s += 'CIMKnF0J+P60xM+cf1KSaX88/iBrii+toGp8efoOC4jas9QK1A8vOpQg+OB/QO1N\n';
s += 'GWXNBn+b2QxNN0vr1aTlPcjYOganOuLKG1Hm3/G3xZ0I9SIf3IZMJ0A/b3gKILZm\n';
s += '9qdwmDA1rI479b2b8clquW7MUznIdKLLykeTBD6ch5AkdqcpuTB2UlyZlFfx2w/V\n';
s += '1KOEU7Ri+XBUT7aQcxhYuVJF3btCK0AWfT1rE/HstPI6erVtoFFUqQkCAwEAAaOC\n';
s += 'An0wggJ5MIGPBgNVHSMEgYcwgYSAFNi+OuxFmcWe45zqgR/SHRKwNj6IoWikZjBk\n';
s += 'MQswCQYDVQQGEwJLUjENMAsGA1UECgwES0lTQTEuMCwGA1UECwwlS29yZWEgQ2Vy\n';
s += 'dGlmaWNhdGlvbiBBdXRob3JpdHkgQ2VudHJhbDEWMBQGA1UEAwwNS0lTQSBSb290\n';
s += 'Q0EgNIICEB0wHQYDVR0OBBYEFE97vemYeZz7n2xt//lY+jh+QBNjMA4GA1UdDwEB\n';
s += '/wQEAwIGwDB1BgNVHSAEbjBsMGoGCiqDGoyaRAUCAQQwXDAsBggrBgEFBQcCARYg\n';
s += 'aHR0cDovL3d3dy5zaWduZ2F0ZS5jb20vY3BzLmh0bWwwLAYIKwYBBQUHAgIwIB4e\n';
s += 'x3QAIMd4yZ3BHLKUACCs9cd4x3jJncEcx4WyyLLkMIGXBgNVHREEgY8wgYyBGmtp\n';
s += 'bS55b3VuZ2ppbkBqdC1iYW5rLmNvLmtyoG4GCSqDGoyaRAoBAaBhMF8MGuygnOyd\n';
s += 'tO2LsOyggOy2leydgO2WiSjso7wpMEEwPwYKKoMajJpECgEBATAxMAsGCWCGSAFl\n';
s += 'AwQCAaAiBCDZrgM1oJHnLEb7FD21y9eahfGcRphDVGVG9vyWL2hRyzBfBgNVHR8E\n';
s += 'WDBWMFSgUqBQhk5sZGFwOi8vbGRhcC5zaWduZ2F0ZS5jb206Mzg5L291PWRwN3Ax\n';
s += 'MTMyMixvdT1jcmxkcCxvdT1BY2NyZWRpdGVkQ0Esbz1LSUNBLGM9S1IwRAYIKwYB\n';
s += 'BQUHAQEEODA2MDQGCCsGAQUFBzABhihodHRwOi8vb2NzcC5zaWduZ2F0ZS5jb206\n';
s += 'OTAyMC9PQ1NQU2VydmVyMA0GCSqGSIb3DQEBCwUAA4IBAQBd0TG6zjiU2W9qa48C\n';
s += 'Oz3FNbgIWtFWnyGHNYUIo3QUYyFEaZtHm7WVWYwKTuCSEInbPp3vimlzGrKxTHlb\n';
s += 'kDMCb3kuAdEBUgfz2XvrHJM2IoVILZa9+6vAgxbkqD236pGXViuPmL9EyNvWBbai\n';
s += '8bLLeOQ2q4abg6xAfT31IJAjsjgWQ6nD4vIAdDgKtTCUxW+OqSerNlzjzLunn19C\n';
s += '4SHXbB6auMhnblnlMgxLxDfwdV+LSTkMLiVuUC8iO/rV+dgbH23gVe+FrlHzF8C1\n';
s += 'l8Q8MEBJmqvpui3TrSb8nSR9Ceu2w+MjqeEFbHbFlBEqSb5xbtBEvC+/+qRwF3dK\n';
s += 'FoXI\n';
s += '-----END CERTIFICATE-----\n';
s += '';

//****************************************************************************************************
//1. Description : 전자서명
//2. Parameters : 
//3. Return Type : 
//****************************************************************************************************
function anySignRun(msg,srcForm,nextFunc){
	send_vid_info(function(vidMsg){
		addFormData(srcForm	,'vidMsg'	,vidMsg);
		addFormData(srcForm	,'signMsg',msg);
		//공동인증 본인인증  16:주민번호인증
		Sign_with_vid_user(16
				,msg
				,s
				,function(signedMsg){
					addFormData(srcForm	,'signedMsg'	,signedMsg);
					nextFunc(srcForm);
				}
			);
		});
}

function fileDownload(fileName,filePath){
	var fileDownload = makeForm("fileDownload");
	addFormData(fileDownload,'filePath',filePath);
	addFormData(fileDownload,'fileName',fileName);
	doActionView('/fileDownload',fileDownload);
}
function autoHyphen(target){
	 target.value = target.value
	   .replace(/[^0-9]/, '')
	   .replace(/^(\d{0,4})(\d{0,2})(\d{2})$/, '$1-$2-$3');
}
function jaresu(target){
	var value = String(target.value).split('.')[1] ;
	if(value!='undefined'&&value!=null&&value!=''){
		if(value.length>2){
			var resultVal=String(target.value).substring(0,4);
			target.value=resultVal;
			alert('소수점 2자리까지 입력가능합니다.');
		}
	}
}


/* 주민번호의 유효성 체크 */
function checkSsn(ssn) {

	var chkbit = "234567892345";
	var sum = 0;
	var result;
	if (ssn.length != 13) {
		return false;
	}

	for (i = 0; i < ssn.length; i++) {
		if (ssn.charCodeAt(i) < 48 || ssn.charCodeAt(i) > 57) {
			return false;
		}
	}

	for (i = 0; i < 12; i++) {
		sum = sum + eval(ssn.charAt(i) * chkbit.charAt(i));
	}

	result = sum % 11;
	result = 11 - result;

	if (result == 10)
		result = 0;

	else if (result == 11)
		result = 1;

	if (ssn.charAt(12) == result) {
		return true;
	}
	
	return false;
}

/*개인정보처리방침 팝업*/
function cusInfo1(){
	window.open('/customer/cus0301_20210328_pop.view', 'JT저축은행', 'width:300, height:500');
	
}
/*개인정보처리방침 팝업*/
function cusInfo2(){
	window.open('/customer/cus0301_20230328_pop.view', 'JT저축은행', 'width:300, height:500');
	
}
/*개인정보처리방침 팝업*/
function cusInfo3(){
	window.open('/customer/cus0301_20230821_pop.view', 'JT저축은행', 'width:300, height:500');
	
}

/*개인정보처리방침 팝업*/
function cusInfo4(){
	window.open('/customer/cus0301_20240603_pop.view', 'JT저축은행', 'width:300, height:500');
	
}

function loanLinkd(txGbnCd, loanRqsNo, custNo){
	var loan1800ReqForm = makeForm("LOAN1800");
	addFormData(loan1800ReqForm,	"txGnbCd"	, txGbnCd);
	addFormData(loan1800ReqForm,	"loanRqsNo", loanRqsNo);				            
	addFormData(loan1800ReqForm,	"custNo", custNo);
	addFormData(loan1800ReqForm,	"linkdFintech", "WB");
	
	if(txGbnCd == "U"){
		addFormData(loan1800ReqForm, "clickYn", "Y");	
	}
	
	//배너 안내 저장
	doAction('LOAN1800SC',loan1800ReqForm,function(resDs){
		if(resDs.APP_HEADER.respCd=='N00000'){
			
		}
		else{
			messageView('['+resDs.APP_HEADER.respCd+']'+resDs.APP_HEADER.respMsg);
		}
	});
}

/*
 * 추가대출 약관 체크시 세부항목 자동 체크
 * */
function agreeChkBox(index){
	if (index == '1'){ //개인(신용)정보 필수 동의
		$('#subChk08').prop("checked", true);
		$('#subChk09').prop("checked", true);
		$('#subChk10').prop("checked", true);
		$('#subChk11').prop("checked", true);
	} else if (index == '2'){ //이동통신사별 서비스 약관 동의
		$('#subChk14').prop("checked", true);
	}
}