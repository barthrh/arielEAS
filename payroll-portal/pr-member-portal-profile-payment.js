$( document ).ready(function() {

    $('#payrow-content-2024').show();
    $('#payrow-content-2023').hide();
    $('#payrow-content-2022').hide();
    $('#payrow-content-2021').hide();

    console.log( "ready!" );
});

/*
function rotateImage(degree) {
	$('#payrow-icon-2024').animate({  transform: degree }, {
    step: function(now,fx) {
        $(this).css({
            '-webkit-transform':'rotate(90deg)', 
            '-moz-transform':'rotate(90deg)',
            'transform':'rotate(90deg)'
        });
    }
    });
};
*/

$('#accordian-pay2024').on('click',function(){
    $('#payrow-content-2024').animate({height: 'toggle'}, 500);
//    rotateImage(90).Call($('#payrow-icon-2024'));
 });

 $('#accordian-pay2023').on('click',function(){
    $('#payrow-content-2023').animate({height: 'toggle'}, 500);
 });

 $('#accordian-pay2022').on('click',function(){
    $('#payrow-content-2022').animate({height: 'toggle'}, 500);
 });

 $('#accordian-pay2021').on('click',function(){
    $('#payrow-content-2021').animate({height: 'toggle'}, 500);
 });

