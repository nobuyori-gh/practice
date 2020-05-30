// $(document).ready(function(){
// 	$('body').html('<h1>Hello jQuery!!</h1>');
// });

// $(function(){
// 	$('.box1').css({
// 		'background-color':'#0000ff',
// 		'height':'100px'
// 	});
// });

// $(function(){
// 	$('.box1').slideDown(function(){
// 		$('.box1').css({
// 		'background-color':'#0000ff',
// 		'width': '200px',
// 		'height':'100px'
// 	}).slideUp();
// 	});
	// $('.box1').show();
	// $('.box1').hide();
// });

$(function(){
	$('button').on('click',function(){
		$('ul').children().css('color','red');
	});
	// $('.bg2').on('click',function(){
	// 	$('.bg2').slideUp();
	// });
	// $('.bg3').on('click',function(){
	// 	$('.bg3').slideUp();
	// });
	// $('.bg4').on('click',function(){
	// 	$('.bg4').slideUp();
	// });
});