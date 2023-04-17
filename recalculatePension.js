function recalculatePension() {
   console.log("click");
   var scenOneAge = Number($('#input-ret1-age').val() );
   var scenTwoAge = Number($('#input-ret2-age').val() );
   var scenThreeAge = Number($('#input-ret3-age').val() );
   
   var purchaseYears = 0;
   if ($('#check-purchase').prop("checked") == true &&
       $('#check-reinstated-2yrs').prop("checked") == true) {
      purchaseYears = 2;
   };
   console.log("Purch:" + purchaseYears);

   var reciprocalYears = 0;
   if ($('#check-recip').prop("checked") == true &&
       $('#check-recip-teach-4yrs').prop("checked") == true) {
      reciprocalYears = 4;
   };
   
   // Figure out impact of salary increase assuming age 55 now
   // Dividing percent by 500 to minimize the impact on total service
   var raisePercent = Number($('#raise-slider-single').val()) / 500;
   var raisePerP1 = (1 + raisePercent);
   var raisePerP2 = (scenOneAge - 55);
   var raiseMultOne = Math.max( (1 + raisePercent)**(scenOneAge - 55), 0);
   var raiseMultTwo = Math.max( (1 + raisePercent)**(scenTwoAge - 55), 0);
   var raiseMultThree = Math.max( (1 + raisePercent)**(scenThreeAge - 55), 0);

   var scenOnePension = (30000 + ( (scenOneAge - 55) * 3699 )) * raiseMultOne;
   var scenTwoPension = 30000 + ( (scenTwoAge - 55) * 3699 ) * raiseMultTwo;
   var scenThreePension = 30000 + ( (scenThreeAge - 55) * 3699 ) * raiseMultThree;
   
   scenOnePension = Math.min(scenOnePension, 60000);
   scenTwoPension = Math.min(scenTwoPension, 60000);
   scenThreePension = Math.min(scenThreePension, 60000);

   var scenOneSize = ((scenOnePension - 30000) / 80) - 90;
   var scenTwoSize = ((scenTwoPension - 30000) / 80) - 90;
   var scenThreeSize = ((scenThreePension - 30000) / 80) - 90;
   
   var purchHeight = purchaseYears * 5;
   var recipHeight = reciprocalYears * 5;
   
   var scenOneAttr = new String(scenOneSize);
   scenOneAttr = scenOneAttr.concat("px");
   var scenTwoAttr = new String(scenTwoSize);
   scenTwoAttr = scenTwoAttr.concat("px");
   var scenThreeAttr = new String(scenThreeSize);
   scenThreeAttr = scenThreeAttr.concat("px");
   
   // var barOne = document.getElementById("scen-one-bar");
   
   document.getElementById("scen-one-bar").setAttribute('barValue',scenOnePension);
   document.getElementById("scen-two-bar").setAttribute('barValue',scenTwoPension);
   document.getElementById("scen-three-bar").setAttribute('barValue',scenThreePension);

   $('#scen-one-bar').animate({height: scenOneAttr}, 500);
   $('#scen-two-bar').animate({height: scenTwoAttr}, 500);
   $('#scen-three-bar').animate({height: scenThreeAttr}, 500);
   
   $('#scen-one-purch-bar').animate({height: purchHeight}, 500);
   $('#scen-one-recip-bar').animate({height: recipHeight}, 500);
   $('#scen-two-purch-bar').animate({height: purchHeight}, 500);
   $('#scen-two-recip-bar').animate({height: recipHeight}, 500);
   $('#scen-three-purch-bar').animate({height: purchHeight}, 500);
   $('#scen-three-recip-bar').animate({height: recipHeight}, 500);

   if ( $('#check-taxation').prop("checked") == true) {
   var taxOneHeight = (scenOneSize + purchHeight + recipHeight)*.2;
   var taxTwoHeight = (scenTwoSize + purchHeight + recipHeight)*.2;
   var taxThreeHeight = (scenThreeSize + purchHeight + recipHeight)*.2;
   console.log("TaxOne:" + taxOneHeight);
   } else {
      var taxOneHeight = 0;
      var taxTwoHeight = 0;
      var taxThreeHeight = 0;
   };

   $('#scen-one-tax-bar').animate({height: taxOneHeight}, 500);
   $('#scen-two-tax-bar').animate({height: taxTwoHeight}, 500);
   $('#scen-three-tax-bar').animate({height: taxThreeHeight}, 500);


   let dollarFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits: 3,
    });

   var purchPension = purchaseYears * 3220;
   var recipPension = reciprocalYears * 3220;

   // Update the labels / captions
   $('#demo-sc1-value').text(dollarFormat.format(scenOnePension + purchPension + recipPension));
   $('#demo-sc2-value').text(dollarFormat.format(scenTwoPension + purchPension + recipPension));
   $('#demo-sc3-value').text(dollarFormat.format(scenThreePension + purchPension + recipPension));
   
   $('#demo-sc1-age').text("Retirement age " + scenOneAge);
   $('#demo-sc2-age').text("Retirement age " + scenTwoAge);
   $('#demo-sc3-age').text("Retirement age " + scenThreeAge);
      
   console.log(scenOneAttr);
   console.log(scenOneAge);
   console.log(scenOnePension);
   console.log(scenOneSize);

   // *************************
   // END OF RECALCULATE
   // *************************


 };