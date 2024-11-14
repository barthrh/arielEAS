// Actions for the various buttons and links.

$( document ).ready(function() {
    
    $('#menurow-archive').hide();
    $('#menuselect-archive').hide();
    $('#menuselect-inbox').show();
    
    console.log( "ready!" );
});

$('#menurow-inbox').on('click', function(){
    $('#menurow-inbox').addClass('active');
    $('#menuselect-inbox').show();
    $('#menurow-archive').removeClass('active');
    $('#menuselect-archive').hide();

})

$('#menurow-archive').on('click', function(){
    $('#menurow-inbox').removeClass('active');
    $('#menuselect-inbox').hide();
    $('#menurow-archive').addClass('active');
    $('#menuselect-archive').show();

})