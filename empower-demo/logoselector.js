$('#but-opendemo').on('click',function() {

  // Get selected radio button value
  let radioValue = $('input[name="radio-logoSelect"]:checked').val();
  if (radioValue != null) {
    console.log('radio val' + radioValue);
  } else {
    console.log('no radio selected');
  }


  let base64ImageString = $('#' + radioValue).text();
  console.log('base64 val' + base64ImageString);

  $.ajax({
    url: 'https://empower-manager-514504a17a0e.herokuapp.com/save-image',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({ base64Image: base64ImageString }),
    success: function(response) {
      console.log('Upload successful:', response);
      window.location.href = "https://empower-dbdemo1.webflow.io/memberportal-test";
    },
    error: function(xhr, status, error) {
      console.error('Upload failed:', error);
    }
  });

});