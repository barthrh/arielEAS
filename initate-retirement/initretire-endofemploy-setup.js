// Set up the dates and default them if not pre-loaded and stored.

var endDate = localStorage.getItem('initretire-enddate');
var retireDate = localStorage.getItem('initretire-retiredate');


$("#endemploy-date-input-field").val("12-12-2022");

if ( localStorage.getItem('initretire-enddate') != null ) {
   $("#endemploy-date").val(endDate);
} else {
   $("#endemploy-date").val("09-30-2023");  
}

if ( localStorage.getItem('initretire-retiredate') != null ) {
   $("#retirement-date").text(retireDate);  
   console.log("Point3");
} else {
   $("#retirement-date").text("October 1, 2023")  
   console.log("Point4");
}

