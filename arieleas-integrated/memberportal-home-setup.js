
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


$('#election-continue-link').on('click', function() {
    console.log('click');
    var bar3Class = $('#progress-bar3').attr('class');
    console.log(bar3Class);
    if (bar3Class == 'widget-statusstep-notstarted') {
        console.log('notstart');
        $('#progress-bar3').removeClass(bar3Class);
        $('#progress-bar3').addClass('widget-statusstep-inprogress');
    } else {
        if (bar3Class == 'widget-statusstep-inprogress') {
            console.log('inprogress');
            $('#progress-bar3').removeClass(bar3Class);
            $('#progress-bar3').addClass('widget-statusstep-done');
        }
        else {
            if (bar3Class == 'widget-statusstep-done') {
                console.log('done');
                $('#progress-bar3').removeClass(bar3Class);
                $('#progress-bar3').addClass('widget-statusstep-notstarted');
            }
        }
    }
});