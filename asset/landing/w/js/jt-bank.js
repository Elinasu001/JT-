////////////////////////////////////////
// 오른쪽 마우스 차단
////////////////////////////////////////
/*
try {
	document.attachEvent('oncontextmenu', function () {
		alert('오른쪽 마우스 버튼은 사용할 수 없습니다.');
		return false;
	}); // IE Only
} catch(e) {}
*/
$(document).ready(function (){
	$(document).bind('contextmenu', function(e){
		alert('오른쪽 마우스 버튼은 사용할 수 없습니다.');
		return false;
	});
});

////////////////////////////////////////
// F5키 방지
////////////////////////////////////////
/*
document.onkeydown = function() {
	if (event.keyCode == 116) {
		event.keyCode = 505;
    }
    if (event.keyCode == 505) {
      return false;
    }
}
*/

//프론트 페이징 세팅;
function paging(intTotalCnt, intListCnt, intCurPage, intPageCnt, link_func_name)
{
	var strPagingLink = "";

	var intTotalPage = 0;
	var intTotalBlock = 0;
	var intCurBlock = 0;
	var intStartPage = 0;

	if (parseInt(intTotalCnt) > 0)
	{
		//전체 페이지
		intTotalPage = Math.ceil(intTotalCnt / intListCnt);

		//전체 블럭
		intTotalBlock = Math.ceil(intTotalPage / intPageCnt);

		//현재 블럭
		intCurBlock = Math.ceil(intCurPage / intPageCnt);

		//시작 페이지
		intStartPage = (intCurBlock - 1) * intPageCnt + 1;

		//이전 블럭 가기
		/*
		if (intCurBlock > 1)
		{
			strPagingLink += "<a href=\"javascript:" + link_func_name + "(" + (intStartPage - 1) + ")\" class=\"direction prev\"><<</a> ";
		}else
		{
			strPagingLink += "<a href=\"#\" class=\"direction prev\"><<</a> ";
		}
		*/

		//이전페이지 가기
		if (intCurPage > 1)
		{
			strPagingLink += "<a href=\"#\" onclick=\"javascript:" + link_func_name + "(" + (parseInt(intCurPage) - 1) + ")\" class=\"direction\"><img src=\"/img/share/prev.gif\" alt=\"이전페이지\"></a>\n";
		}else
		{
			strPagingLink += "<a href=\"#\" onclick=\"javascript:alert('첫 페이지 입니다.');\" class=\"direction\"><img src=\"/img/share/prev.gif\" alt=\"이전페이지\"></a>\n";
		}

		//블럭내 페이지 리스트
		for (var i = intStartPage ; (i < parseInt((intCurBlock * intPageCnt) + 1)) && (i <= intTotalPage) ; i++)
		{
			if (intCurPage == i)
			{
				strPagingLink += "<strong>" + i + "</strong>\n";
			}else
			{
				strPagingLink += "<a href=\"#\" onclick=\"javascript:" + link_func_name + "(" + i + ")\">" + i + "</a>\n";
			}
		}

		//다음페이지 가기
		if (intCurPage < intTotalPage)
		{
			strPagingLink += "<a href=\"#\" onclick=\"javascript:" + link_func_name + "(" + (parseInt(intCurPage) + 1) + ")\" class=\"direction\"><img src=\"/img/share/next.gif\" alt=\"다음페이지\"></a>\n";
		}else
		{
			strPagingLink += "<a href=\"#\" onclick=\"javascript:alert('마지막 페이지 입니다.');\" class=\"direction\"><img src=\"/img/share/next.gif\" alt=\"다음페이지\"></a>\n";
		}

		//다음 블럭 가기
		/*
		if (intCurBlock < intTotalBlock)
		{
			strPagingLink += "<a href=\"javascript:" + link_func_name + "(" + i + ")\" class=\"direction next\">>></a> ";
		}else
		{
			strPagingLink += "<a href=\"#\" class=\"direction next\">>></a> ";
		}
		*/
	}

	return strPagingLink;
}

//nl2br
function nl2br(str){

	 return str.replace(/\n/g, "<br />");

}

//문자열 자르기
function substr(str, maxlength, tail) {
	var rtnStr = "";
	if (str.length > maxlength)
	{
		rtnStr = str.substring(0, maxlength);

		if (tail != "")
		{
			rtnStr += tail;
		}
	}else
	{
		rtnStr = str;
	}

	return rtnStr;
}

