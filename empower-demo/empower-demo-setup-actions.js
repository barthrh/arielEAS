// This is code related to the setup page for the Empower Demo

var showTileEstimate = localStorage.getItem('tile-estimate');
var showTileProfile = localStorage.getItem('tile-profile');
var showTileDcpension = localStorage.getItem('tile-dcpension');
var showTileInitiate = localStorage.getItem('tile-initiate');

if (showTileEstimate == 'hide') {
    $('#')
}

$('#button-save-tiles').on('click',function(){
    localStorage.setItem('tile-estimate',$('#radio-estimate'.valueOf()));
    console.log(localStorage.getItem('tile-estimate'));

    localStorage.setItem('tile-profile',$('#radio-profile'.valueOf()));
    console.log(localStorage.getItem('tile-profile'));

    localStorage.setItem('tile-initiate',$('#radio-initiate'.valueOf()));
    console.log(localStorage.getItem('tile-initiate'));

    localStorage.setItem('tile-dcpension',$('#radio-dcpension'.valueOf()));
    console.log(localStorage.getItem('tile-dcpension'));
});