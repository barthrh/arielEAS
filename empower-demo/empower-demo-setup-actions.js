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
    localStorage.setItem('tile-estimate',$('#radio-estimate'.val()));
    console.log(localStorage.getItem('tile-estimate'));

    localStorage.setItem('tile-profile',$('#radio-profile'.val()));
    console.log(localStorage.getItem('tile-profile'));

    localStorage.setItem('tile-initiate',$('#radio-initiate'.val()));
    console.log(localStorage.getItem('tile-initiate'));

    localStorage.setItem('tile-dcpension',$('#radio-dcpension'.val()));
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