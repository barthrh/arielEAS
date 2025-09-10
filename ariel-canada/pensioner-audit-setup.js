$( document ).ready(function() {

  // Used on Step 2
  setSplitButtonStyle('splitbutton-legalrep','inactive');
  setSplitButtonStyle('splitbutton-recipient','inactive');

  $('#legalrep-details').hide();

  

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