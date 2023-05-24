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
 
 $('#accordian-information').on('click', function(){
    var accordHeight = $('#content-information').height();   
    $('#content-information').animate({height: 'toggle'}, 500);
 });
 
 $('#accordian-spouse').on('click', function(){
    var accordHeight = $('#content-spouse').height();   
    $('#content-spouse').animate({height: 'toggle'}, 500);
 });
 
 /*
 $('#accordian-chartvalues').on('click', function(){
   $('#content-chartvalues').animate({height: 'toggle'}, 500);
});
*/
