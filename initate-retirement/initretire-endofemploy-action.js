// Nothing yet.


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

    // The + 1 on the date is because months are an array w/ a start index of zero.
//    const tempDate = new Date(reformatDate);
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