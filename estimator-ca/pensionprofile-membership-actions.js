accordian-retirementdates
accordian-service
accordian-contributions
accordian-salaries


$('#accordian-retirementdates').on('click', function(){
    var accordHeight = $('#content-retirementdates').height();   
    $('#content-retirementdates').animate({height: 'toggle'}, 500);
});

$('#accordian-service').on('click', function(){
    var accordHeight = $('#content-retirementdates').height();   
    $('#content-service').animate({height: 'toggle'}, 500);
});

$('#accordian-contributions').on('click', function(){
    var accordHeight = $('#content-retirementdates').height();   
    $('#content-contributions').animate({height: 'toggle'}, 500);
});

$('#accordian-salaries').on('click', function(){
    var accordHeight = $('#content-retirementdates').height();   
    $('#content-salaries').animate({height: 'toggle'}, 500);
});
