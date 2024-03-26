// This is code related to the setup page for the Empower Demo

var showTileEstimate = localStorage.getItem('tile-estimate');
var showTileProfile = localStorage.getItem('tile-profile');
var showTileDcpension = localStorage.getItem('tile-dcpension');
var showTileInitiate = localStorage.getItem('tile-initiate');

if (showTileEstimate == 'hide') {
    $('#radio-estimate-hide').prop('checked',true);
    $('#radio-estimate-show').prop('checked',false);
} else {
    $('#radio-estimate-show').prop('checked',true);
    $('#radio-estimate-hide').prop('checked',false);
};

$('#button-save-tiles').on('click',function(){
    let estimateStatus = checkRadioValue('estimate');
    localStorage.setItem('tile-estimate',estimateStatus);
    console.log(localStorage.getItem('tile-estimate'));

    let profileStatus = checkRadioValue('profile');
    localStorage.setItem('tile-profile',profileStatus);
    console.log(localStorage.getItem('tile-profile'));

    let initiateStatus = checkRadioValue('initiate');
    localStorage.setItem('tile-initiate',initiateStatus);
    console.log(localStorage.getItem('tile-initiate'));

    let dcpensionStatus = checkRadioValue('dcpension');
    localStorage.setItem('tile-dcpension',dcpensionStatus);
    console.log(localStorage.getItem('tile-dcpension'));
});


function checkRadioValue(radioID) {

    let retVal = 'nothing';
    let radioIDShow = '#radio-' + radioID + '-show';
    let radioIDHide = '#radio-' + radioID + '-hide';
 
    if ($(radioIDShow).prop('checked') == true) {
        console.log('show checked on ' + radioID);
        retVal = 'show';
    }

    if ($(radioIDHide).prop('checked') == true) {
        console.log('hide checked on ' + radioID);
        retVal = 'hide';
    }

    return retVal;
}