// Set up the dates and default them if not pre-loaded and stored.

var endDate = localStorage.getItem('initretire-enddate');
var retireDate = localStorage.getItem('initretire-retiredate');


if ( localStorage.getItem('initretire-enddate') != null ) {

    console.log("P1");
    console.log(endDate);

    endMonth = parseInt(endDate.substring(0,2));
    endDay = parseInt(endDate.substring(3,5));
    endYear = parseInt(endDate.substring(6,10));

    console.log(endYear);
    console.log(endMonth);
    console.log(endDay);

    // The -1 on the date is because months are an array w/ a start index of zero.
    const tempDate = new Date(Date.UTC(endYear, endMonth-1, endDay, 0, 0, 0));

    console.log(tempDate);

    // Now format it.
    const options = { year: 'numeric', month: 'long', day: 'numeric',timeZone: 'UTC' };
    endDateText = tempDate.toLocaleDateString('en-us', options); 
    console.log(endDateText);
    
    $("#review-endemploydate").val(endDateText);
} else {
    console.log("P2");
    $("#review-endemploydate").val("September 30, 2023");  
}

if ( localStorage.getItem('initretire-retiredate') != null ) {
    console.log("P3");
    console.log(retireDate);
    $("#review-retiredate").text(retireDate);  
} else {
    console.log("P4");
    $("#review-retiredate").text("October 1, 2023")  
}

