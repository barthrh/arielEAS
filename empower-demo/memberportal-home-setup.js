// Test Data
localStorage.setItem('tile-estimate','show');
localStorage.setItem('tile-profile','hide');


// Queue up the default variables to enable or disable tiles on the home page.
var showTileEstimate = localStorage.getItem('tile-estimate');
var showTileProfile = localStorage.getItem('tile-profile');
var showTileDcpension = localStorage.getItem('tile-dcpension');
var showTileInitiate = localStorage.getItem('tile-initiate');

// If these variables were empty, initialize them. The default is to show.
if ( showTileEstimate != null ) {
    if (showTileEstimate == 'hide') {
        $('#tile-estimate').animate({height: 'hide'}, 0);
    } else {
        $('#tile-estimate').animate({height: 'show'}, 0); 
    } 
}
 else {
    $('#tile-estimate').animate({height: 'show'}, 0); 
 }
 
 if ( showTileProfile != null ) {
    if (showTileProfile == 'hide') {
        $('#tile-profile').animate({height: 'hide'}, 0);
    } else {
        $('#tile-profile').animate({height: 'show'}, 0); 
    } 
}
 else {
    $('#tile-profile').animate({height: 'show'}, 0); 
 }


$( document ).ready(function() {
    $('#tile-abouttheplan').animate({width: '250px'},0);
    $('#tile-abouttheplan').animate({minWidth: '250px'},{duration: 0, queue: false});
    $('#tilelarge-abouttheplan').animate({opacity: 'hide'},0);
    $('#tilesmall-abouttheplan').animate({width: 'show'},{duration: 0, queue: false});

    $('#tile-retirementinfo').animate({width: '250px'},0);
    $('#tile-retirementinfo').animate({minWidth: '250px'},{duration: 0, queue: false});
    $('#tilelarge-retirementinfo').animate({opacity: 'hide'},0);
    $('#tilesmall-retirementinfo').animate({width: 'show'},{duration: 0, queue: false});
});
