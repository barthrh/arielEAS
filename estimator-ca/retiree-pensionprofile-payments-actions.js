// Control the four accordian sections

$('#accordian-pay0').on('click', function(){
    var accordHeight = $('#content-retirementdates').height();   
    $('#content-pay0').animate({height: 'toggle'}, 500);
});

$('#accordian-pay1').on('click', function(){
    var accordHeight = $('#content-retirementdates').height();   
    $('#content-pay1').animate({height: 'toggle'}, 500);
});

$('#accordian-pay2').on('click', function(){
    var accordHeight = $('#content-retirementdates').height();   
    $('#content-pay2').animate({height: 'toggle'}, 500);
});

$('#accordian-pay3').on('click', function(){
    var accordHeight = $('#content-retirementdates').height();   
    $('#content-pay3').animate({height: 'toggle'}, 500);
});
