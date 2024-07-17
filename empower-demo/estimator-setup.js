// ******************************************************
// RETRIEVE ANY SAVED SETTINGS AND DEFAULT IF NEEDED
  
  var scenOneAge = localStorage.getItem('scenOneAge');
  var scenTwoAge = localStorage.getItem('scenTwoAge');
  var scenThreeAge = localStorage.getItem('scenThreeAge');
  
  // 1. Find the form
  var form = $('form[data-name="ret-options-form"]'); 
  
  if ( localStorage.getItem('scenOneAge') != null ) {
     form.find($("#input-ret1-age")).val(scenOneAge);  
  } else {
     form.find($("#input-ret1-age")).val("62");  
  }
  
  if ( localStorage.getItem('scenTwoAge') != null ) {
     form.find($("#input-ret2-age")).val(scenTwoAge);  
  } else {
     form.find($("#input-ret2-age")).val("65");  
  }

  if ( localStorage.getItem('scenThreeAge') != null ) {
     form.find($("#input-ret3-age")).val(scenThreeAge);  
  } else {
     form.find($("#input-ret3-age")).val("67");  
  }

  $('#raise-slider-single').val(0);
  
  localStorage.setItem("pensionFrequency", 12)

// ******************************************************
// DEAL WITH THE CASH BALANCE VS. NOT OPTION
if (localStorage.getItem('demo-plan-type') == 'cashbal') {
    $('#cashbalance-interest-credit').show();
    $('#input-interestcredit-pct').val('0');
} else {
    $('#cashbalance-interest-credit').hide();
    $('#input-interestcredit-pct').val('0');
}

// ******************************************************
// INITIALIZE THE FORM WITH SECTION SIZES AND THEN RECALC

// Set the default section heights. lvl2-purchase is the div w the break info
$('#content-parameters').animate({height: 'show'}, 0);
$('#content-purchase').animate({height: 'show'}, 0);
$('#content-lvl2-purchase').animate({height: 'hide'}, 0);
$('#content-information').animate({height: 'hide'}, 0);
$('#content-spouse').animate({height: 'hide'}, 0);
$('#estimate-details-table').animate({height: '40px'},0);

$( document ).ready(function() {
  console.log( "ready!" );
  recalculatePension();
});