
// Set up the tiles and content
$( document ).ready(function() {


    // Queue up the default variables to enable or disable tiles on the home page.
    var showTileEstimate = localStorage.getItem('tile-estimate');
    var showTileProfile = localStorage.getItem('tile-profile');
    var showTileDcpension = localStorage.getItem('tile-dcpension');
    var showTileInitiate = localStorage.getItem('tile-initiate');

    // Defines the updateLogo function
    $.getScript("https://ariel-demo.herokuapp.com/empower-demo/sub-logoupdate.js")
        .done(function() {
        console.log('sub-logoupdate loaded');
        updateLogo();
    });

    
    // If these variables were empty, initialize them. The default is to show.
    // Estimator tile
    if ( showTileEstimate != null ) {
        if (showTileEstimate == 'hide') {
            $('#tile-estimate').hide();
        } else {
            $('#tile-estimate').show(); 
        } 
    }
    else {
        $('#tile-estimate').show(); 
    }
    
    // Profile tile
    if ( showTileProfile != null ) {
        if (showTileProfile == 'hide') {
            $('#tile-profile').hide();
        } else {
            $('#tile-profile').show(); 
        } 
    }
    else {
        $('#tile-profile').show(); 
    }

    // DC Pension tile
    if ( showTileDcpension!= null ) {
        if (showTileDcpension == 'hide') {
            $('#tile-dcpension').hide();
        } else {
            $('#tile-dcpension').show(); 
        } 
    }
    else {
        $('#tile-dcpension').show(); 
    }

    // Initiate Retirement tile
    if ( showTileInitiate != null ) {
        if (showTileInitiate == 'show') {
            $('#tile-initiate').show();
        } else {
            $('#tile-initiate').hide(); 
        } 
    }
    else {
        $('#tile-initiate').hide(); 
    }

    // ***********  DC PENSION VALUES  ***********
    // Sets the amounts displayed in the DC pension tile
    let dcpensionTotal = localStorage.getItem('planinfo-dcpension-total');
    let dcpensionVested = localStorage.getItem('planinfo-dcpension-vested');
    let dcpensionReturn = localStorage.getItem('planinfo-dcpension-return');

    // Leave all values at the static defaul if nothing saved.
    if ( !(dcpensionTotal.isEmpty) ) {
        $('#dcpension-total').text(dcpensionTotal);
    } 
    
    if ( !(dcpensionVested.isEmpty) ) {
        $('#dcpension-vested').text(dcpensionVested);
    } 
    
    if ( !(dcpensionReturn.isEmpty) ) {
        $('#dcpension-return').text(dcpensionReturn);
    } 

    // ***********  CONTENT TILES  ***********
    // Tidy up the content tiles and render them cleanly.
    $('#tile-abouttheplan').animate({width: '250px'},0);
    $('#tile-abouttheplan').animate({minWidth: '250px'},{duration: 0, queue: false});
    $('#tilelarge-abouttheplan').animate({opacity: 'hide'},0);
    $('#tilesmall-abouttheplan').animate({width: 'show'},{duration: 0, queue: false});

    $('#tile-retirementinfo').animate({width: '250px'},0);
    $('#tile-retirementinfo').animate({minWidth: '250px'},{duration: 0, queue: false});
    $('#tilelarge-retirementinfo').animate({opacity: 'hide'},0);
    $('#tilesmall-retirementinfo').animate({width: 'show'},{duration: 0, queue: false});
});
