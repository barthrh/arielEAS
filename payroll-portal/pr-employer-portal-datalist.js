$( document ).ready(function() {
    // $('#panel-olive').animate({height: 'show'}, 500);
    $('#panel-file1').hide();
    $('#panel-file2').hide();

    console.log( "ready!" );
});

$('#datarow-file1').on('click', function(){
    $('#panel-file2').hide();
    $('#panel-file1').show();
 });

 $('#datarow-file2').on('click', function(){
    $('#panel-file2').show();
    $('#panel-file1').hide();
 });

