// All of the necessary setup and scripting for the Buyback estimator

// Default section visibility
$('#content-pensiondetails').animate({height: 'hide'},0);
$('#content-buybackdetails').animate({height: 'hide'},0);

// Set the default age
$('#input-retire-age').val('61');


$('#accordian-pensiondetails').on('click', function() {
    var accordHeight = $('#content-pensiondetails').height();   
    $('#content-pensiondetails').animate({height: 'toggle'}, 500);
})

$('#accordian-buybackdetails').on('click', function() {
    var accordHeight = $('#content-buybackdetails').height();   
    $('#content-pensiondetails').animate({height: 'toggle'}, 500);
})