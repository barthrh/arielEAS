// Nothing yet.


function calcRetireDate(endDate) {

    // Set up vars for the segments
    endMonth = endDate.substring(1,2);
    endDay = endDate.substring(4,2);
    endYear = endDate.substring(7,4);

    console.log(endDate);
    console.log(endMonth + ":" + endDay + ":" + endYear);

    const tempDate = new Date();
    tempDate.setFullYear(endYear,endMonth,endDay);

    tempDate.toLocaleDateString('en-us', { year:"numeric", month:"long"}); // "Jul 2021 Friday"
    console.log(tempDate);
}

$('#endemploy-date').on('change', function(){
    console.log('changed');
    calcRetireDate("11-12-2023");
 });