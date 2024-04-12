// Set up the tiles and content
$( document ).ready(function() {
    $('#contentgroup-retirement').hide();
    $('#contentgroup-disability').hide();
});


$('#accordian-retirement').on('click', function(){
    $('#contentgroup-retirement').animate({height: 'toggle'}, 500);
 });

 $('#accordian-disability').on('click', function(){
    $('#contentgroup-disability').animate({height: 'toggle'}, 500);
 });

