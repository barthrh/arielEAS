var scenOneAge = localStorage.getItem('scenOneAge');
var scenTwoAge = localStorage.getItem('scenTwoAge');
var scenThreeAge = localStorage.getItem('scenThreeAge');
var pensionEmpOne = localStorage.getItem('pensionEmpOne');
var pensionEmpTwo = localStorage.getItem('pensionEmpTwo');
var pensionEmpThree = localStorage.getItem('pensionEmpThree');

console.log("ageONE:" + scenOneAge);
console.log("pensionONE:" + pensionEmpOne);
console.log("pensionTWO:" + pensionEmpTwo);
console.log("pensionTHREE:" + pensionEmpThree);

 $('#tablabel-option1').text("Scenario 1 - Age " + scenOneAge);
 $('#tablabel-option2').text("Scenario 2 - Age " + scenTwoAge);
 $('#tablabel-option3').text("Scenario 3 - Age " + scenThreeAge);
 $('#tablabel2-option1').text("Scenario 1 - Age " + scenOneAge);
 $('#tablabel2-option2').text("Scenario 2 - Age " + scenTwoAge);
 $('#tablabel2-option3').text("Scenario 3 - Age " + scenThreeAge);
 $('#tablabel3-option1').text("Scenario 1 - Age " + scenOneAge);
 $('#tablabel3-option2').text("Scenario 2 - Age " + scenTwoAge);
 $('#tablabel3-option3').text("Scenario 3 - Age " + scenThreeAge);

$('#pill1-option1-choice1').text("Age " + scenOneAge);
$('#pill1-option1-choice2').text("Age " + scenOneAge);
$('#pill2-option1-choice1').text("Age " + scenTwoAge);
$('#pill2-option1-choice2').text("Age " + scenTwoAge);
$('#pill3-option1-choice1').text("Age " + scenThreeAge);
$('#pill3-option1-choice2').text("Age " + scenThreeAge);