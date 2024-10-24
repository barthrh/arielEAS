var addrLine1 = '1234 Main St.';
var addrLine2 = '';
var addrCity = 'Demotown';
var addrState = 'OH';
var addrZip = '43028';
var addrCountry = 'United States';

var maritalStatus = 'married';
var gender = 'male';
var emailAddr = 'tommy.j.thompson@telusdemo.com';
var phone = '330-555-3823';
var mobile = '330-555-8283';

console.log($('#resident-address').text());

setAddress();
setFormValues();

$('#button-residential-save').on('click', function(){

    setAddress();
    $('#modal-window').hide();
});


function setAddress(){
    $('#resident-address-1').text(addrLine1);
    $('#resident-address-2').text(addrCity + ', '+ addrState + '  '+ addrZip);
    $('#resident-address-3').text(addrCountry);
};

function setFormValues() {

    $('#form-addr-line1').val(addrLine1);
    $('#form-addr-line2').val(addrLine2);
    $('#form-addr-city').val(addrCity);
    $('#form-addr-state').val(addrState);
    $('#form-addr-zip').val(addrZip);
    $('#form-addr-country').val('US');
}