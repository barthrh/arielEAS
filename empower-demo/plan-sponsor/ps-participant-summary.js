$( document ).ready(function() {

    $('#tabcontent-statements').hide();

});

$('#tab-statements').on('click', function(){
    $('#tabcontent-statements').show();
    $('#tabcontent-workitems').hide();
    $('#tab-statements').removeClass('inactive');
    $('#tab-statements').addClass('active');
});

$('#tab-workitems').on('click', function(){
    $('#tabcontent-statements').hide();
    $('#tabcontent-workitems').show();
    $('#tab-workitems').removeClass('active');
    $('#tab-workitems').addClass('inactive');
});
