function recalculatePension() {

   // v20230418-1241
   // v20230419-0920
   // v20230419-0935
   // v20230419-0959

   // Number of payments per year
   var pensionFrequecy = localStorage.getItem('pensionFrequency');
   
   var pensionMax = 60000/pensionFrequecy;
   var pensionBaseline = 30000/pensionFrequecy;
   
   var scenOneAge = Number($('#input-ret1-age').val() );
   var scenTwoAge = Number($('#input-ret2-age').val() );
   var scenThreeAge = Number($('#input-ret3-age').val() );
   
   var purchaseYears = 0;
   if ($('#check-purchase').prop("checked") == true &&
       $('#check-reinstated-2yrs').prop("checked") == true) {
      purchaseYears = 2;
   };

   var reciprocalYears = 0;
   if ($('#check-recip').prop("checked") == true &&
       $('#check-recip-teach-4yrs').prop("checked") == true) {
      reciprocalYears = 4;
   };
   
   // Figure out impact of salary increase assuming age 55 now
   // Dividing percent by 500 to minimize the impact on total service
   var raisePercent = Number($('#raise-slider-single').val()) / 500;
   var raiseMultOne = Math.max( (1 + raisePercent)**(scenOneAge - 55), 0);
   var raiseMultTwo = Math.max( (1 + raisePercent)**(scenTwoAge - 55), 0);
   var raiseMultThree = Math.max( (1 + raisePercent)**(scenThreeAge - 55), 0);

   var scenOnePension = ( (pensionBaseline * pensionFrequecy) + ( (scenOneAge - 55) * 3699 ) * raiseMultOne ) / pensionFrequecy;
   var scenTwoPension = ( (pensionBaseline * pensionFrequecy) + ( (scenTwoAge - 55) * 3699 ) * raiseMultTwo ) / pensionFrequecy;
   var scenThreePension = ( (pensionBaseline * pensionFrequecy) + ( (scenThreeAge - 55) * 3699 ) * raiseMultThree ) / pensionFrequecy;
   
   scenOnePension = Math.min(scenOnePension, pensionMax);
   scenTwoPension = Math.min(scenTwoPension, pensionMax);
   scenThreePension = Math.min(scenThreePension, pensionMax);
   
   var scenOneSize = (((scenOnePension * pensionFrequecy) - (pensionBaseline * pensionFrequecy) ) / 80) - 90;
   var scenTwoSize = (((scenTwoPension  * pensionFrequecy) - (pensionBaseline  * pensionFrequecy) ) / 80) - 90;
   var scenThreeSize = (((scenThreePension  * pensionFrequecy) - (pensionBaseline  * pensionFrequecy) ) / 80) - 90;
   
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

   var purchPension = purchaseYears * (3220 / pensionFrequecy);
   var recipPension = reciprocalYears * (3220 / pensionFrequecy);

   // Update the labels / captions
   $('#demo-sc1-value').text(dollarFormat.format(scenOnePension + purchPension + recipPension));
   $('#demo-sc2-value').text(dollarFormat.format(scenTwoPension + purchPension + recipPension));
   $('#demo-sc3-value').text(dollarFormat.format(scenThreePension + purchPension + recipPension));
   
   $('#demo-sc1-age').text("Retirement age " + scenOneAge);
   $('#demo-sc2-age').text("Retirement age " + scenTwoAge);
   $('#demo-sc3-age').text("Retirement age " + scenThreeAge);

   var deducQdro = 3300 / pensionFrequecy;
   var deducHw = 4200 / pensionFrequecy;

   var grossPension1 = scenOnePension + purchPension + recipPension;
   var grossPension2 = scenTwoPension + purchPension + recipPension;
   var grossPension3 = scenThreePension + purchPension + recipPension;

   if ( $('#check-taxation').prop("checked") == true ){
      var taxFederal1 = grossPension1 * 0.21;
      var taxFederal2 = grossPension2 * 0.21;
      var taxFederal3 = grossPension3 * 0.21;
   
      var taxState1 = 0;
      var taxState2 = 0;
      var taxState3 = 0;

      $('#pensiontable-taxfed1').text(dollarFormat.format(taxFederal1));
      $('#pensiontable-taxfed2').text(dollarFormat.format(taxFederal2));
      $('#pensiontable-taxfed3').text(dollarFormat.format(taxFederal3));
      $('#pensiontable-taxstate1').text(dollarFormat.format(taxState1));
      $('#pensiontable-taxstate2').text(dollarFormat.format(taxState2));
      $('#pensiontable-taxstate3').text(dollarFormat.format(taxState3));
   
   } else {
      $('#pensiontable-taxfed1').text(" ");
      $('#pensiontable-taxfed2').text(" ");
      $('#pensiontable-taxfed3').text(" ");
      $('#pensiontable-taxstate1').text(" ");
      $('#pensiontable-taxstate2').text(" ");
      $('#pensiontable-taxstate3').text(" ");   
   }

   var netPension1 = grossPension1 - deducQdro - deducHw - taxFederal1 - taxState1;
   var netPension2 = grossPension2 - deducQdro - deducHw - taxFederal2 - taxState2;
   var netPension3 = grossPension3 - deducQdro - deducHw - taxFederal3 - taxState3;

   // Now update the pension values table
   $('#pensiontable-er1').text(dollarFormat.format(scenOnePension));
   $('#pensiontable-er2').text(dollarFormat.format(scenTwoPension));
   $('#pensiontable-er3').text(dollarFormat.format(scenThreePension));
   $('#pensiontable-serv1').text(dollarFormat.format(purchPension));
   $('#pensiontable-serv2').text(dollarFormat.format(purchPension));
   $('#pensiontable-serv3').text(dollarFormat.format(purchPension));
   $('#pensiontable-recip1').text(dollarFormat.format(recipPension));
   $('#pensiontable-recip2').text(dollarFormat.format(recipPension));
   $('#pensiontable-recip3').text(dollarFormat.format(recipPension));

   $('#pensiontable-qdro1').text(dollarFormat.format(deducQdro));
   $('#pensiontable-qdro2').text(dollarFormat.format(deducQdro));
   $('#pensiontable-qdro3').text(dollarFormat.format(deducQdro));
   $('#pensiontable-hw1').text(dollarFormat.format(deducHw));
   $('#pensiontable-hw2').text(dollarFormat.format(deducHw));
   $('#pensiontable-hw3').text(dollarFormat.format(deducHw));
   $('#pensiontable-net1').text(dollarFormat.format(netPension1));
   $('#pensiontable-net2').text(dollarFormat.format(netPension2));
   $('#pensiontable-net3').text(dollarFormat.format(netPension3));

   
   if (pensionFrequecy == 12) {
      $('#pensiontable-title').text("Estimated monthly amounts");
      $('#pensiontable-netlabel').text("Net monthly pension");
   } else {
      $('#pensiontable-title').text("Estimated annual amounts");
      $('#pensiontable-netlabel').text("Net annual pension");
   }

 };