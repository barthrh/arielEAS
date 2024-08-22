$( document ).ready(function() {

    $('#tabcontent-statements').hide();

});

$('#tab-statements').on('click', function(){
    $('#tabcontent-statements').show();
    $('#tabcontent-workitems').hide();
});

$('#tab-workitems').on('click', function(){
    $('#tabcontent-statements').hide();
    $('#tabcontent-workitems').show();
});
