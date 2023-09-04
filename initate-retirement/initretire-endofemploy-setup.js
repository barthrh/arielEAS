// Set up the dates and default them if not pre-loaded and stored.

var endDate = localStorage.getItem('initretire-enddate');
var retireDate = localStorage.getItem('initretire-retiredate');

console.log("running");

// 1. Find the form
var form = $('form[data-name="endemploy-form"]'); 

if ( localStorage.getItem('initretire-enddate') != null ) {
   form.find($("#endemploy-date-input-field")).val(endDate)  
} else {
   form.find($("#endemploy-date-input-field")).val("09-20-2023")  
}

if ( localStorage.getItem('initretire-retiredate') != null ) {
   form.find($("#retirement-date")).val(retireDate)  
} else {
   form.find($("#retirement-date")).val("October 1, 2023")  
}

