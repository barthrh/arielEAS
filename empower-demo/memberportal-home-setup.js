
// Set up the tiles and content
$( document ).ready(function() {

    // Defines and executes the updateLogo function
    $.getScript("https://ariel-demo.herokuapp.com/empower-demo/sub-logoupdate.js")
        .done(function() {
            console.log('sub-logoupdate loaded');
            updateLogo();
            // The default setup is a hidden default logo to avoid flash / flicker.
            $('#portalLogo').show();

            setTileVisibility();
            setContentSizes();
    });

});


function setTileVisibility() {

    // initialize tile variables
    let showTileEstimate = true;
    let showTileProfileTrad = true;
    let showTileProfileCash = false;
    let showTileProfileHybrid = false;
    let showTileDcPension = true;
    let showTileInitiate = false;
    

    //Get the Demo parameters
    let dbPlanType = localStorage.getItem('dbPlanType');
    let serviceModel = localStorage.getItem('serviceModel');

    console.log('Param Type: ' + dbPlanType);
    console.log('Param Model: ' + serviceModel);

    if (dbPlanType) {
        showTileEstimate = true;
        showTileDcPension = true;

        switch (dbPlanType) {
            case 'TRAD':
                showTileProfileTrad = true;
                showTileProfileCash = false;
                showTileProfileHybrid = false;
                break;
            case 'CASH':
                showTileProfileTrad = false;
                showTileProfileCash = true;
                showTileProfileHybrid = false;
                break;
            case 'HYBRID':
                showTileProfileTrad = false;
                showTileProfileCash = false;
                showTileProfileHybrid = true;
                break;
            default:
                showTileProfileTrad = true;
                showTileProfileCash = false;
                showTileProfileHybrid = false;
        }
    }

    if (serviceModel == 'PREMIUM') {
        showTileInitiate = true;
    }
    else {
        showTileInitiate = false;
    }

    console.log('Setting Tiles');

    // If these variables were empty, initialize them. The default is to show.
    // Estimator tile
    if (showTileEstimate == false) {
        $('#tile-estimate').hide();
    } else {
        $('#tile-estimate').show();
        console.log('Show Estimate');
    } 
    
    // Profile tiles
    if (showTileProfileTrad == false) {
        $('#tile-profile-trad').hide();
    } else {
        $('#tile-profile-trad').show(); 
        console.log('Show Profile Trad');
    } 

    if (showTileProfileCash == true) {
        $('#tile-profile-cash').show();
        console.log('Show Profile Cash');
    } else {
        $('#tile-profile-cash').hide(); 
    }
    
    if (showTileProfileHybrid == true) {
        $('#tile-profile-hybrid').show();
        console.log('Show Profile Hybrid');
    } else {
        $('#tile-profile-hybrid').hide(); 
    } 


    // DC Pension tile
    if (showTileDcPension == true) {
        $('#tile-dcpension').hide();
    } else {
        $('#tile-dcpension').show(); 
        console.log('Show DC');
    } 

    // Initiate Retirement tile
    if (showTileInitiate == true) {
        $('#tile-initiate').show();
        console.log('Show Initiate');
    } else {
        $('#tile-initiate').hide(); 
    } 

};

function setContentSizes() {
    console.log('Setting content tiles');
    // ***********  CONTENT TILES  ***********
    // Tidy up the content tiles and render them cleanly.
    $('#tile-abouttheplan').animate({width: '250px'},0);
    $('#tile-abouttheplan').animate({minWidth: '250px'},{duration: 0, queue: false});
    $('#tilelarge-abouttheplan').hide();
    $('#tilesmall-abouttheplan').show();

    $('#tile-retirementinfo').animate({width: '250px'},0);
    $('#tile-retirementinfo').animate({minWidth: '250px'},{duration: 0, queue: false});
    $('#tilelarge-retirementinfo').hide();
    $('#tilesmall-retirementinfo').show();
};