function fileUploadPop(formname, fieldname)
{
	var url = "/popup/pop_upload.jsp?formname=" + formname + "&fieldname=" + fieldname;
	window.open(url, "file_upload", "width=670px, height=315px,scrollbars=no");
}

function fileDownload(seq,kind,uploadDir)
{

	if(uploadDir == "document") {
		uploadDir = "doc";
	}

	var url = "/lib/filedownload.jsp?seq=" + seq + "&kind=" + kind + "&uploadDir=" + uploadDir;

	document.location.href = url;
}

function daum_map(x, y, map_id, branchInfo)
{
	//doucment.getElementById(map_id).style = "width:468px;height:294px;";

	$("#" + map_id).attr("style", "width:878px;height:398px;");

	var map = new daum.maps.Map(document.getElementById(map_id), {
		center: new daum.maps.LatLng(x, y),
		level: 3
	});

	var marker = new daum.maps.Marker({
		position: new daum.maps.LatLng(x, y)
	});
	marker.setMap(map);

	var zoomControl = new daum.maps.ZoomControl();
	map.addControl(zoomControl, daum.maps.ControlPosition.LEFT);


}

//지도 프린트
function map_print()
{
	var origin = $("body").html();
	var print_area = $("#print_area").html();

	$("body").html(print_area);
	window.print();
	$("body").html(origin);
}

//팝업 띄우기
function goPopup(url, name, attr)
{
	window.open(url, name, attr);
}

