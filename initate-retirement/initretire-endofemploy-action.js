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
    tempDate.toLocaleDateString('en-us', options); // "Jul 2021 Friday"
    console.log(tempDate);

    return tempDate;
}

$('#endemploy-date').on('change', function(){
    console.log('changed');
    calcRetireDate("11-12-2023");
 });