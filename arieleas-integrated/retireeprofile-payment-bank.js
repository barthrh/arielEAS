// One-time actions at page load
$( document ).ready(function() {

  $('#content-pay0').animate({height: 'show'}, 500);
  $('#content-pay1').animate({height: 'hide'}, 500);
  $('#content-pay2').animate({height: 'hide'}, 500);
  $('#content-pay3').animate({height: 'hide'}, 500);

  $('#content-bank1').animate({height: 'show'}, 500);
  $('#content-bank2').animate({height: 'show'}, 500);
});

// Control the accordian sections on pay and bank pages

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

$('#accordian-bank1').on('click', function(){
  var accordHeight = $('#content-retirementdates').height();   
  $('#content-bank1').animate({height: 'toggle'}, 500);
});

$('#accordian-bank2').on('click', function(){
  var accordHeight = $('#content-retirementdates').height();   
  $('#content-bank2').animate({height: 'toggle'}, 500);
});
