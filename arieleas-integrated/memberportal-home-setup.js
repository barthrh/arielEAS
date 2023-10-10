
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


// Evaluate the status of the processes and then set the bars accordingly
if (localStorage.getItem('retire-initiate-status') == null ){
    localStorage.setItem('retire-initiate-status','notstarted');
}

if (localStorage.getItem('retire-elections-status') == null ){
    localStorage.setItem('retire-elections-status','notstarted');
}

if (localStorage.getItem('retire-insurance-status') == null ){
    localStorage.setItem('retire-insurance-status','notstarted');
}

var retireStatus = localStorage.getItem('retire-initiate-status');
var electionStatus = localStorage.getItem('retire-elections-status');
var insuranceStatus = localStorage.getItem('retire-insurance-status');

switch (retireStatus) {
    case 'step1':
        setBarStatus('progress-election-bar1','inprogress');
        setBarStatus('progress-election-bar2','notstarted');
        setBarStatus('progress-election-bar3','notstarted');
    case 'step2':
        setBarStatus('progress-election-bar1','done');
        setBarStatus('progress-election-bar2','inprogress');
        setBarStatus('progress-election-bar3','notstarted');
    case 'step3':
        setBarStatus('progress-election-bar1','done');
        setBarStatus('progress-election-bar2','done');
        setBarStatus('progress-election-bar3','inprogress');
    case 'done':
        setBarStatus('progress-election-bar1','done');
        setBarStatus('progress-election-bar2','done');
        setBarStatus('progress-election-bar3','done');
    default:
        setBarStatus('progress-election-bar1','notstarted');
        setBarStatus('progress-election-bar2','notstarted');
        setBarStatus('progress-election-bar3','notstarted');           
}

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