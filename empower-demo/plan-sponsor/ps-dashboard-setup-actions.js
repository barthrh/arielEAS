// Set up the tiles and content
$( document ).ready(function() {
    $('#contentgroup-retirement').hide();
    $('#contentgroup-disability').hide();

    $('#contentgroup-report-participants').hide();
    $('#contentgroup-report-employment').hide();
    $('#contentgroup-report-participation').hide();
    $('#contentgroup-report-calculations').hide();
    $('#contentgroup-report-payments').hide();

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

$('#ps-searchbox-button').on('click',function(){
    $('#ps-modal-ppsearch').show();
});

$('#ps-modal-ppsearch-close').on('click',function(){
    $('#ps-modal-ppsearch').hide();
});
