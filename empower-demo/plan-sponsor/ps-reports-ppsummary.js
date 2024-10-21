$( document ).ready(function() {

    $('#param-select-month').hide();
    $('#param-select-year').hide();
    $('#param-select-period').hide();

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