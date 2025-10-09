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

  // Grab a freshly posted logo
  $.get('https://empower-manager-514504a17a0e.herokuapp.com/getLogoBase64', function(data) {
  
    localStorage.setItem('savedImageBase64', data);

    updateLogo();
  
  }).fail(function() {
    console.log('No Base64 logo found.');
  });

  // Process the URL parameters for plan type and service model
  let dbPlanType = getUrlParameter('dbPlanType');
  let serviceModel = getUrlParameter('serviceModel');
 
  if (dbPlanType) {
    console.log('Plan Type:' + dbPlanType);
    localStorage.setItem('dbPlanType', dbPlanType);
  } else {
    console.log('No Plan Type');
    localStorage.removeItem('dbPlanType');
  }

  if (serviceModel) {
    console.log('Service Model:' + serviceModel);
    localStorage.setItem('serviceModel', serviceModel);
  } else {
    console.log('No Service Model');
    localStorage.removeItem('serviceModel');
  }

  // Finally REDIRECT to the Member Portal Home
  window.location.href = "/member-portal-home";
});

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(window.location.search);
    return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
