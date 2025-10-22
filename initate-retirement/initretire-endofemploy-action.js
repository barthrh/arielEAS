// Set up the dates and default them if not pre-loaded and stored.
$( document ).ready(function() {


    var endDate = localStorage.getItem('initretire-enddate');
    var retireDate = localStorage.getItem('initretire-retiredate');

    const date = new Date(); // Sets to current

    let today = formatDate(date);
    let defaultRetireDate = calcRetireDate(today);
    let defaultEndDate = defaultRetireDate - 1;

    console.log('defaultEndDate: ' + defaultEndDate);

    if ( localStorage.getItem('initretire-enddate') != null ) {
        $("#endemploy-date").val(endDate);
    } else {
    // $("#endemploy-date").val("09-30-2023");  
        $('#endemploy-date').val(formatDate(date));
    }

    if ( localStorage.getItem('initretire-retiredate') != null ) {
        $("#retirement-date").text(retireDate);  
    console.log("Point3");
    } else {
        $("#retirement-date").text("October 1, 2023")  
    console.log("Point4");
    }
});

// This is only for the OUTPUTS page sets the date to recent
function formatDate(date) {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();
  
  return `${month}-${day}-${year}`;
};


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