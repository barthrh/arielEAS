// This is code related to the setup page for the Empower Demo



//  ***************** SECTION 1 - TILE SELECTION *******************  //
//  ****************************************************************  //
var showTileEstimate = localStorage.getItem('tile-estimate');
var showTileProfile = localStorage.getItem('tile-profile');
var showTileDcpension = localStorage.getItem('tile-dcpension');
var showTileInitiate = localStorage.getItem('tile-initiate');

setRadioDefaults('estimate',showTileEstimate);
setRadioDefaults('profile',showTileProfile);
setRadioDefaults('initiate',showTileInitiate);
setRadioDefaults('dcpension',showTileDcpension);

$('#button-save-tiles').on('click',function(){
    let estimateStatus = checkRadioValue('estimate');
    localStorage.setItem('tile-estimate',estimateStatus);

    let profileStatus = checkRadioValue('profile');
    localStorage.setItem('tile-profile',profileStatus);

    let initiateStatus = checkRadioValue('initiate');
    localStorage.setItem('tile-initiate',initiateStatus);

    let dcpensionStatus = checkRadioValue('dcpension');
    localStorage.setItem('tile-dcpension',dcpensionStatus);

    $('#message-tile-saved').animate({opacity: 'show'}, 500);
    $('#message-tile-saved').animate({opacity: 'hide'}, 5000);
});


function checkRadioValue(radioID) {

    let retVal = 'nothing';
    let radioIDShow = '#radio-' + radioID + '-show';
    let radioIDHide = '#radio-' + radioID + '-hide';
 
    if ($(radioIDShow).prop('checked') == true) {
        retVal = 'show';
    }

    if ($(radioIDHide).prop('checked') == true) {
        retVal = 'hide';
    }

    return retVal;
}

function setRadioDefaults(radioID, tileStatus) {

    let radioIDShow = '#radio-' + radioID + '-show';
    let radioIDHide = '#radio-' + radioID + '-hide';

    if (tileStatus == 'hide') {
        $(radioIDHide).prop('checked',true);
        $(radioIDShow).prop('checked',false);
    } else {
        $(radioIDShow).prop('checked',true);
        $(radioIDHide).prop('checked',false);
    };
    

}


//  ***************** SECTION 2 - PENSION INFO *********************  //
//  ****************************************************************  //

var profilePlanType = localStorage.getItem('demo-plan-type');

if (profilePlanType == 'cashbal') {
    $('#radio-plantype-cashbal').prop('checked',true);
    $('#radio-plantype-stddb').prop('checked',false);
} else {
    $('#radio-plantype-cashbal').prop('checked',false);
    $('#radio-plantype-stddb').prop('checked',true);
}

$('#button-save-planinfo').on('click',function(){

    if($('#radio-plantype-stddb').prop('checked') == true) {
        localStorage.setItem('demo-plan-type','stddb');
    } else {
        if($('#radio-plantype-cashbal').prop('checked') == true) {
            localStorage.setItem('demo-plan-type','cashbal');
        } else {
            localStorage.setItem('demo-plan-type','stddb');
        }
    }

    $('#message-planinfo-saved').animate({opacity: 'show'}, 500);
    $('#message-planinfo-saved').animate({opacity: 'hide'}, 5000);

});
