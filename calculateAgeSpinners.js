
$('#term-age-spinner-down').on('click', function(){
	let currentAge = Number($('#input-term-age').val() );
  let newAge = 0;
  if(!currentAge || currentAge <= 1) {
  	newAge = 1;
  } else {
  		newAge = currentAge - 1;
  }
  document.getElementById("input-term-age").setAttribute('value',newAge);
 });
 
 $('#term-age-spinner-up').on('click', function(){
	let currentAge = Number($('#input-term-age').val() );
  if(!currentAge) currentAge = 0;
  let newAge = currentAge + 1;
  
  document.getElementById("input-term-age").setAttribute('value',newAge);
 });
 
 
 // RET SCENARIO 1
 $('#ret1-age-spinner-down').on('click', function(){
	let currentAge = Number($('#input-ret1-age').val() );
  let newAge = 0;
  if(!currentAge || currentAge <= 1) {
  	newAge = 1;
  } else {
  		newAge = currentAge - 1;
  }
  
  var form = $('form[data-name="ret-options-form"]'); 
  form.find($("#input-ret1-age")).val(newAge); 
 });
 
 $('#ret1-age-spinner-up').on('click', function(){

  let currentAge = Number($('#input-ret1-age').val() );
  if(!currentAge) currentAge = 0;
  let newAge = currentAge + 1;
  
  var form = $('form[data-name="ret-options-form"]'); 
  form.find($("#input-ret1-age")).val(newAge); 

});

// RET SCENARIO 2
$('#ret2-age-spinner-down').on('click', function(){
	let currentAge = Number($('#input-ret2-age').val() );
  let newAge = 0;
  if(!currentAge || currentAge <= 1) {
  	newAge = 1;
  } else {
  		newAge = currentAge - 1;
  }
  
  var form = $('form[data-name="ret-options-form"]'); 
  form.find($("#input-ret2-age")).val(newAge); 
 });
 
 $('#ret2-age-spinner-up').on('click', function(){

  let currentAge = Number($('#input-ret2-age').val() );
  if(!currentAge) currentAge = 0;
  let newAge = currentAge + 1;
  
  var form = $('form[data-name="ret-options-form"]'); 
  form.find($("#input-ret2-age")).val(newAge); 

});

// RET SCENARIO 3
$('#ret3-age-spinner-down').on('click', function(){
	let currentAge = Number($('#input-ret3-age').val() );
  let newAge = 0;
  if(!currentAge || currentAge <= 1) {
  	newAge = 1;
  } else {
  		newAge = currentAge - 1;
  }
  
  var form = $('form[data-name="ret-options-form"]'); 
  form.find($("#input-ret3-age")).val(newAge); 
 });
 
 $('#ret3-age-spinner-up').on('click', function(){

  let currentAge = Number($('#input-ret3-age').val() );
  if(!currentAge) currentAge = 0;
  let newAge = currentAge + 1;
  
  var form = $('form[data-name="ret-options-form"]'); 
  form.find($("#input-ret3-age")).val(newAge); 

});

