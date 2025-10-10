/*
Test endpoint: https://empower-manager-514504a17a0e.herokuapp.com/save-image
Method is POST
Content-Type should be appplication/json

This is the current JSON structure that should be in the body of the POST:

{"dbPlanType": "TRAD","serviceModel": "PREMIUM","base64Image": "data:image/png;base64,iVBORw0KGg..."}

for dbPlanType I’m anticipating: TRAD, CASH, HYBRID

for serviceModel, I'm anticipating: PREMIUM, STANDARD

*/


$('#but-openmember').on('click', async function() {

  let targetURL = await selectLogo();

  console.log('Received member target:' + targetURL);

  // window.location.href = targetURL;
  if (targetURL != '') {
    window.open(targetURL,'_blank');
  }

});

$('#but-opensponsor').on('click', async function() {

  let targetURL = '/plan-sponsor/ps-dashboard-test';

  console.log('Received sponsor target:' + targetURL);

  // window.location.href = targetURL;
  if (targetURL != '') {
    window.open(targetURL,'_blank');
  }
});


function selectLogo() {

  return new Promise((resolve, reject) => {

    $('#logoSelectError').hide();

    // Get selected radio button value
    let radioValue = $('input[name="radio-logoSelect"]:checked').val();
    if (radioValue != null) {
      console.log('radio val: ' + radioValue);

      let base64ImageString = $('#' + radioValue).text();
      console.log('base64 val: ' + base64ImageString);

      let choiceDbPlanType = $('#dbPlanType').val();
      let choiceServiceModel = $('#serviceModel').val();


      // Post the logo to the Node server
      $.ajax({
        url: 'https://empower-manager-514504a17a0e.herokuapp.com/save-image',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ dbPlanType: choiceDbPlanType, serviceModel: choiceServiceModel, base64Image: base64ImageString }),
        success: function(response) {

          // Use the URL in the JSON response to redirect to the proper page
          console.log('Upload successful:', response);

          let dbPlanType = response.dbPlanType;
          let serviceModel = response.serviceModel;
          let targetURL = response.destinationURL;

          console.log('Type: ' + dbPlanType + '; model: ' + serviceModel);
          console.log('Target: ' + targetURL);

          resolve(targetURL);
          
        },
        error: function(xhr, status, error) {
          console.error('Upload failed:', error);
          reject(error);
        }
      });

    } else {
      console.log('no radio selected');
      $('#logoSelectError').show();
      resolve('');
    }
  });
};