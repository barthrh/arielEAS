// Nothing yet.

// Default the split buttons on page load.
$( document ).ready(function() {
    setSplitButtonStyle('button-reciprocal-no','selected');
    setSplitButtonStyle('button-reciprocal-yes','inactive');
    $('#reciprocal-details').animate({height: 'hide'}, 0);
});

function calcRetireDate(endDate) {

    // Set up vars for the segments
    endMonth = parseInt(endDate.substr(0,2));
    endDay = parseInt(endDate.substr(3,2));
    endYear = parseInt(endDate.substr(6,4));

    if (endDay != 1) {
        if (endMonth == 12) {
            endMonth = 1;
            endYear = endYear + 1;
        } else {
            endMonth = endMonth + 1;
        }
    }

    // The -1 on the date is because months are an array w/ a start index of zero.
    const tempDate = new Date(Date.UTC(endYear, endMonth-1, 1, 0, 0, 0));

    console.log(tempDate);

    // Now format it.
    const options = { year: 'numeric', month: 'long', day: 'numeric',timeZone: 'UTC' };
    retireDate = tempDate.toLocaleDateString('en-us', options); 
    console.log(retireDate);

    return retireDate;
}

$('#endemploy-date').on('change', function(){
    endDate = $('#endemploy-date').val();

    retireDate = calcRetireDate(endDate);
    localStorage.setItem('initretire-enddate', endDate);
    localStorage.setItem('initretire-retiredate', retireDate);

    if ( localStorage.getItem('initretire-retiredate') != null ) {
        $("#retirement-date").text(retireDate);  
     } else {
        $("#retirement-date").text("October 1, 2023");
     }
     
 });

 $('#button-reciprocal-yes').on('click', function() {
    // Set the color
    setSplitButtonStyle('button-reciprocal-yes','selected');
    setSplitButtonStyle('button-reciprocal-no','inactive');

    $('#reciprocal-details').animate({height: 'show'}, 500);

 })

 $('#button-reciprocal-no').on('click', function() {
    // Set the color
    setSplitButtonStyle('button-reciprocal-no','selected');
    setSplitButtonStyle('button-reciprocal-yes','inactive');

    $('#reciprocal-details').animate({height: 'hide'}, 500);
 })

 $('#button-retirenow-yes').on('click', function() {
    // Set the color
    setSplitButtonStyle('button-retirenow-yes','selected');
    setSplitButtonStyle('button-retirenow-no','inactive');
 })

 $('#button-retirenow-no').on('click', function() {
    // Set the color
    setSplitButtonStyle('button-retirenow-no','selected');
    setSplitButtonStyle('button-retirenow-yes','inactive');
 })

function setSplitButtonStyle(buttonName,newStatus) {
    var jqID = "#" + buttonName;
    var buttonClass = $(jqID).attr('class');
    var statusClass = "eassplitbutton-" + newStatus;

    $(jqID).removeClass(buttonClass);
    $(jqID).addClass(statusClass);

 }