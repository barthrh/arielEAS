$( document ).ready(function() {

  // Used on Step 2
  setSplitButtonStyle('splitbutton-legalrep','inactive');
  setSplitButtonStyle('splitbutton-recipient','inactive');

  $('#legalrep-details').hide();

  // Used on Step 4
  setSplitButtonStyle('splitbutton-spouse-alive','inactive');
  setSplitButtonStyle('splitbutton-spouse-dead','inactive');

  $('#div-spouse-death').hide();

  // Set up the spouse update form
  $('#spouse-fullname').val('Sarah Thompson');
  $('#spouse-priorname').val('Smitherman');
  $('#spouse-sin').val('XXX XX 679');
  $('#spouce-gender').val('F');
  $('#spouse-dob').val('1973-09-22');
  $('#spouse-uniondate').val('2015-07-15');
  $('#spouse-uniontype').val('marriage');
  $('#spouse-email').val('sthompson@telusdemo.com');
  $('#spouse-mobile').val('330-555-2844');

});

  // Used on Step 2
 $('#splitbutton-recipient').on('click', function() {
    // Set the color
    setSplitButtonStyle('splitbutton-recipient','selected');
    setSplitButtonStyle('splitbutton-legalrep','inactive');

    $('#legalrep-details').animate({height: 'hide'}, 500);
 });

 $('#splitbutton-legalrep').on('click', function() {
    // Set the color
    setSplitButtonStyle('splitbutton-legalrep','selected');
    setSplitButtonStyle('splitbutton-recipient','inactive');

    $('#legalrep-details').animate({height: 'show'}, 500);
 });


  // Used on Step 4
 $('#splitbutton-spouse-alive').on('click', function() {
    // Set the color
    setSplitButtonStyle('splitbutton-spouse-alive','selected');
    setSplitButtonStyle('splitbutton-spouse-dead','inactive');

    $('#div-spouse-death').animate({height: 'hide'}, 500);
 });

 $('#splitbutton-spouse-dead').on('click', function() {
    // Set the color
    setSplitButtonStyle('splitbutton-spouse-dead','selected');
    setSplitButtonStyle('splitbutton-spouse-alive','inactive');

    $('#div-spouse-death').animate({height: 'show'}, 500);
 });

// Used on Step 4
$('#button-update-spouse').on('click',function(){

  $('#modal-spouse-update').css('display', 'flex');
});


// Used on Step 6
const submitDate = new Date(); // Sets to current

$('#submit-date').text(formatDate(submitDate));

// This is only for the OUTPUTS page sets the date to recent
function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: '2-digit' };
  
  return date.toLocaleDateString('en-US', options);
};




// Block submission on pressing 'enter'
$('#endemploy-form').submit(function() {
    return false;
});


function setSplitButtonStyle(buttonName,newStatus) {
    var jqID = "#" + buttonName;
    var buttonClass = $(jqID).attr('class');
    var statusClass = "eassplitbutton-" + newStatus;

    $(jqID).removeClass(buttonClass);
    $(jqID).addClass(statusClass);

 }