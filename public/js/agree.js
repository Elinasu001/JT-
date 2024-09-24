$(document).ready(function(){


/* 약관 */
	$('.required_check ol input').change(function() { // 필수 체크박스 리스트 / .required_check ol 안의 input 비교 후 ul의 input 변경
		if ( $(this).parents('.required_check').find('ol input').length == $(this).parents('.required_check').find('ol input:checked').length ) {
			$(this).parents('.required_check').find('ul li:nth-of-type(2) input').prop('checked', true);
			all_check();
		} else {
			$(this).parents('.required_check').find('ul li:nth-of-type(1) input').prop('checked', true);
			all_check();
		}
	});

	$('.choice_check ol input').change(function() { // 선택 체크박스 리스트 / .choice_check ol 안의 input 비교 후 ul의 input 변경
		if ( $(this).parents('.choice_check').find('ol input:checked').length < 1 ) {
			if ( $(this).parents('.choice_check').find('p input:checked').length >= 1 ) {
				$(this).parents('.choice_check').find('ul li:nth-of-type(2) inp ut').prop('checked', true);
			} else {
				$(this).parents('.choice_check').find('ul li:nth-of-type(1) input').prop('checked', true);
			}
		} else {
			$(this).parents('.choice_check').find('ul li:nth-of-type(2) input').prop('checked', true);
		}
	});

	$('.choice_check p input').change(function() { // 선택 체크박스 / .choice_check p 안의 input 비교 후 ul의 input 변경
		if ( $(this).parents('.choice_check').find('p input:checked').length < 1 ) {
			if ( $(this).parents('.choice_check').find('ol input:checked').length >= 1 ) {
				$(this).parents('.choice_check').find('ul li:nth-of-type(2) input').prop('checked', true);
			} else {
				$(this).parents('.choice_check').find('ul li:nth-of-type(1) input').prop('checked', true);
			}
		} else {
			$(this).parents('.choice_check').find('ul li:nth-of-type(2) input').prop('checked', true);
		}
	});

	$('fieldset ul li:nth-of-type(2) input').change(function() { // 예 라디오 / ul 의 두번째 input 변경 시 ol input, p input true
		$(this).parents('fieldset').find('ol li input').prop('checked', true);
		$(this).parents('fieldset').find('p input').prop('checked', true);
		all_check();
	});

	$('fieldset ul li:nth-of-type(1) input').change(function() { // 아니오 라디오 / ul 의 첫번째 input 변경 시 ol input, p input true
		$(this).parents('fieldset').find('ol li input').prop('checked', false);
		$(this).parents('fieldset').find('p input').prop('checked', false);
		all_check();
	});

	$('#all-check').change(function() { // 전체동의 / #all-check 변경 시 ol, p, ul input 제어
		if ( $(this).is(":checked") ) {
			$(this).parents('dl').find('ol li input').prop('checked', true);
			$(this).parents('dl').find('p input').prop('checked', true);
			$(this).parents('dl').find('ul li:nth-of-type(2) input').prop('checked', true);
		}else{
			$(this).parents('dl').find('ol li input').prop('checked', false);
			$(this).parents('dl').find('p input').prop('checked', false);
			$(this).parents('dl').find('ul li:nth-of-type(1) input').prop('checked', true);
		}
	});

	$('.choseck-s input').change(function() {	
		if ( $(this).parents('p').find('input:checked').length > 0 ) {
			$('.choseck-p input').prop('checked', true);
		}else{
			if ( $(this).parents('.choice_check').find('ol input:checked').length > 1 ) {
				$('.choseck-p input').prop('checked', false);
			}else{
				$('.choseck-p input').prop('checked', false);
				$(this).parents('dl').find('ul li:nth-of-type(1) input').prop('checked', true);
			};
		}
	});

	$('.choseck-p input').change(function() {	
		if ( $(this).parents('ol').find('input:checked').length > 0 ) {
			if ( $(this).is(":checked") ) {
				$('.choseck-s input').prop('checked', true);
			}else{
				$('.choseck-s input').prop('checked', false);
			};
		}else{
			$('.choseck-s input').prop('checked', false);
			$(this).parents('dl').find('ul li:nth-of-type(1) input').prop('checked', true);
		}
	});

});

function all_check() { // 문서 내의 ul input 과 ul input:checked 같을 경우 전체 동의 제어 
	
	var check_radio = $('.required_check ul li:nth-of-type(2) input').length;
	var check_radio_y = $('.required_check ul li:nth-of-type(2) input:checked').length;

	if ( check_radio == check_radio_y ) {
		$('#all-check').prop('checked', true);
	}else{
		$('#all-check').prop('checked', false);
	}
}

function agreefocus() { // 문서 내의 ul 첫번째 li input(아니오) 의 부모 엘리먼트 중 첫번째 부모 엘리먼트에 아이디 추가 후 앵커 이동
	$('dd').removeAttr('id');
	$('.required_check ul li:nth-of-type(1) input:checked').parents('dd:eq(0)').attr('id','scrollTop');
	location.href='#scrollTop';
}