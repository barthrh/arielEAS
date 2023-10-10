
$( document ).ready(function() {
    $('#tile-abouttheplan').animate({width: '250px'},0);
    $('#tile-abouttheplan').animate({minWidth: '250px'},{duration: 0, queue: false});
    $('#tilelarge-abouttheplan').animate({opacity: 'hide'},0);
    $('#tilesmall-abouttheplan').animate({width: 'show'},{duration: 0, queue: false});

    $('#tile-retirementinfo').animate({width: '250px'},0);
    $('#tile-retirementinfo').animate({minWidth: '250px'},{duration: 0, queue: false});
    $('#tilelarge-retirementinfo').animate({opacity: 'hide'},0);
    $('#tilesmall-retirementinfo').animate({width: 'show'},{duration: 0, queue: false});
});

var bar1Class = $('#progress-bar1').attr('class');
console.log('Class:' + bar1Class);

var bar3Class = $('#progress-bar3').attr('class');
console.log('Class3:' + bar3Class);
$('#progress-bar3').removeClass(bar1Class);
$('#progress-bar3').addClass('widget-statusstep-done');
console.log('Class3b:' + bar3Class);

$('#election-continue-link').on('click', function() {
    var bar3Class = $('#progress-bar3').attr('class');
    if (bar3Class == 'widget-statusstep-notstart') {
        $('#progress-bar3').removeClass(bar3Class);
        $('#progress-bar3').addClass('widget-statusstep-inprogress');
    } else {
        if (bar3Class == 'widget-statusstep-inprogress') {
            $('#progress-bar3').removeClass(bar3Class);
            $('#progress-bar3').addClass('widget-statusstep-done');
        }
        else {
            if (bar3Class == 'widget-statusstep-done') {
                $('#progress-bar3').removeClass(bar3Class);
                $('#progress-bar3').addClass('widget-statusstep-nostarted');
            }
        }
    }
});