//페이지 이동
function go_link(link_id, rate)
{
	switch (link_id)
	{
		case "loan_cal": //대출 계산기
			goPopup("http://loan.jt-bank.co.kr/loan/loan_calc.do", "", "");
			break;

		case "deposit1_cal": //예금 계산기(거치식)
			goPopup("http://loan.jt-bank.co.kr/loan/loan_calc_d.do", "", "");
			break;
		case "deposit2_cal": //예금 계산기
			goPopup("http://loan.jt-bank.co.kr/loan/loan_calc_i.do", "", "");
			break;

		case "faq1": //자주묻는 질문(전체)
			goPopup("http://loan.jt-bank.co.kr/faq/faqList.do", "", "");
			// document.location.href = "/customer/faq_01.jsp";
			break;

		case "faq2": //자주묻는 질문(대출)
			goPopup("http://loan.jt-bank.co.kr/faq/faqList.do", "", "");
			// document.location.href = "/customer/faq_02.jsp";
			break;

		case "faq3": //자주묻는 질문(다이렉트대출)
			goPopup("http://loan.jt-bank.co.kr/faq/faqList.do", "", "");
			// document.location.href = "/customer/faq_03.jsp";
			break;

		case "faq4": //자주묻는 질문(예금상품)
			goPopup("http://loan.jt-bank.co.kr/faq/faqList.do", "", "");
			// document.location.href = "/customer/faq_04.jsp";
			break;

		case "faq6": //자주묻는 질문(스탁론)
			goPopup("http://loan.jt-bank.co.kr/faq/faqList.do", "", "");
			// document.location.href = "/customer/faq_06.jsp";
			break;

		case "counsel": //상담신청
			// document.location.href = "/customer/counsel_02.jsp";
			goPopup("http://loan.jt-bank.co.kr/qna/custAccept_view.do?hmpBbsCd=003", "", "");
			break;
		case "counsel_stock": //상담신청(스탁론)
			// document.location.href = "/customer/counsel_02.jsp?gubun=7&flow_gubun=SH";
			goPopup("http://loan.jt-bank.co.kr/qna/custAccept_view.do?hmpBbsCd=003", "", "");
			break;
		case "counsel_loan": //상담신청(대출)
			// document.location.href = "/customer/counsel_02.jsp?gubun=1";
			goPopup("http://loan.jt-bank.co.kr/qna/custAccept_view.do?hmpBbsCd=003", "", "");
			break;
		case "counsel_loan_e": //상담신청(대출) 이채우미론
			// document.location.href = "/customer/counsel_02.jsp?gubun=1&flow_gubun=H_E";
			goPopup("http://loan.jt-bank.co.kr/qna/custAccept_view.do?hmpBbsCd=003", "", "");
			break;
		case "counsel_loan_s": //상담신청(대출) 씽씽론
			// document.location.href = "/customer/counsel_02.jsp?gubun=1&flow_gubun=H_S";
			goPopup("http://loan.jt-bank.co.kr/qna/custAccept_view.do?hmpBbsCd=003", "", "");
			break;
		case "counsel_loan_h": //상담신청(대출) 햇살론
			// document.location.href = "/customer/counsel_02.jsp?gubun=1&flow_gubun=H_H";
			goPopup("http://loan.jt-bank.co.kr/qna/custAccept_view.do?hmpBbsCd=003", "", "");
			break;
		case "counsel_loan_c": //상담신청(대출) 채우미론
		case "counsel_loan_j": //상담신청(대출) 점프론
			// document.location.href = "/customer/counsel_02.jsp?gubun=1&flow_gubun=H_J";
			goPopup("http://loan.jt-bank.co.kr/qna/custAccept_view.do?hmpBbsCd=003", "", "");
			break;

		case "counsel_loan_b": //상담신청(대출) u-보금자리론
			// document.location.href = "/customer/counsel_02.jsp?gubun=1&flow_gubun=H_B";
			goPopup("http://loan.jt-bank.co.kr/qna/custAccept_view.do?hmpBbsCd=003", "", "");
			break;

		case "counsel_deposit": //상담신청(예금)
			// document.location.href = "/customer/counsel_02.jsp?gubun=2";
			goPopup("http://loan.jt-bank.co.kr/qna/custAccept_view.do?hmpBbsCd=003", "", "");
			break;

		case "counsel_call": //전화상담
			// document.location.href = "/customer/counsel_01.jsp";
			goPopup("http://loan.jt-bank.co.kr/ivr.do","","");
			break;

		case "loan_apply": //대출신청
			goPopup("http://loan.jt-bank.co.kr/index0.html?gubun=4", "", "");
			break;

		case "loan_limit": //대출한도조회
			goPopup("http://loan.jt-bank.co.kr/index0.html?gubun=11", "", "");
			break;

		case "loan_show": //대출입력정보조회
			goPopup("http://loan.jt-bank.co.kr/index0.html?gubun=1&gubun2=7", "", "");
			break;

		case "loan_ing": //대출진행조회
			goPopup("http://loan.jt-bank.co.kr/index0.html?gubun=1&gubun2=8", "", "");
			break;

		case "loan_possible": //대출가능여부조회
			//goPopup("http://loan.jt-bank.co.kr/index0.html?gubun=11", "", "");

			var check = confirm("본 상품은 e채우미론과 통합되었습니다.  확인을 누르시면 e채우미론 대출신청으로 이동합니다.");

			if (check == true)  {
			window.open("about:blank").location.href="http://loan.jt-bank.co.kr/index0.html?gubun=4";

			}else {
			}

			break;

		case "loan_sun": //대출가능여부조회
			alert("대출가능여부조회 업무만 인터넷으로 가능하며 대출신청시에는 영업점 방문이 필요합니다.");
			window.open("about:blank").location.href="http://sun.jt-bank.co.kr";
			break;

		case "loan_stock": //대출신청 스탁론
			goPopup("http://stock.jt-bank.co.kr/index.jsp​", "", "");
			break;

			// alert("아래에서 거래하고자 하시는 제휴증권사를 먼저 선택하시기 바랍니다.");
			//
			//  var hi = $("#stock_menu").offset().top;
  			//  $('html, body').animate({"scrollTop":hi}, 500);  // 화면을 data-hi 값 만큼 스크롤시킨다.
			//
			// break;

		case "internet_banking": //인터넷 뱅킹
			goPopup("https://jt.ibs.fsb.or.kr", "", "");
			break;

	}
}

//대출금액 입력시 콤마(,) 삽입 및 정렬
function numberCheck(obj)
{
	var len;
	var str = obj.value;
	str = str.replace(/,/g,'');
	var str1 = '';

	len = str.length;

	if(len>3) {
		for(var i=0;len-i-3>0;i+=3) {
			str1 = ','+str.substring(len-3-i,len-i)+str1;
		}
		str1 = str.substring(0,len-i)+str1;
		obj.value = str1;
	}
}

//숫자만 입력하도록 체크 함수
function inputNumberCheck(obj)
{
	var DataVal = "";
	var rtnVal  = "";

	DataVal = (typeof obj == "object") ? obj.value : obj;

	for ( var i = 0 ; i < DataVal.length ; i++ )
	{
		var str = DataVal.charAt(i);
		if ( (str >= '0' && str <= '9') || (str == ','))
			rtnVal += str;
		else
			alert("숫자만입력하세요");
	}

	if(typeof obj != "object") return rtnVal;
	obj.value = rtnVal;
	return;
}

