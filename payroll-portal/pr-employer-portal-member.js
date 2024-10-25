$( document ).ready(function() {
    $('#tab-member-content').show();
    $('#tab-member-content').animate({height: 'show'}, 500);
    $('#tab-payment-content').hide();
    $('#tab-banking-content').hide();
    $('#tab-tax-content').hide();
    $('#tab-paysources-content').hide();

    $('#payrow-content-2023').hide();
    $('#payrow-content-2024').show();

    console.log( "ready!" );
});

// All of the tab controls. Don't know where we are coming from (too lazy) so just toggle it all.
$('#tab-member').on('click', function(){
    $('#tab-member-content').show();
    $('#tab-payment-content').hide();
    $('#tab-banking-content').hide();
    $('#tab-tax-content').hide();
    $('#tab-paysources-content').hide();
    $('#tab-member').addClass('active');
    $('#tab-payment').removeClass('active');
    $('#tab-banking').removeClass('active');
    $('#tab-tax').removeClass('active');
    $('#tab-paysources').removeClass('active');
   
 });
 
 $('#tab-payment').on('click', function(){
    $('#tab-member-content').hide();
    $('#tab-payment-content').show();
    $('#tab-banking-content').hide();
    $('#tab-tax-content').hide();
    $('#tab-paysources-content').hide();
    $('#tab-member').removeClass('active');
    $('#tab-payment').addClass('active');
    $('#tab-banking').removeClass('active');
    $('#tab-tax').removeClass('active');
    $('#tab-paysources').removeClass('active');
 });

 $('#tab-banking').on('click', function(){
    $('#tab-member-content').hide();
    $('#tab-payment-content').hide();
    $('#tab-banking-content').show();
    $('#tab-tax-content').hide();
    $('#tab-paysources-content').hide();
 });

 $('#tab-tax').on('click', function(){
    $('#tab-member-content').hide();
    $('#tab-payment-content').hide();
    $('#tab-banking-content').hide();
    $('#tab-tax-content').show();
    $('#tab-paysources-content').hide();
 });

 $('#tab-paysources').on('click', function(){
    $('#tab-member-content').hide();
    $('#tab-payment-content').hide();
    $('#tab-banking-content').hide();
    $('#tab-tax-content').hide();
    $('#tab-paysources-content').show();
 });

 // year accordians in the pay table
 $('#payrow-year-2023').on('click',function(){
    $('#payrow-content-2023').animate({height: 'toggle'}, 500);
 });

 $('#payrow-year-2024').on('click',function(){
    $('#payrow-content-2024').animate({height: 'toggle'}, 500);
 });

 // Modal details form
 $('#tab-paydetail-detail').on('click', function(){
    $('#tab-paydetail-details-content').show();
    $('#tab-paydetail-banking-content').hide();
 });

 $('#tab-paydetail-banking').on('click', function(){

    $('#tab-paydetail-details-content').hide();
    $('#tab-paydetail-banking-content').show();
 });
