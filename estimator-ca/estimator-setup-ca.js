console.log("Estimator setup loaded.");

// This is where we queue up all of the initial sizes of the varios boxes and accordians.

$('#content-parameters').animate({height: 'show'}, 0);
$('#content-purchase').animate({height: 'show'}, 0);
$('#content-lvl2-purchase').animate({height: 'hide'}, 0);
$('#content-reciprocal').animate({height: 'hide'}, 0);
$('#content-lvl2-reciprocal').animate({height: 'hide'}, 0);
$('#content-taxation').animate({height: 'hide'}, 0);
$('#content-lvl2-taxation').animate({height: 'hide'}, 0);
$('#content-information').animate({height: 'hide'}, 0);
$('#content-spouse').animate({height: 'hide'}, 0);
$('#content-chartvalues').animate({height: 'hide'}, 0);


// Form relies on:
// 1. Script for initial setup and sizing of collapsible parts
// 2. Script to manage the animation of collapsible parts
// 3. Script for the age spinners
// 4. Script for calculating pension values and bar sizes
// 5. Webflow scripts for the slider bar control
  
var scenOneAge = localStorage.getItem('scenOneAge');
var scenTwoAge = localStorage.getItem('scenTwoAge');
var scenThreeAge = localStorage.getItem('scenThreeAge');

// 1. Find the form
var form = $('form[data-name="ret-options-form"]'); 
console.log("START AGE:" + scenOneAge);

if ( localStorage.getItem('scenOneAge') != null ) {
    form.find($("#input-ret1-age")).val(scenOneAge);  
} else {
    form.find($("#input-ret1-age")).val("60");  
}

if ( localStorage.getItem('scenTwoAge') != null ) {
    form.find($("#input-ret2-age")).val(scenTwoAge);  
} else {
    form.find($("#input-ret2-age")).val("62");  
}

if ( localStorage.getItem('scenThreeAge') != null ) {
    form.find($("#input-ret3-age")).val(scenThreeAge);  
} else {
    form.find($("#input-ret3-age")).val("64");  
}

$('#raise-slider-single').val(0);

localStorage.setItem("pensionFrequency", 12)
  


// On load perform an initial recalculation
$( document ).ready(function() {
  console.log( "ready!" );
  recalculatePension();
});




 // ******************
 // RECALCULATE & DETAILS BUTTONS
 // ******************
 
 $('.DemoInputField, .checkbox').on('change', function(){
    $('#warning-change').show();
 });
 
 
 
 $('#button-recalculate').on('click', function(){
    recalculatePension();
    window.scrollTo(0,300);
 });
 
 $('#button-select-monthly').on('click',function(){
    localStorage.setItem('pensionFrequency',12);
    console.log("Freq:" + localStorage.getItem('pensionFrequency'));
    $(this).css('background-color','#0078ab');
    $(this).css('color','white');
    $('#button-select-yearly').css('background-color','#e1f5fa');
    $('#button-select-yearly').css('color','#0078ab');
    $('#chartlabel-frequency').text('Initial monthly pension');
 });

 $('#button-select-yearly').on('click',function(){
    localStorage.setItem('pensionFrequency',1);
    console.log("Freq:" + localStorage.getItem('pensionFrequency'));
    $(this).css('background-color','#0078ab');
    $(this).css('color','white');
    $('#button-select-monthly').css('background-color','#e1f5fa');
    $('#button-select-monthly').css('color','#0078ab');
    $('#chartlabel-frequency').text('Initial annual pension');    });


$('#button-displaydetails').on('click', function(){
   // Set up all of the values we want
   var scenOneAge = Number($('#input-ret1-age').val() );
   var scenTwoAge = Number($('#input-ret2-age').val() );
   var scenThreeAge = Number($('#input-ret3-age').val() );
   var pensionEmpOne = Math.round( Number($('#scen-one-bar').attr('barValue') )/100)*100;
   var pensionEmpTwo = Math.round( Number($('#scen-two-bar').attr('barValue') )/100)*100;
   var pensionEmpThree = Math.round( Number($('#scen-three-bar').attr('barValue') )/100)*100;
   var servicePurchase = 0;
   var reciprocal = 0;

   // Store values for next page
   localStorage.setItem('scenOneAge', scenOneAge);
   localStorage.setItem('scenTwoAge', scenTwoAge);
   localStorage.setItem('scenThreeAge', scenThreeAge);
   localStorage.setItem('pensionEmpOne', pensionEmpOne);
   localStorage.setItem('pensionEmpTwo', pensionEmpTwo);
   localStorage.setItem('pensionEmpThree', pensionEmpThree);
   
   console.log("ageONE:" + localStorage.getItem('scenOneAge'));
   console.log("pensionONE:" + localStorage.getItem('pensionEmpOne'));
   console.log("pensionTWO:" + localStorage.getItem('pensionEmpTwo'));
   console.log("pensionTHREE:" + localStorage.getItem('pensionEmpThree'));
 });
 

