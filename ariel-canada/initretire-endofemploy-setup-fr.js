// Set up the dates and default them if not pre-loaded and stored.

var endDate = localStorage.getItem('initretire-enddate');
var retireDate = localStorage.getItem('initretire-retiredate');


$("#endemploy-date-input-field").val("29-10-2025");

if ( localStorage.getItem('initretire-enddate') != null ) {
   $("#endemploy-date").val(endDate);
} else {
   $("#endemploy-date").val("29-10-2025");  
}

if ( localStorage.getItem('initretire-retiredate') != null ) {
   $("#retirement-date").text(retireDate);  
   console.log("Point3");
} else {
   $("#retirement-date").text("1 novembre 2025")  
   console.log("Point4");
}

