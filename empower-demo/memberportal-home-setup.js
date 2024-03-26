



$( document ).ready(function() {

    // Test Data
    localStorage.setItem('tile-estimate','show');
    localStorage.setItem('tile-profile','hide');


    // Queue up the default variables to enable or disable tiles on the home page.
    var showTileEstimate = localStorage.getItem('tile-estimate');
    var showTileProfile = localStorage.getItem('tile-profile');
    var showTileDcpension = localStorage.getItem('tile-dcpension');
    var showTileInitiate = localStorage.getItem('tile-initiate');

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
        if (showTileInitiate == 'hide') {
            $('#tile-initiate').hide();
        } else {
            $('#tile-initiate').show(); 
        } 
    }
    else {
        $('#tile-initiate').show(); 
    }

    $('#tile-abouttheplan').animate({width: '250px'},0);
    $('#tile-abouttheplan').animate({minWidth: '250px'},{duration: 0, queue: false});
    $('#tilelarge-abouttheplan').animate({opacity: 'hide'},0);
    $('#tilesmall-abouttheplan').animate({width: 'show'},{duration: 0, queue: false});

    $('#tile-retirementinfo').animate({width: '250px'},0);
    $('#tile-retirementinfo').animate({minWidth: '250px'},{duration: 0, queue: false});
    $('#tilelarge-retirementinfo').animate({opacity: 'hide'},0);
    $('#tilesmall-retirementinfo').animate({width: 'show'},{duration: 0, queue: false});
});
