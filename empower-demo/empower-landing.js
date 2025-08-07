// This part is the core script that processes the received logo that was posted to the Node endpoint.
// Endpoint is currently https://empower-manager-514504a17a0e.herokuapp.com/save-image
// content-type & Body should be json {"base64Image": "data:image/png;base64,[the base64]}"


$(document).ready(function () {

  // Defines the updateLogo function
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

