/**
 * FIN0100.js 대출계산기 결과
 */
$(document).ready(function(){
	//계산하기
	$('#btn1').click(function(){
		
		if(!getRadioBoxCheckByName('rdio01')){
			alert('상환방법을 선택해주세요.');
			return;
		}
		if(!valueCheckById('ipt02-01')){
			alert('대출금을 입력해주세요.');
			return;
		}
		if(!valueCheckById('ipt03-01')){
			alert('이자율을 입력해주세요.');
			return;
		}
		if(!valueCheckById('ipt04-01')){
			alert('대출기간을 입력해주세요.');
			return;
		}
		if(!valueCheckById('ipt05-01')){
			alert('대출일을 입력해주세요.');
			return;
		}
		if (!/[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test($("#ipt05-01").val())) {
			messageView('날짜는 YYYY-MM-DD 형식으로 입력해주세요.');
			$('#ipt05-01').focus();
			return false;
		}
		if(!valueCheckById('ipt06-01')){
			alert('약정일을 입력해주세요.');
			return;
		}
		
		var repayType=getRadioBoxValueByName('rdio01');//상환방법
		var loanAmt=getValueById('ipt02-01');//대출금
		var loanRt=getValueById('ipt03-01');//이자율
		var loanPeriod=getValueById('ipt04-01');//대출기간
		var loanDate=getValueById('ipt05-01');//대출일
		var proDay=getSelectBoxValueById('ipt06-01');//약정일
		var modiDayStr = '8';//보정일수
		var calcForm = makeForm("calcForm");
		addFormData(calcForm	,'txGbnCd'	,'CALC'); //인증번호응답
		addFormData(calcForm	,'repayType'	,repayType);
		addFormData(calcForm	,'loanAmt'	,uncomma(loanAmt));
		addFormData(calcForm	,'loanRt'	,loanRt);
		addFormData(calcForm	,'loanPeriod'	,loanPeriod);
		addFormData(calcForm	,'loanDate'	,loanDate);
		addFormData(calcForm	,'proDay'	,proDay);
		addFormData(calcForm	,'modiDayStr'	,modiDayStr);
		 //상환방법
		doAction('FIN0100SC',calcForm,function(resDs){
			if(resDs.APP_HEADER.respCd=='N00000'){
				var htmlStr='';
				for(i in resDs.calcList){
					var calc = resDs.calcList[i];
					htmlStr+='<tr>';
					htmlStr+='<td>'+calc.A+'</td>';//회차
					htmlStr+='<td>'+calc.B+'</td>';//상환일자
					htmlStr+='<td>'+calc.H+'</td>';//일수
					htmlStr+='<td>'+calc.D+'</td>';//상환원금
					htmlStr+='<td>'+calc.E+'</td>';//이자
					htmlStr+='<td>'+calc.C+'</td>';//납입합계
					htmlStr+='<td>'+calc.F+'</td>';//납입원금
					htmlStr+='<td>'+calc.G+'</td>';//대출잔액
					htmlStr+='</tr>';
				}
				var sumCalc = resDs.summary
				htmlStr+='<tr class="tbBgC">';
				htmlStr+='<td>'+sumCalc.B+'</td>';//상환일자
				htmlStr+='<td> </td>';
				htmlStr+='<td>'+sumCalc.H+'</td>';//일수
				htmlStr+='<td>'+sumCalc.D+'</td>';//상환원금
				htmlStr+='<td>'+sumCalc.E+'</td>';//이자
				htmlStr+='<td>'+sumCalc.C+'</td>';//납입합계
				htmlStr+='<td>'+sumCalc.F+'</td>';//납입원금
				htmlStr+='<td>'+sumCalc.G+'</td>';//대출잔액
				htmlStr+='</tr>';
				
				$('#calcList').html(htmlStr);
			}else{
				messageView('['+resDs.APP_HEADER.respCd+']'+resDs.APP_HEADER.respMsg);
			}
		});
	});
	
	//이자율 입력제한
	$('#ipt03-01').keyup(function(){
		var rt=Number($('#ipt03-01').val());
		if(rt>20){
			alert('이자율을 20%을 넘을수 없습니다.');
			$('#ipt03-01').val('');
			return;
		}
	});
	
	
	$('#selYear').change(function(){
		var gubun=$(this).val();
		if(gubun=='02'){
			$('#ComYear').css('display','none');
			$('#LeapYear').css('display','block');
		}else{
			$('#LeapYear').css('display','none');
			$('#ComYear').css('display','block');
		}
	});
	//부사장 폴더 22일자 _
	//대출금 자동 콤마
	$('#ipt02-01').keyup(function(){
		inputNumberFormat('ipt02-01');
	});
	$('#pu-money').keyup(function(){
		inputNumberFormat('pu-money');
	});
	$('#pu-money2').keyup(function(){
		inputNumberFormat('pu-money2');
	});
	
	$('#btn2').click(function(){
		rtCalc();
	});
	$('#btn3').click(function(){
		rtCalc();
	});
	
	function rtCalc(){
		var chk = getSelectBoxValueById('selYear');
		var MAX_LOAN_INRT=20;
		
		var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi
	    if(chk=='01'){
	        var val=$("#pu-money").val();
	        val=val.replace(regExp, "");
	        var val1 = $("#pu-money");
	        var ret=$("#pu-percent").val();
	        var ret1=$("#pu-percent");
	        var dt=$("#pu-date").val();
	        var dt1=$("#pu-date");
	    }else{
	        var val=$("#pu-money2").val();
	        val=val.replace(regExp, "");
	        var val1 = $("#pu-money2");
	        var ret=$("#pu-percent2").val();
	        var ret1=$("#pu-percent2");
	        var dt=$("#pu-date2").val();
	        var dt1=$("#pu-date2");
	    }
	    if(val==""){alert("대출신청금액을 입력해주세요.");val1.focus();return;}
	    if(eval(dt)<=0){alert("이용일수는 0일 이상 입력해 주세요."); return;}
	    if(ret==""){alert("연이율을 입력해 주세요.");ret1.focus(); return;}
	    else{
		    if(eval(ret)<=eval(MAX_LOAN_INRT)){
		        if(chk==1){
		            inter = (eval(val)*1) * ((eval(ret)*0.01) / 365) * $("#pu-date").val();
		        }else{
		            inter = (eval(val)*1) * ((eval(ret)*0.01) / 366) * $("#pu-date2").val();
		        }
		        tot = eval(val)*1 + Math.floor(inter);
		        
		        inter = "<p><b>이자 <span>"+comma(Math.floor(inter))+"</span> 원</b><br/><br/>" 
		        + " 총 상환금액 <span>"+comma(tot)+"</span> 원 (단위: 숫자)</p>";
		        
		        
		        if(dt==""){alert("이용일수를 입력해주세요.");dt1.focus();return;}
		        else{
		        		$("#p-result").css('display','block');
		        	   $("#p-result").html(inter);
//		        	   graphRendor(chk);
		        }
		    }else{
		        alert("연이율을 " + MAX_LOAN_INRT + "%이하로 입력해 주세요.");
		    }
	    }
	}
	

	//상환방법 돋보기 클릭시 도움말노출
	$(".inp-HelpBox button").click(function(){
		var op = $(this);
		var lp = $("#" + $(this).attr("aria-controls"));
		var lpObj = lp.children("dl");
		var lpOuterObjHidden = $("header, section, footer");
		
		
		$(".inp-HelpCont .closeBtn").click(function(){
			lpClose();
		});	

		lp.addClass("on");   
		lpObj.addClass("on"); 
		$("html").css("overflow","hidden");
		lpObj.attr('tabindex','0').focus();
		lpOuterObjHidden.attr("aria-hidden", "true");
		layerFocusControl( $("#" + $(this).attr("aria-controls")) );

		lp.on("click", function(event){
			if (event.target === event.currentTarget) {
				// 반투명 배경 클릭 시 레이어 닫기
				lpClose();
			}
		});
		
		$(document).on("keydown.lp_keydown", function(event) {
			// Esc키 : 레이어 닫기
			var keyType = event.keyCode || event.which;
		  
			if (keyType === 27 && lp.hasClass("on")) {
			  lpClose();
			}
		});

		function lpClose() { // 레이어 닫기 함수
			//도움말 닫기
			lp.removeClass("on");   
			lpObj.removeClass("on"); 
			$("html").css("overflow","auto").css("height","100%");
			lpOuterObjHidden.removeAttr("aria-hidden");
			op.focus();
		}

		
		 function layerFocusControl(target){

			var $firstEl = target.find('a, button, input, textarea, select, [tabindex="0"]').first();
			var $lastEl = target.find('a, button, input, textarea, select, [tabindex="0"]').last();
			$firstEl.on('keydown', function(e){
				if (e.keyCode == 9 && e.shiftKey){
					$lastEl.focus();
					e.preventDefault();
				}
			});
			$lastEl.on('keydown', function(e){
				if (e.keyCode == 9 && !e.shiftKey){
					$firstEl.focus();
					e.preventDefault();
				}
			});
		};

	});			
	
});