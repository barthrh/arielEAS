// Set up the tiles and content
$( document ).ready(function() {

    // Defines and executes the updateLogo function
    $.getScript("https://ariel-demo.herokuapp.com/empower-demo/sub-logoupdate.js")
        .done(function() {
            console.log('sub-logoupdate loaded');
            updateLogo();

            // The default setup is a hidden default logo to avoid flash / flicker.
            $('#portalLogo').show();
    });

    $('#contentgroup-retirement').hide();
    $('#contentgroup-disability').hide();

    $('#contentgroup-forms').hide();
    $('#contentgroup-planinfo').hide();

    $('#contentgroup-report-participants').hide();
    $('#contentgroup-report-employment').hide();
    $('#contentgroup-report-participation').hide();
    $('#contentgroup-report-calculations').hide();
    $('#contentgroup-report-payments').hide();

});

// This disables the Webflow form submit.
$('#form-search').submit(function() {
    return false;
  });

$('#accordian-retirement').on('click', function(){
    $('#contentgroup-retirement').animate({height: 'toggle'}, 500);
});

$('#accordian-disability').on('click', function(){
    $('#contentgroup-disability').animate({height: 'toggle'}, 500);
});

$('#accordian-report-participants').on('click', function(){
    $('#contentgroup-report-participants').animate({height: 'toggle'}, 500);
});

$('#accordian-report-employment').on('click', function(){
    $('#contentgroup-report-employment').animate({height: 'toggle'}, 500);
});

$('#accordian-report-participation').on('click', function(){
    $('#contentgroup-report-participation').animate({height: 'toggle'}, 500);
});

$('#accordian-report-calculations').on('click', function(){
    $('#contentgroup-report-calculations').animate({height: 'toggle'}, 500);
});

$('#accordian-report-payments').on('click', function(){
    $('#contentgroup-report-payments').animate({height: 'toggle'}, 500);
});

$('#accordian-forms').on('click', function(){
    $('#contentgroup-forms').animate({height: 'toggle'}, 500);
});

$('#accordian-planinfo').on('click', function(){
    $('#contentgroup-planinfo').animate({height: 'toggle'}, 500);
});

$('#ps-searchbox-button').on('click',function(){
    $('#ps-modal-ppsearch').animate({opacity: '0'}, 0);
    $('#ps-modal-ppsearch').show();
    $('#ps-modal-ppsearch').animate({opacity: '1.0'}, 300);
});

$('#ps-modal-ppsearch-close').on('click',function(){
    $('#ps-modal-ppsearch').hide();
});
