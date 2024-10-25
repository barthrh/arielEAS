$( document ).ready(function() {
    $('#accordian-report-content').animate({height: 'hide'}, 500);

    console.log( "ready!" );
});

// Disable the enter key on forms
$('#form-find').submit(function() {
    return false;
});


$('#accordian-report-reveal').on('click', function(){
    $('#accordian-report-content').animate({height: 'toggle'}, 500);
 });
 
 