
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
        setBarStatus('progress-bar3','inprogress')
    } else {
        if (bar3Class == 'widget-statusstep-inprogress') {
            console.log('inprogress');
            setBarStatus('progress-bar3','done')
        }
        else {
            if (bar3Class == 'widget-statusstep-done') {
                console.log('done');
                setBarStatus('progress-bar3','notstarted')
            }
        }
    }
});

function setBarStatus(barName, newStatus) {
    console.log(barName + " ; " + newStatus);

    var jqID = "#" + barName;
    var barClass = $(jqID).attr('class');
    var statusClass = "widget-statusstep-" + newStatus;
    console.log(jqID);
    console.log(statusClass);

    $(jqID).removeClass(barClass);
    $(jqID).addClass(statusClass);

    console.log($(jqID).attr('class'));
}