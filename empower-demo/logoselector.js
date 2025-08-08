$('#but-opendemo').on('click',function() {

  $('#logoSelectError').hide();

  // Get selected radio button value
  let radioValue = $('input[name="radio-logoSelect"]:checked').val();
  if (radioValue != null) {
    console.log('radio val' + radioValue);

    let base64ImageString = $('#' + radioValue).text();
    console.log('base64 val' + base64ImageString);

    $.ajax({
      url: 'https://empower-manager-514504a17a0e.herokuapp.com/save-image',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ dcPlanType: 'TRAD4', serviceModel: 'PREMIUM4', base64Image: base64ImageString }),
      success: function(response) {
        console.log('Upload successful:', response);

        let dcPlanType = response.dcPlanType;
        let serviceModel = response.serviceModel;
        let targetURL = response.destinationURL;

        console.log('Type: ' + dcPlanType + '; model: ' + serviceModel);
        console.log('Target: ' + targetURL);

        // window.location.href = targetURL;
      },
      error: function(xhr, status, error) {
        console.error('Upload failed:', error);
      }
    });

  } else {
    console.log('no radio selected');
    $('#logoSelectError').show();
  }



});