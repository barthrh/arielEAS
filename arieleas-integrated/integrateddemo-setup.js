// This is the initial setup of the demo. Will include instantiating variables to their initial state.



if (localStorage.getItem('retire-initiate-status') == null ){
    localStorage.setItem('retire-initiate-status','notstarted');
}

if (localStorage.getItem('retire-elections-status') == null ){
    localStorage.setItem('retire-elections-status','notstarted');
}

if (localStorage.getItem('retire-insurance-status') == null ){
    localStorage.setItem('retire-insurance-status','notstarted');
}

if ( localStorage.getItem('scenOneAge') == null ) {
    localStorage.setItem('scenOneAge',60);  
}

if ( localStorage.getItem('scenTwoAge') == null ) {
    localStorage.setItem('scenTwoAge',60);  
}
if ( localStorage.getItem('scenThreeAge') == null ) {
    localStorage.setItem('scenThreeAge',60);  
}

localStorage.setItem("pensionFrequency", 12);

