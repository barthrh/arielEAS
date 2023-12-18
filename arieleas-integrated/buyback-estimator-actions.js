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
localStorage.setItem('buyback-retirement-age',61);

//Default the split button to yearly calculations
setSplitButtonStyle('button-display-yearly','selected');
setSplitButtonStyle('button-display-monthly','inactive');
localStorage.setItem('buyback-display', 'yearly');



// Kick off a recalc once the form is loaded.
$( document ).ready(function() {
   console.log( "ready!" );
   
   calculateBuybackChart();
 });

 $('#button-recalculate').on('click', function() {
   console.log('Recalc');
   calculateBuybackChart();
})


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

    localStorage.setItem('buyback-display', 'yearly');

 });

 $('#button-display-monthly').on('click', function() {
    // Set the color
    setSplitButtonStyle('button-display-monthly','selected');
    setSplitButtonStyle('button-display-yearly','inactive');

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
   let pensionBaseline = 30000/pensionFrequecy;
   
   let pensionBaseAmount = (pensionBaseline * pensionFrequecy) + ( (retirementAge - 55) * 3699 ) / pensionFrequecy;
   let pensionBuybackAmount = buybackService * 1785 / pensionFrequecy;
   let pensionAmount = pensionBaseAmount + pensionBuybackAmount;
   console.log('pension' + pensionAmount);

   return pensionAmount;
 }

 // This is the main function used to calculate the two bars in the buyback chart.
 function calculateBuybackChart() {
   
   // Need to know 1. Age;  2. Frequency to display;  3. Years purchased
   
   // 1. Get the Retirement Age.
   let retirementAge = $('#input-ret1-age').val();
   if (retirementAge == '' || isNaN(retirementAge)) {
      retirementAge = 61;
      localStorage.setItem('buyback-retirement-age',61);
   } else {
      retirementAge = Number(retirementAge);
   }
   
   // 2. Figure out the frequency to display
   let buybackDisplay = localStorage.getItem('buyback-display');
   let buybackFrequency = 1;

   if (buybackDisplay == 'monthly') {
      buybackFrequency = 12;
   } else {
      buybackFrequency = 1;
   }


   // 3. Determine the number of years to purchase

   let buybackBasis = localStorage.getItem('buyback-basis');
   let buybackYears = 0;
   let buybackDollars = 0;

   if (buybackBasis == 'years') {      
      buybackYears = $('#field-buyback-years').val();
      if (buybackYears == '' || isNaN(buybackYears)) {
         buybackYears = 0;
      } else {
         buybackYears = Number(buybackYears);
         if (buybackYears > 2) {
            buybackYears = 2;
         }
         buybackDollars = buybackYears / 2 * 4520;
         buybackDollars = buybackDollars.toFixed(0);
         $('#field-buyback-dollars').val(buybackDollars);
      }
   } else {
      buybackDollars = $('#field-buyback-dollars').val();
      if (buybackDollars == '' || isNaN(buybackDollars)) {
         buybackDollars = 0;
         buybackYears = 0;
         $('#field-buyback-years').val(0);
      } else {
         buybackDollars = Number(buybackDollars);
         if (buybackDollars > 4520) {
            buybackDollars = 4520;
         }
         buybackYears = buybackDollars / 4520 * 2;
         buybackYears = buybackYears.toFixed(1);
         $('#field-buyback-years').val(buybackYears);
      }
   }

   // Calculate the pension under both bases at the prescribed frequency
   let basePension = 0;
   let buybackPension = 0;
   basePension = calculatePension(retirementAge,0,buybackFrequency);
   buybackPension = calculatePension(retirementAge,buybackYears,buybackFrequency);

   // Update everything
   updateBasePension(basePension);
   updateBuybackPension(buybackPension);
   updateRetirementAges(retirementAge);
 }

function updateBasePension(newBasePension) {
   // Updates all of the fields that depend on a recalc of the base pension.

   let dollarFormat = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumSignificantDigits: 3,
   });

   $('#chart-basepension-value').text(dollarFormat.format(newBasePension));
   $('#table-basepension-value').text(dollarFormat.format(newBasePension));

   // Set height of chart-basepension-bar
   let newBasePensionRounded = newBasePension.toFixed(0)/100;
   let barsize = (newBasePensionRounded *.7 * 0.1) + (newBasePensionRounded *.3 * 0.8);
   barsize = barsize.toFixed(0);
   $('#chart-basepension-bar').animate({height: barsize}, 500);
 }

 function updateBuybackPension(newBuybackPension) {
   // Updates all of the fields that depend on a recalc of the base pension.

   let dollarFormat = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumSignificantDigits: 3,
   });

   $('#chart-buybackpension-value').text(dollarFormat.format(newBuybackPension));
   $('#table-buybackpension-value').text(dollarFormat.format(newBuybackPension));

   // Set height of chart-buybackpension-bar
   let newBuybackPensionRounded = newBuybackPension.toFixed(0)/100;
   let barsize = (newBuybackPensionRounded *.7 * 0.1) + (newBuybackPensionRounded *.3 * 0.8);
   barsize = barsize.toFixed(0);
   $('#chart-buybackpension-bar').animate({height: barsize}, 500);
}


function updateRetirementAges(retirementAge) {

   ageText = "Age " + retirementAge;

   $('#pill-pensiondetails-retireage-without').text(ageText);
   $('#pill-pensiondetails-retireage-with').text(ageText);
   $('#pill-pensiondetails-age').text(ageText);
   $('#pill-buybacksummary-age').text(ageText);

}