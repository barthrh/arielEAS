// Set up the dates and default them if not pre-loaded and stored.

var endDate = localStorage.getItem('initretire-enddate');
var retireDate = localStorage.getItem('initretire-retiredate');

const date = new Date(); // Sets to current

let today = formatDate(date);
let defaultRetireDate = calcRetireDate(today);
let defaultEndDate = retireDate - 1;

console.log('calcEndDate: ' + calcEndDate);

if ( localStorage.getItem('initretire-enddate') != null ) {
   $("#endemploy-date").val(endDate);
} else {
   // $("#endemploy-date").val("09-30-2023");  
   $('#endemploy-date').val(formatDate(date));
}

if ( localStorage.getItem('initretire-retiredate') != null ) {
   $("#retirement-date").text(retireDate);  
   console.log("Point3");
} else {
   $("#retirement-date").text("October 1, 2023")  
   console.log("Point4");
}


// This is only for the OUTPUTS page sets the date to recent
function formatDate(date) {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();
  
  return `${month}-${day}-${year}`;
};

