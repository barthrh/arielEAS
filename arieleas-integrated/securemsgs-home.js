// Actions for the various buttons and links.

$( document ).ready(function() {
    
    $('#msgcontent-1').hide();
    $('#msgcontent-2').hide();

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

$('#inbox-row-1').on('click', function(){
    $('#msgcontent-1').show();
    $('#msgcontent-2').hide();
})

$('#inbox-row-2').on('click', function(){
    $('#msgcontent-1').hide();
    $('#msgcontent-2').show();
})

$('#nav-link-back').on('click', function(){
    history.back(-1);
})

$('#form-createmessage').submit(function() {
    return false;
})