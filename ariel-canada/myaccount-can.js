$('#form-profile').submit(function() {
  return false;
});

$('#form-security').submit(function() {
  return false;
});



// Setup
$( document ).ready(function() {

  $('#nav-security-arrow').hide();

});

$('#nav-profile-tab').on('click', function(){

  $('#nav-profile-arrow').show();
  $('#nav-security-arrow').hide();

  setTabStyle('nav-profile-tab', 'active');
  setTabStyle('nav-security-tab', 'inactive');
  $('#nav-profile-content').show();
  $('#nav-security-content').hide();
});

$('#nav-security-tab').on('click', function(){

  $('#nav-profile-arrow').hide();
  $('#nav-security-arrow').show();

  setTabStyle('nav-profile-tab', 'inactive');
  setTabStyle('nav-security-tab', 'active');
  $('#nav-profile-content').hide();
  $('#nav-security-content').show();
});


function setTabStyle(tabName,newStatus) {
    var jqID = "#" + tabName;
    var tabClass = $(jqID).attr('class');
    var statusClass = "demosidetab-" + newStatus;

    $(jqID).removeClass(tabClass);
    $(jqID).addClass(statusClass);
 }

