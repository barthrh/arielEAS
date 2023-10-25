// Start by setting the size and visibility of objects.

var insuranceStatus = localStorage.getItem('retire-insurance-status');
if (insuranceStatus == null){
    localStorage.setItem('retire-insurance-status','notstarted');
    insuranceStatus = 'notstarted';
}

if (insuranceStatus == 'notstarted') {
    $('#frame-insurance-notstarted').animate({height: 'show'}, 0);
    $('#frame-insurance-done').animate({height: 'hide'}, 0);
    $('#frame-insurance-details').animate({height: 'hide'}, 0);
    $('#content-insurance-details').animate({height: 'hide'},0);
} else {
    $('#frame-insurance-notstarted').animate({height: 'hide'}, 0);
    $('#frame-insurance-done').animate({height: 'show'}, 0);
    $('#frame-insurance-details').animate({height: 'show'}, 0);
    $('#content-insurance-details').animate({height: 'show'},0);
}

$('#content-insurancedetails').animate({height: 'hide'}, 500);


$('#button-insurance-enroll').on('click', function() {
    // takind the easy path of just calling insurance done when you go to it.
    localStorage.setItem('retire-insurance-status','done');
    window.open("https://rivendell-demo-ee.morneaushepell.com/Tools/AccessTool/EnrollmentResponsiveTool");
})

$('#accordian-insurancedetails').on('click', function() {
    var accordHeight = $('#content-insurancedetails').height();   
    $('#content-insurancedetails').animate({height: 'toggle'}, 500);
})

$('#insurance-status-complete').on('click',function() {
    // Reset the status to not started... secret button
    console.log('Resetting Insurance...');
    localStorage.setItem('retire-insurance-status','notstarted');
})