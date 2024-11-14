// Actions for the various buttons and links.

$( document ).ready(function() {
    
    $('#menuitem-archive').removeClass('active');
    $('#menuselect-inbox').show();
    
    console.log( "ready!" );
});

$('#menurow-inbox').on('click', function(){
    $('#menuitem-inbox').addClass('active');
    $('#menuselect-inbox').show();
    $('#menuitem-archive').removeClass('active');
    $('#menuselect-archive').hide();
})

$('#menurow-archive').on('click', function(){
    $('#menuitem-inbox').removeClass('active');
    $('#menuselect-inbox').hide();
    $('#menuitem-archive').addClass('active');
    $('#menuselect-archive').show();
})