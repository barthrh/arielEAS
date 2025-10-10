$( document ).ready(function() {

    // Defines and executes the updateLogo function
    $.getScript("https://ariel-demo.herokuapp.com/empower-demo/sub-logoupdate.js")
        .done(function() {
            console.log('sub-logoupdate loaded');
            updateLogo();

            // The default setup is a hidden default logo to avoid flash / flicker.
            $('#portalLogo').show();
    });

    $('#tabcontent-statements').hide();

});

$('#tab-statements').on('click', function(){
    $('#tabcontent-statements').show();
    $('#tabcontent-workitems').hide();
    $('#tab-statements').removeClass('inactive');
    $('#tab-statements').addClass('active');
    $('#tab-workitems').removeClass('active');
    $('#tab-workitems').addClass('inactive');
});

$('#tab-workitems').on('click', function(){
    $('#tabcontent-statements').hide();
    $('#tabcontent-workitems').show();
    $('#tab-workitems').removeClass('inactive');
    $('#tab-workitems').addClass('active');
    $('#tab-statements').removeClass('active');
    $('#tab-statements').addClass('inactive');
});
