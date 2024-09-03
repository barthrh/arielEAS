$( document ).ready(function() {

    $('#report-addlinfo').show();
    $('#panel-report001').hide();
    $('#panel-report004').hide();

    console.log( "ready!" );
});

$('#reportrow-001').on('click', function(){
    $('#report-addlinfo').hide();
    $('#panel-report001').show();
    $('#panel-report004').hide();
});

$('#reportrow-001v2').on('click', function(){
    $('#report-addlinfo').hide();
    $('#panel-report001').show();
    $('#panel-report004').hide();
});

$('#reportrow-004').on('click', function(){
    $('#report-addlinfo').hide();
    $('#panel-report001').hide();
    $('#panel-report004').show();
});
