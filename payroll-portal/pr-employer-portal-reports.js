$( document ).ready(function() {

    $('#report-addlinfo').show();
    $('#panel-report001').hide();
    $('#panel-report004').hide();
    $('#panel-report-submitted').hide();

    // On the OUTPUT page, set the in progress date to current
    var reportRuntime = localStorage.getItem('reportRuntime');
    const date = new Date(); // Sets to current

    if ( localStorage.getItem('reportRuntime') != null ) {
        $('#report-date').text(reportRuntime);
    } else {
        $('#report-date').text(formatDate(date));
    }

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
    let currentDate = new Date();
    localStorage.setItem('reportRuntime', formatDate(currentDate));
    console.log('dt:' + formatDate(currentDate));
    console.log('ls:' + localStorage.getItem('reportRuntime'));
});

$('#button-runreport-004').on('click', function(){
    let currentDate = new Date();
    localStorage.setItem('reportRuntime', formatDate(currentDate));
    runReport();
});


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

// This is only for the OUTPUTS page sets the date to recent
function formatDate(date) {
    const padZero = (num) => String(num).padStart(2, '0');
    
    const month = padZero(date.getMonth() + 1);
    const day = padZero(date.getDate());
    const year = date.getFullYear();
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    
    return `${month}-${day}-${year} ${hours}:${minutes}`;
};
      
