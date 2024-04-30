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