// All of the necessary setup and scripting for the Buyback estimator

// Variables used in localStorage:
//    buyback-basis ; value {years, dollars} ; whether to purchase on the basis of years or dollars
//    buyback-display ; value {yearly, monthly} ; how to show the numbers


// Default section visibility
$('#content-pensiondetails').animate({height: 'hide'},0);
$('#content-buybackdetails').animate({height: 'hide'},0);
$('#buyback-entry-dollars').animate({height: 'hide'},0);

// Set the default values
$('#input-ret1-age').val('61');
localStorage.setItem('buyback-basis', 'years');


$('#accordian-pensiondetails').on('click', function() {
    var accordHeight = $('#content-pensiondetails').height();   
    $('#content-pensiondetails').animate({height: 'toggle'}, 500);
})

$('#accordian-buybackdetails').on('click', function() {
    var accordHeight = $('#content-buybackdetails').height();   
    $('#content-buybackdetails').animate({height: 'toggle'}, 500);
})


$('#accordian-information').on('click', function(){
    $('#content-information').animate({height: 'toggle'}, 500);
 });

 $('#accordian-displaybasis').on('click', function(){
    $('#content-displaybasis').animate({height: 'toggle'}, 500);
 });

 $('#accordian-parameters').on('click', function(){
    $('#content-parameters').animate({height: 'toggle'}, 500);
 });


 // This is for the split estimate basis button
 $('#button-select-buyyears').on('click', function() {
    // Set the color
    setSplitButtonStyle('button-select-buyyears','selected');
    setSplitButtonStyle('button-select-buydollars','inactive');

    $('#buyback-select-years').animate({height: 'show'}, 500);
    $('#buyback-select-dollars').animate({height: 'hide'}, 500);
    localStorage.setItem('buyback-basis', 'years');

 });

 $('#button-select-buydollars').on('click', function() {
    // Set the color
    setSplitButtonStyle('button-select-buydollars','selected');
    setSplitButtonStyle('button-select-buyyears','inactive');

    $('#buyback-select-years').animate({height: 'hide'}, 500);
    $('#buyback-select-dollars').animate({height: 'show'}, 500);
    localStorage.setItem('buyback-basis', 'dollars');

 });

 // This is for the split display by button
 $('#button-display-yearly').on('click', function() {
    // Set the color
    setSplitButtonStyle('button-display-yearly','selected');
    setSplitButtonStyle('button-display-monthly','inactive');

    $('#reciprocal-details').animate({height: 'show'}, 500);
    localStorage.setItem('buyback-display', 'yearly');

 });

 $('#button-display-monthly').on('click', function() {
    // Set the color
    setSplitButtonStyle('button-display-monthly','selected');
    setSplitButtonStyle('button-display-yearly','inactive');

    $('#reciprocal-details').animate({height: 'show'}, 500);
    localStorage.setItem('buyback-display', 'monthly');

 });


 // Supporting Functions

 function setSplitButtonStyle(buttonName,newStatus) {
    var jqID = "#" + buttonName;
    var buttonClass = $(jqID).attr('class');
    var statusClass = "eassplitbutton-" + newStatus;

    $(jqID).removeClass(buttonClass);
    $(jqID).addClass(statusClass);

 }