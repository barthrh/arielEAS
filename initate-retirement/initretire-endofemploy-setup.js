// Set up the dates and default them if not pre-loaded and stored.

var endDate = localStorage.getItem('initretire-enddate');
var retireDate = localStorage.getItem('initretire-retiredate');


// 1. Find the form
var form = $('form[data-name="endemploy-form"]'); 

if ( localStorage.getItem('initretire-enddate') != null ) {
   form.find($("#endemploy-date-input-field")).val(endDate)  
   console.log("Point1");
} else {
   form.find($("#endemploy-date-input-field")).val("09-20-2023")  
   console.log("Point2");
}

if ( localStorage.getItem('initretire-retiredate') != null ) {
   form.find($("#retirement-date")).val(retireDate)  
   console.log("Point3");
} else {
   form.find($("#retirement-date")).val("October 1, 2023")  
   console.log("Point4");
}

