// Control the four accordian sections

$('#accordian-retirementdates').on('click', function(){
    var accordHeight = $('#content-retirementdates').height();   
    $('#content-retirementdates').animate({height: 'toggle'}, 500);
});

$('#accordian-benefits').on('click', function(){
    var accordHeight = $('#content-retirementdates').height();   
    $('#content-benefits').animate({height: 'toggle'}, 500);
});

$('#accordian-contributions').on('click', function(){
    var accordHeight = $('#content-retirementdates').height();   
    $('#content-contributions').animate({height: 'toggle'}, 500);
});

$('#accordian-salaries').on('click', function(){
    var accordHeight = $('#content-retirementdates').height();   
    $('#content-salaries').animate({height: 'toggle'}, 500);
});
