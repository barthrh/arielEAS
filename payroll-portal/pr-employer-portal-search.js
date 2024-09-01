$( document ).ready(function() {
    // $('#panel-olive').animate({height: 'show'}, 500);
    $('#panel-olive').hide();
    $('#panel-chelsea').hide();
    $('#panel-romeo').hide();

    console.log( "ready!" );
});

$('#searchrow-chelsea').on('click', function(){
    $('#panel-olive').hide();
    $('#panel-chelsea').show();
    $('#panel-romeo').hide();
 });

 $('#searchrow-olive').on('click', function(){
    $('#panel-olive').show();
    $('#panel-chelsea').hide();
    $('#panel-romeo').hide();
 });

 $('#searchrow-romeo').on('click', function(){
    $('#panel-olive').hide();
    $('#panel-chelsea').hide();
    $('#panel-romeo').show();
 });