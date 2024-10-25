var addrLine1 = '27 COLLEGE ROAD';
var addrLine2 = '';
var addrCity = 'GOTHAM CITY';
var addrState = 'MA';
var addrZip = '02915';
var addrCountry = 'United States';

var maritalStatus = 'Unknown';
var gender = 'male';
var emailAddr = 'joseph.r.truman@telusdemo.com';
var phone = '';
var mobile = '';

console.log($('#resident-address').text());

setAddress();
setFormValues();

$('#button-residential-save').on('click', function(){

    addrLine1 = $('#form-addr-line1').val();
    addrLine2 = $('#form-addr-line2').val();
    addrCity = $('#form-addr-city').val();
    addrState = $('#form-addr-state').val();
    addrZip = $('#form-addr-zip').val();
    addrCountry = 'United States';

    emailAddr = $('#form-email').val();
    phone = $('#form-phone').val();
    mobile = $('#form-mobile').val();

    setAddress();
    $('#modal-window').hide();
});


function setAddress(){
    console.log('settingb' + mobile);

    $('#resident-address-1').text(addrLine1);
    $('#resident-address-2').text(addrCity + ', '+ addrState + '  '+ addrZip);
    $('#resident-address-3').text(addrCountry);

    $('#profile-email').text(emailAddr);
    $('#profile-phone').text(phone);
    $('#profile-mobile').text(mobile);
};

function setFormValues() {

    $('#form-addr-line1').val(addrLine1);
    $('#form-addr-line2').val(addrLine2);
    $('#form-addr-city').val(addrCity);
    $('#form-addr-state').val(addrState);
    $('#form-addr-zip').val(addrZip);
    $('#form-addr-country').val('US');

    $('#form-email').val(emailAddr);
    $('#form-phone').val(phone);
    $('#form-mobile').val(mobile);
}