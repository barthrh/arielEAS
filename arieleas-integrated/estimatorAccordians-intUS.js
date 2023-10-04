console.log("Estimator Accordians intUS loaded.");

// *****************************
// Accordians
// *****************************
$('#accordian-parameters').on('click', function(){
    var accordHeight = $('#content-parameters').height();
    $('#content-parameters').animate({height: 'toggle'}, 500);
 });
 
 $('#accordian-purchase').on('click', function(){
    var accordHeight = $('#content-purchase').height();
    $('#content-purchase').animate({height: 'toggle'}, 500);
 });
 
 $('#check-purchase').on('click', function(){
    if ($(this).prop("checked") == false) {
       $('#content-lvl2-purchase').animate({height: 'hide'}, 500);
    } else {
       $('#content-lvl2-purchase').animate({height: 'show'}, 500);
    }
 });
 
 $('#accordian-reciprocal').on('click', function(){
    var accordHeight = $('#content-reciprocal').height();   
    $('#content-reciprocal').animate({height: 'toggle'}, 500);
 });
 
 /*
 $('#check-recip').on('click', function(){
    if ($(this).prop("checked") == false) {
       $('#content-lvl2-taxation').animate({height: '200px'}, 500);
    } else {
       $('#content-lvl2-taxation').animate({height: '40px'}, 500);
    }
 });
 */
 $('#check-recip').on('click', function(){
   if ($(this).prop("checked") == false) {
      $('#content-lvl2-reciprocal').animate({height: 'hide'}, 500);
   } else {
      $('#content-lvl2-reciprocal').animate({height: 'show'}, 500);
   }
});

 $('#accordian-taxation').on('click', function(){
    var accordHeight = $('#content-taxation').height();   
    $('#content-taxation').animate({height: 'toggle'}, 500);
 });
 
 $('#check-taxation').on('click', function(){
    if ($(this).prop("checked") == false) {
       $('#content-lvl2-taxation').animate({height: 'hide'}, 500);
    } else {
       $('#content-lvl2-taxation').animate({height: 'show'}, 500);
    }
 });
 
 $('#accordian-information').on('click', function(){
    var accordHeight = $('#content-information').height();   
    $('#content-information').animate({height: 'toggle'}, 500);
 });
 
 $('#accordian-spouse').on('click', function(){
    var accordHeight = $('#content-spouse').height();   
    $('#content-spouse').animate({height: 'toggle'}, 500);
 });
 
 $('#accordian-chartvalues').on('click', function(){
   var accordHeight = $('#content-chartvalues').height();   
   $('#content-chartvalues').animate({height: 'toggle'}, 500);
});