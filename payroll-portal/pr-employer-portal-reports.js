$( document ).ready(function() {

    $('#report-addlinfo').show();
    $('#panel-report001').hide();
    $('#panel-report004').hide();
    $('#panel-report-submitted').hide();

    console.log( "ready!" );
});

$('#reportrow-001').on('click', function(){
    $('#report-addlinfo').hide();
    $('#panel-report001').show();
    $('#panel-report004').hide();
    $('#panel-report-submitted').hide();
});

$('#reportrow-001v2').on('click', function(){
    $('#report-addlinfo').hide();
    $('#panel-report001').show();
    $('#panel-report004').hide();
    $('#panel-report-submitted').hide();
});

$('#reportrow-004').on('click', function(){
    $('#report-addlinfo').hide();
    $('#panel-report001').hide();
    $('#panel-report004').show();
    $('#panel-report-submitted').hide();
});

$('#button-runreport-001').on('click', function(){
    runReport();
})

$('#button-runreport-004').on('click', function(){
    runReport();
})


// Suppress enter on forms
$('#form-report1').submit(function() {
    return false;
});

$('#form-report2').submit(function() {
return false;
});


function runReport() {
    $('#report-addlinfo').hide();
    $('#panel-report001').hide();
    $('#panel-report004').hide();
    $('#panel-report-submitted').show();

};