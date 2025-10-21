$( document ).ready(function() {

   // Get the Empower Demo parameters
   let dbPlanType = localStorage.getItem('dbPlanType');
   let serviceModel = localStorage.getItem('serviceModel');

   if (dbPlanType) {
      if (dbPlanType == 'CASH' || dbPlanType == 'HYBRID') {
         $('#div-membership-cash').show();
         $('#div-membership-trad').hide();
      } else {
         $('#div-membership-cash').hide();
         $('#div-membership-trad').show();
      }
  } else {
     $('#div-membership-cash').hide();
     $('#div-membership-trad').show();
  }
  
});
