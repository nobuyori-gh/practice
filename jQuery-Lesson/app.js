// $(document).ready(function(){
// 	$('body').html('<h1>Hello jQuery!!</h1>');
// });

// $(function(){
// 	$('.box1').css({
// 		'background-color':'#0000ff',
// 		'height':'100px'
// 	});
// });

$(function(){
	$('.box1').slideDown(function(){
		$('.box1').css({
		'background-color':'#0000ff',
		'width': '200px',
		'height':'100px'
	}).slideUp();
	});
	// $('.box1').show();
	// $('.box1').hide();
});