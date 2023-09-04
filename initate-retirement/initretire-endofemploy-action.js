// Nothing yet.


function calcRetireDate(endDate) {

    // Set up vars for the segments
    endMonth = endDate.substr(0,2);
    endDay = endDate.substr(3,2);
    endYear = endDate.substr(6,4);
    reformatDate = endYear + "-" + endMonth + "-" + endDay;

    console.log(reformatDate);

    // The + 1 on the date is because months are an array w/ a start index of zero.
    const tempDate = new Date(reformatDate);

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
 });