//한글만 입력가능체크
function inputKorCheck(obj)
{
	var regexp = /[a-z0-9]|[\[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"\\]/g;

	var v = obj.value;

	if (regexp.test(v))
	{
		alert("한글만 입력가능합니다.");
		obj.value = v.replace(regexp,"");
	}
}

function trim(str)
{
	if (str != "")
	{
		return str.replace(/^\s+|\s+$/g, "");
	}else
	{
		return str;
	}
}

var special_char = new Array("'", "%", "!", "--", "#", "`", ";", "<", ">");

function checkSpecialChar(str)
{
	for (var i = 0 ; i < special_char.length ; i++)
	{
		if (str.indexOf(special_char[i]) > -1)
		{
			return true;
		}
	}

	return false;
}

function getRadioChecked(objName)
{
	var val = $("input:radio[name='" + objName + "']:checked").val();

	if (val == undefined)
	{
		val = "";
	}

	return val;
}

function getRadioCheckedLabel(objName)
{
	var val = $("input:radio[name='" + objName + "']:checked").val();

	if (val == undefined)
	{
		val = "";
	}else
	{
		val = $("input:radio[name='" + objName + "']:checked").siblings("label").text();
	}

	return val;
}

function getCheckboxName(objName, defVal)
{
	var val = $("input:checkbox[name='" + objName + "']:checked").val();

	if (val == undefined)
	{
		if (defVal != "")
		{
			val = defVal;
		}else
		{
			val = "";
		}
	}

	return val;
}

function getCheckboxChecked(objName)
{
	var val = $("input:checkbox[name='" + objName + "']:checked").val();

	if (val == undefined)
	{
		if (defVal != "")
		{
			val = defVal;
		}else
		{
			val = "";
		}
	}

	return val;
}

function getCheckboxCheckedNameLabel(objName)
{
	if ($("input:checkbox[name='" + objName + "']:checked") == true)
	{
		val = $("input:checkbox[name='" + objName + "']:checked").siblings("label").text();
	}else
	{
		val = "";
	}

	return val;
}

function getCheckboxCheckedIDLable(id)
{
	if ($("#" + id).prop("checked") == true)
	{
		val = $("#" + id).siblings("label").text();
	}else
	{
		val = "";
	}

	return val;
}

function getCheckboxID(id, defVal)
{
	var val = $("input:checkbox[id='" + id + "']:checked").val();

	if (val == undefined)
	{
		if (defVal != "")
		{
			val = defVal;
		}else
		{
			val = "";
		}
	}

	return val;
}

function changeViewBtn(obj)
{
	//alert(obj);
	//alert($(obj).removeClass("btn_white_small"));
	//$(obj).removeClass("btn_white_small");
	$(obj).prop("class", "btn_white_small_on");
}

function showLoding()
{
	var maskHeight = $(document).height();
	var maskWidth = $(document).width();

	$("body").append("<div id='loding_mask'></div>");
	$("body").append("<div id='loding_img'><img src='/img/etc/loading.gif'></div>");

	$("#loding_mask").css({
		'position':'absolute',
		'left':0,
		'top':0,
		'z-index':9000,
		'background-color':'#000',
		'opacity': '0.4',
		'width':maskWidth,
		'height':maskHeight}
	).fadeIn(100);

	var imgWidth = $("#loding_img img").width();
	var imgHeight = $("#loding_img img").height();

	var imgLeft = ($(window).innerWidth() - imgWidth) / 2 ;
	var imgTop = $(document).scrollTop() + ($(window).innerHeight() - imgHeight) / 2 ;


	$("#loding_img").css({
		'position':'absolute',
		'left':imgLeft,
		'top':imgTop,
		'z-index':9001,
		'width':imgWidth,
		'height':imgHeight}
	).fadeIn(100);

}

function scrollMoveforId(id, speed)
{
	var position = $("#" + id).offset();
	$('html,body').animate({scrollTop : position.top}, speed);
}

function scrollMoveforClass(className, speed)
{
	var position = $("." + className).offset();
	$('html,body').animate({scrollTop : position.top}, speed);
}

function convertNumKor(num)
{
	var hanA = new Array("","일","이","삼","사","오","육","칠","팔","구","십");
    var danA = new Array("","십","백","천","","십","백","천","","십","백","천","","십","백","천");
    var result = "";
	for(i=0; i<num.length; i++) {
		str = "";
		han = hanA[num.charAt(num.length-(i+1))];
		if(han != "")
			str += han+danA[i];
		if(i == 4) str += "만";
		if(i == 8) str += "억";
		if(i == 12) str += "조";

		result = str + result;
	}

	if (result.indexOf("억") > -1 && result.indexOf("만") - result.indexOf("억") == 1)
	{
		result = result.replace('만', '');
	}

	return result;
}

function isPasswordValid(str) {

	//var chk_id     = (str.indexOf((document.f.MBRS_ID.value == "" ? " " : document.f.MBRS_ID.value))) > -1 ? 1 : 0;
	//var chk_phone1 = (str.indexOf((document.f.MBRS_HP_TEL3.value == "" ? " " : document.f.MBRS_HP_TEL3.value))) > -1 ? 1 : 0;

  	var chk_number = (str.search(/[0-9]/g)) > -1 ? 1 : 0;
  	var chk_engLow = (str.search(/[a-z]/g)) > -1 ? 1 : 0;
  	var chk_engUpp = (str.search(/[A-Z]/g)) > -1 ? 1 : 0;
  	//var chk_specia = (str.search(/[`~!@#$%^&*|\\\'\";:\/?]/gi)) > -1 ? 1 : 0;
  	var chk_specia = (str.search(/[!@#$%^&*\(\)_\-+\=,.\/?<>~`{}\[\]|\"\']/gi)) > -1 ? 1 : 0;
  	var chk_length = (str.length);

  	if (chk_length < 8 || chk_length > 15) {
		alert("비밀번호는 8 ~ 15 자리로 지정해주세요.");
		return false;
	}
	if ((chk_number + chk_engLow + chk_specia) < 3) {
		alert("비밀번호는 영문, 숫자, 특수문자의 조합이여야 합니다.");
		return false;
	}

	/*
	if ((chk_id + chk_phone1) > 0) {
		alert("비밀번호에 ID, 전화번호를 포함하실 수 없습니다.");
		return false;
	}
	*/

	return true;
}

//Only Number (숫자만 입력 가능한 필드 class="only-Number")
function onlyNumber() {
	var fields = $('.only-Number');
	fields.each(function() {
		$(this).keyup(function(e) {
			var regPattern = /[^(0-9)]/g;
			//var val = $(this).val().replace(/,/gi,"");
			var val = $(this).val();
			if (regPattern.test(val))
			{
				alert('숫자만 입력 가능합니다.');
				$(this).val($(this).val().replace(regPattern, ""));
			}
		});
	});
}
//Only NumberEngLow (소문자와 숫자만 입력 가능한 필드 class="only-NumberEngLow")
function onlyNumberEngLow() {
	var fields = $('.only-NumberEngLow');
	fields.each(function() {
		$(this).keyup(function(e) {
			var regPattern = /[^(a-z)(0-9)-_.]/g;
			//var val = $(this).val().replace(/,/gi,"");
			var val = $(this).val();
			//if (val != "" && !regNum.test(val)) {
			if (regPattern.test(val))
			{
				alert('영문소문자와 숫자만 입력 가능합니다.');
				//$(this).val($(this).val().slice(0, -1));
				$(this).val($(this).val().toLowerCase());
				$(this).val($(this).val().replace(regPattern, ""));
			}
		});
	});
}

//Only NumberEngLow (소문자와 숫자만 입력 가능한 필드 class="only-NumberEngLow2")
function onlyNumberEngLow2() {
	var fields = $('.only-NumberEngLow2');
	fields.each(function() {
		$(this).keyup(function(e) {
			var regPattern = /[^(a-z)(0-9)-_.]/g;
			//var val = $(this).val().replace(/,/gi,"");
			var val = $(this).val();
			//if (val != "" && !regNum.test(val)) {
			if (regPattern.test(val))
			{
				alert('영문소문자와 숫자만 입력 가능합니다.');
				//$(this).val($(this).val().slice(0, -1));
				$(this).val($(this).val().toLowerCase());
				$(this).val($(this).val().replace(regPattern, ""));
			}
		});
	});
}

function neoClick(p1, p2, p3, p4, p5)
{
	callbackFlashAction(p1, p2, p3, p4, p5);
	return true;
}
