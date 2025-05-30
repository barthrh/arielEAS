$( document ).ready(function() {

    $('#param-select-month').hide();
    $('#param-select-year').hide();
    $('#param-select-period').hide();

    $('#report-preview').hide();

});

$('#radio-month').on('click', function(){
    if ($(this).prop("checked") == true) {
       $('#param-select-month').show();
       $('#param-select-year').hide();
       $('#param-select-period').hide();

       $('#radio-year').prop("checked",false);
       $('#radio-period').prop("checked",false);
       $('#radio-all').prop("checked",false);
    } else {
        $('#param-select-month').hide();
    }
 });

 $('#radio-year').on('click', function(){
    if ($(this).prop("checked") == true) {
       $('#param-select-month').hide();
       $('#param-select-year').show();
       $('#param-select-period').hide();

       $('#radio-month').prop("checked",false);
       $('#radio-period').prop("checked",false);
       $('#radio-all').prop("checked",false);
    } else {
        $('#param-select-year').hide();
    }
 });

 $('#radio-period').on('click', function(){
    if ($(this).prop("checked") == true) {
       $('#param-select-month').hide();
       $('#param-select-year').hide();
       $('#param-select-period').show();

       $('#radio-month').prop("checked",false);
       $('#radio-year').prop("checked",false);
       $('#radio-all').prop("checked",false);
    } else {
        $('#param-select-period').hide();
    }
 });

 $('#radio-all').on('click', function(){
    if ($(this).prop("checked") == true) {
       $('#param-select-month').hide();
       $('#param-select-year').hide();
       $('#param-select-period').hide();

       $('#radio-month').prop("checked",false);
       $('#radio-period').prop("checked",false);
       $('#radio-year').prop("checked",false);
    } 
 });

$('#button-execute').on('click', function(){
    $('#report-preview').show();
});

$('#selectall-plan').on('click', function(){

    $('#multiselect-plan').val(["A104Z101","D224Z101","D234Z101"]);

});

$('#selectall-status').on('click', function(){

    $('#multiselect-status').val(["active","deferred","terminated","pensioner","transfer","nonretroactive","notparticipating","transferdistinct"]);

});

