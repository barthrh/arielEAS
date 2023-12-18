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
$('#field-buyback-years').val('2.0');
localStorage.setItem('buyback-basis', 'years');
localStorage.setItem('buyback-display', 'yearly');
localStorage.setItem('buyback-retirement-age',61);


// Kick off a recalc once the form is loaded.
$( document ).ready(function() {
   console.log( "ready!" );
   
   calculateBuybackChart();
 });

 $('#button-recalculate').on('click',calculateBuybackChart());


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

    $('#buyback-entry-years').animate({height: 'show'}, 200);
    $('#buyback-entry-dollars').animate({height: 'hide'}, 0);
    localStorage.setItem('buyback-basis', 'years');

 });

 $('#button-select-buydollars').on('click', function() {
    // Set the color
    setSplitButtonStyle('button-select-buydollars','selected');
    setSplitButtonStyle('button-select-buyyears','inactive');

    $('#buyback-entry-years').animate({height: 'hide'}, 0);
    $('#buyback-entry-dollars').animate({height: 'show'}, 200);
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


 function calculatePension(retirementAge,buybackService,pensionFrequecy) {
   var pensionBaseline = 30000/pensionFrequecy;

   var pensionAmount = ( (pensionBaseline * pensionFrequecy) + ( (retirementAge + buybackService - 55) * 3699 )) / pensionFrequecy;
   console.log('pension' + pensionAmount);

   return pensionAmount;
 }

 // This is the main function used to calculate the two bars in the buyback chart.
 function calculateBuybackChart() {
   let retirementAge = $('#input-ret1-age').val();
   if (retirementAge == '' || isNaN(retirementAge)) {
      retirementAge = 61;
      localStorage.setItem('buyback-retirement-age',61);
   } else {
      retirementAge = Number(retirementAge);
   }
   
   let buybackDisplay = localStorage.getItem('buyback-display');
   let buybackFrequency = 1;

   if (buybackDisplay == 'monthly') {
      buybackFrequency = 12;
   } else {
      buybackFrequency = 1;
   }

   var buybackYears = $('#field-buyback-years').val();
   if (buybackYears == '' || isNaN(buybackYears)) {
      buybackYears = 0;
   } else {
      buybackYears = Number(buybackYears);
   }

   var basePension = 0;
   var buybackPension = 0;
   basePension = calculatePension(retirementAge,0,buybackFrequency);
   buybackPension = calculatePension(retirementAge,buybackYears,buybackFrequency);

   updateBasePension(basePension);
   updateBuybackPension(buybackPension);
 }

function updateBasePension(newBasePension) {
   // Updates all of the fields that depend on a recalc of the base pension.

   $('#chart-basepension-value').val(newBasePension);
   $('#table-basepension-value').val(newBasePension);

   // Set height of chart-basepension-bar
   let barsize = ( newBasePension.toFixed(0)/100 ) * 0.28;
   barsize = barsize.toFixed(0);
   $('#chart-buybackpension-bar').animate({height: barsize}, 500);
 }

 function updateBuybackPension(newBuybackPension) {
   // Updates all of the fields that depend on a recalc of the base pension.

   $('#chart-buybackpension-value').val(newBuybackPension);
   $('#table-buybackpension-value').val(newBuybackPension);

   // Set height of chart-buybackpension-bar
   let barsize = ( newBuybackPension.toFixed(0)/100 ) * 0.28;
   barsize = barsize.toFixed(0);
   $('#chart-buybackpension-bar').animate({height: barsize}, 500);
}
