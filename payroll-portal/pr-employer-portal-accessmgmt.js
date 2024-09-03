$( document ).ready(function() {
    
    $('#panel-koehler').hide();
    $('#panel-dallain').hide();
    $('#panel-bartholomew').hide();

    console.log( "ready!" );
});

$('#userrow-bartholomew').on('click',function(){
    $('#panel-koehler').hide();
    $('#panel-dallain').hide();
    $('#panel-bartholomew').show();
});

$('#userrow-dallain').on('click',function(){
    $('#panel-koehler').hide();
    $('#panel-dallain').show();
    $('#panel-bartholomew').hide();
});

$('#userrow-koehler').on('click',function(){
    $('#panel-koehler').show();
    $('#panel-dallain').hide();
    $('#panel-bartholomew').hide();
});
