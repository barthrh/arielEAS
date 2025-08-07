$(document).ready(function () {

  $.getScript("https://ariel-demo.herokuapp.com/empower-demo/sub-logoupdate.js")
    .done(function() {
      console.log('sub-logoupdate loaded');
    });

  // Start fresh to clear the cache
  localStorage.removeItem('savedImageBase64');

  let logoBase64 = 'start';

  // Grab a freshly posted logo
  $.get('https://empower-manager-514504a17a0e.herokuapp.com/getLogoBase64', function(data) {
    console.log('BEFORE: ' + logoBase64);
  
    localStorage.setItem('savedImageBase64', data);

    logoBase64 = data;
    console.log('Base64 logo stored.');

    updateLogo();
  
  }).fail(function() {
    console.log('No Base64 logo found.');
  });

 
});

function updateLogo() {

  // Set the landing image, just for now
  let logoBase64 = localStorage.getItem(('savedImageBase64'));
  
  // Set the image source
  $('#portalLogo').attr('src', logoBase64);

};

$('#but-updateB64').on('click',function() {
  let base64Text = localStorage.getItem('savedImageBase64');
  
  $('#base64Test').text(base64Text);
});