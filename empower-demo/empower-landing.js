$(document).ready(function () {

  $.getScript("https://ariel-demo.herokuapp.com/empower-demo/sub-logoupdate.js")
    .done(function() {
      console.log('sub-logoupdate loaded');
    });

  // Start fresh to clear the cache
  localStorage.removeItem('savedImageBase64');

  // Grab a freshly posted logo
  $.get('https://empower-manager-514504a17a0e.herokuapp.com/getLogoBase64', function(data) {
    localStorage.setItem('savedImageBase64', data);
    console.log('Base64 logo stored.');
  }).fail(function() {
    console.log('No Base64 logo found.');
  });

  // Set the landing image, just for now
  let logoBase64 = localStorage.getItem(('savedImageBase64'));
  console.log(logoBase64);

  // Set the image source
  $('#portalLogo').attr('src', logoBase64);



});