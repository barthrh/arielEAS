$( document ).ready(function() {
    $('#accordian-report-content').animate({height: 'hide'}, 500);

    console.log( "ready!" );
});

$('#accordian-report-reveal').on('click', function(){
    $('#accordian-report-content').animate({height: 'toggle'}, 500);
 });
 
 