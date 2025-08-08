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

  // Process the URL parameters for plan type and service model
  let dcPlanType = getURLParameter('dcPlanType');
  let serviceModel = getURLParameter('serviceModel');
 
  if (dcPlanType) {
    console.log('Plan Type:' + dcPlanType);
  } else {
    console.log('No Plan Type');
  }

  if (serviceModel) {
    console.log('Service Model:' + serviceModel);
  } else {
    console.log('No Service Model');
  }


});

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(window.location.search);
    return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
