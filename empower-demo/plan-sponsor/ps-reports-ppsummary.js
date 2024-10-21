$( document ).ready(function() {

    $('#param-select-month').hide();
    $('#param-select-year').hide();
    $('#param-select-period').hide();

});

$('#param-select-month').on('click', function(){
    if ($(this).prop("checked") == true) {
       $('#param-select-month').show();
       $('#param-select-year').hide();
       $('#param-select-period').hide();
    } else {
        $('#param-select-month').hide();
    }
 });