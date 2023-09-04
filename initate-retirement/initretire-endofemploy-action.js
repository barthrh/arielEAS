// Nothing yet.


function calcRetireDate(endDate) {

    // Set up vars for the segments
    endMonth = endDate.substr(0,2);
    endDay = endDate.substr(3,2);
    endYear = endDate.substr(6,4);

    console.log(endDate);

    // The + 1 on the date is because months are an array w/ a start index of zero.
    const tempDate = new Date();
    tempDate.setFullYear(endYear,endMonth+1,endDay);

    // Now format it.
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    retireDate = tempDate.toLocaleDateString(undefined, options); 
    console.log(retireDate);

    return retireDate;
}

$('#endemploy-date').on('change', function(){
    console.log('changed');
    endDate = $('#endemploy-date').val();
    retireDate = calcRetireDate(endDate);
    localStorage.setItem('initretire-enddate', endDate);
    localStorage.setItem('initretire-retiredate', retireDate);
 });