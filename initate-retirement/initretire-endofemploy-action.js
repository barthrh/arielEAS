// Nothing yet.


function calcRetireDate(endDate) {

    // Set up vars for the segments
    endMonth = endDate.substr(0,2);
    endDay = endDate.substr(3,2);
    endYear = endDate.substr(6,4);

    console.log(endDate);

    const tempDate = new Date();
    tempDate.setFullYear(endYear,endMonth,endDay);

    // Now format it.
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    retireDate = tempDate.toLocaleDateString(undefined, options); 
    console.log(retireDate);

    return tempDate;
}

$('#endemploy-date').on('change', function(){
    console.log('changed');
    retireDate = calcRetireDate("11-12-2023");
    localStorage.setItem('initretire-enddate', endDate);
    localStorage.setItem('initretire-retiredate', retireDate);
 });