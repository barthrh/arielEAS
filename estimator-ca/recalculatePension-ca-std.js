function recalculatePension() {

    // Number of payments per year
    var pensionFrequecy = localStorage.getItem('pensionFrequency');
   
    var pensionMax = 60000/pensionFrequecy;
    var pensionBaseline = 30000/pensionFrequecy;
   
    var scenOneAge = Number($('#input-ret1-age').val() );
    var scenTwoAge = Number($('#input-ret2-age').val() );
    var scenThreeAge = Number($('#input-ret3-age').val() );

    if ($('#ret3-checkbox').prop("checked") == true) {
        $('#chart-scen3-bar').animate({height: 'show'}, 300);
        $('#chart-scen3-separator').animate({height: 'show'}, 300);
        $('#chart-scen3-title').animate({height: 'show'}, 300);
    } else {
        $('#chart-scen3-bar').animate({height: 'hide'}, 300);
        $('#chart-scen3-separator').animate({height: 'hide'}, 300);
        $('#chart-scen3-title').animate({height: 'hide'}, 300);
    }
   
    var purchaseYears = 0;
    if ($('#check-purchase').prop("checked") == true &&
        $('#check-reinstated-2yrs').prop("checked") == true) {
        purchaseYears = 2;
        $('#legend-purchase').animate({height: 'show'}, 0);
        $('#table-purchase').animate({height: 'show'}, 0);
    } else {
        $('#legend-purchase').animate({height: 'hide'}, 0);  
        $('#table-purchase').animate({height: 'hide'}, 0);  
    };

    govpenYears = 4;  
   
    // This is the interest credit for cash balance plans. We are basing it on an $9220 opening balance.
    // It's totally unscientific.
    var extinterestPct = Number($('#input-interestcredit-pct').val() );
    if (extinterest == 0 ) {
        var extinterestOne = 0;
        var extinterestTwo = 0;
        var extinterestThree = 0;
    } else {
        var extinterest = 0.1 + extinterestPct/100;
        var extinterestOne = 9220 * extinterest * ( Math.max( (1 + extinterest)**(scenOneAge - 55), 0) );
        var extinterestTwo = 9220 * extinterest * ( Math.max( (1 + extinterest)**(scenTwoAge - 55), 0) );
        var extinterestThree = 9220 * extinterest * ( Math.max( (1 + extinterest)**(scenThreeAge - 55), 0) );
        console.log('interestOne' + extinterestOne);
    }


    // Figure out impact of salary increase assuming age 55 now
    // Dividing percent by 500 to minimize the impact on total service
    var raisePercent = Number($('#raise-slider-single').val()) / 500;
    var raiseMultOne = Math.max( (1 + raisePercent)**(scenOneAge - 55), 0);
    var raiseMultTwo = Math.max( (1 + raisePercent)**(scenTwoAge - 55), 0);
    var raiseMultThree = Math.max( (1 + raisePercent)**(scenThreeAge - 55), 0);

    var scenOnePension = ( (pensionBaseline * pensionFrequecy) + extinterestOne + ( (scenOneAge - 55) * 3699 ) * raiseMultOne ) / pensionFrequecy;
    var scenTwoPension = ( (pensionBaseline * pensionFrequecy) + extinterestTwo + ( (scenTwoAge - 55) * 3699 ) * raiseMultTwo ) / pensionFrequecy;
    var scenThreePension = ( (pensionBaseline * pensionFrequecy) + extinterestThree + ( (scenThreeAge - 55) * 3699 ) * raiseMultThree ) / pensionFrequecy;
    
    scenOnePension = Math.min(scenOnePension, pensionMax);
    scenTwoPension = Math.min(scenTwoPension, pensionMax);
    scenThreePension = Math.min(scenThreePension, pensionMax);
    
    var scenOneSize = (((scenOnePension * pensionFrequecy) - (pensionBaseline * pensionFrequecy) ) / 80) - 150;
    var scenTwoSize = (((scenTwoPension  * pensionFrequecy) - (pensionBaseline  * pensionFrequecy) ) / 80) - 150;
    var scenThreeSize = (((scenThreePension  * pensionFrequecy) - (pensionBaseline  * pensionFrequecy) ) / 80) - 150;
    
    var purchHeight = purchaseYears * 5;
    var govpenHeight = govpenYears * 5;
    
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
    $('#scen-one-govpen-bar').animate({height: govpenHeight}, 500);
    $('#scen-two-purch-bar').animate({height: purchHeight}, 500);
    $('#scen-two-govpen-bar').animate({height: govpenHeight}, 500);
    $('#scen-three-purch-bar').animate({height: purchHeight}, 500);
    $('#scen-three-govpen-bar').animate({height: govpenHeight}, 500);


    let dollarFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumSignificantDigits: 3,
    });

    var purchPension = purchaseYears * (3220 / pensionFrequecy);
    var govpenPension = govpenYears * (3220 / pensionFrequecy);

    // Update the labels / captions
    $('#demo-sc1-value').text(dollarFormat.format(scenOnePension + purchPension + govpenPension));
    $('#demo-sc2-value').text(dollarFormat.format(scenTwoPension + purchPension + govpenPension));
    $('#demo-sc3-value').text(dollarFormat.format(scenThreePension + purchPension + govpenPension));
    
    $('#demo-sc1-age').text("Retirement age " + scenOneAge);
    $('#demo-sc2-age').text("Retirement age " + scenTwoAge);
    $('#demo-sc3-age').text("Retirement age " + scenThreeAge);

    var deducQdro = 0;
    var deducHw = 4200 / pensionFrequecy;

    var grossPension1 = scenOnePension + purchPension + govpenPension;
    var grossPension2 = scenTwoPension + purchPension + govpenPension;
    var grossPension3 = scenThreePension + purchPension + govpenPension;

    var netPension1 = grossPension1;
    var netPension2 = grossPension2;
    var netPension3 = grossPension3;

    // Now update the pension values table
    $('#pensiontable-er1').text(dollarFormat.format(scenOnePension));
    $('#pensiontable-er2').text(dollarFormat.format(scenTwoPension));
    $('#pensiontable-er3').text(dollarFormat.format(scenThreePension));
    $('#pensiontable-serv1').text(dollarFormat.format(purchPension));
    $('#pensiontable-serv2').text(dollarFormat.format(purchPension));
    $('#pensiontable-serv3').text(dollarFormat.format(purchPension));
    $('#pensiontable-govpen1').text(dollarFormat.format(govpenPension));
    $('#pensiontable-govpen2').text(dollarFormat.format(govpenPension));
    $('#pensiontable-govpen3').text(dollarFormat.format(govpenPension));

    $('#pensiontable-gross1').text(dollarFormat.format(grossPension1));
    $('#pensiontable-gross2').text(dollarFormat.format(grossPension2));
    $('#pensiontable-gross3').text(dollarFormat.format(grossPension3));

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