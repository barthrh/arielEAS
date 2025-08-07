// This is to be called by the home pages. The mission of this script is to:
//   1. Fetch the Base64 of the logo
//   2. Update the logos on the member and plan sponsor portals. One will work other not, depending on caller.


// The logo needs to have been posted to the endpoint. If it hasn't, this request will fail because there will
// be no file or the file pulled will be the last one posted.

/* 
THIS PART BELONGS IN A LANDING PAGE TO DO A ONE-TIME SETUP. I can't call it every time because a rencent post
could have changed the logo on Heroku. Needs to be one-time. Get the post on Heroku, then do param setup ONCE,
then redirect to member portal home (or put in a landing page w/ button).

$.get('https://empower-manager-514504a17a0e.herokuapp.com/getLogoBase64', function(data) {
  localStorage.setItem('savedImageBase64', data);
}).fail(function() {
  console.log('No Base64 logo found.');
});
*/

$(function(setPageLogo) {
  let logoBase64 = localStorage.getItem(('savedImageBase64'));

  // Set the image source
  $('#portalLogo').attr('src', logoBase64);

});
