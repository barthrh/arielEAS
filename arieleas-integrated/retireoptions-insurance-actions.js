// Start by setting the size and visibility of objects.

var insuranceStatus = localStorage.getItem('insuranceStatus');
if (insuranceStatus == null){
    localStorage.setItem('insuranceStatus','notstarted');
    insuranceStatus = 'notstarted';
}

if (insuranceStatus == 'notstarted') {
    $('#frame-insurance-done').animate({height: 'hide'}, 0);
    $('#frame-insurance-notstarted').animate({height: 'show'}, 0);
} else {
    $('#frame-insurance-done').animate({height: 'show'}, 0);
    $('#frame-insurance-notstarted').animate({height: 'hide'}, 0);
}

$('#button-insurance-enroll').on('click', function() {
    // takind the easy path of just calling insurance done when you go to it.
    localStorage.setItem('insuranceStatus','done');
    window.open("https://rivendell-demo-ee.morneaushepell.com/Tools/AccessTool/EnrollmentResponsiveTool");
})
