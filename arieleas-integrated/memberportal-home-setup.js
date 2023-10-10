
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

if (localStorage.getItem('retire-review-status') == null ){
    localStorage.setItem('retire-review-status','notstarted');
}

// On load perform an initial recalculation
$( document ).ready(function() {
    console.log( "ready!" );
    intializeLocalStorage();
    setHomePageTiles();
});


function intializeLocalStorage() {
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

}

function setHomePageTiles() {

    var retireStatus = localStorage.getItem('retire-initiate-status');

    if (retireStatus != 'notstarted') {
        $('#card-retire-notstarted').animate({height: 'hide'}, 0);
        $('#card-retireinprogress').animate({height: 'show'}, 0);
        updateInitiateStatusBars();
        updateElectionStatusBars();
        updateReviewStatusBars();
    } else {
        $('#card-retire-notstarted').animate({height: 'show'}, 0);
        $('#card-retireinprogress').animate({height: 'hide'}, 0);
    }

}

function updateInitiateStatusBars() {
    console.log('Updating Bars');

    var retireStatus =  localStorage.getItem('retire-initiate-status');
    var electionStatus = localStorage.getItem('retire-elections-status');
    var insuranceStatus = localStorage.getItem('retire-insurance-status');
    var reviewStatus = localStorage.getItem('retire-review-status');

    console.log("Initiate Status: " + retireStatus);

    switch (retireStatus) {
        case 'step1': 
            console.log("set to Lvl1");
            setBarStatus('progress-initiate-bar1','inprogress');
            setBarStatus('progress-initiate-bar2','notstarted');
            setBarStatus('progress-initiate-bar3','notstarted');
            $('#retire-initiates-stepxofy').text('Step 1 of 4');
            $('#retire-initiates-stepname').text('My information');
            break;
        case 'step2': 
            console.log("set to Lvl2");
            setBarStatus('progress-initiate-bar1','done');
            setBarStatus('progress-initiate-bar2','inprogress');
            setBarStatus('progress-initiate-bar3','notstarted');
            $('#retire-initiates-stepxofy').text('Step 2 of 4');
            $('#retire-initiates-stepname').text('Dates and options');
            break;
        case 'step3': 
            console.log("set to Lvl3");
            setBarStatus('progress-initiate-bar1','done');
            setBarStatus('progress-initiate-bar2','done');
            setBarStatus('progress-initiate-bar3','inprogress');
            $('#retire-initiates-stepxofy').text('Step 3 of 4');
            $('#retire-initiates-stepname').text('Banking');
            break;
        case 'step4': 
            console.log("set to Lvl4");
            setBarStatus('progress-initiate-bar1','done');
            setBarStatus('progress-initiate-bar2','done');
            setBarStatus('progress-initiate-bar3','done');
            setBarStatus('progress-initiate-bar4','inprogress');
            $('#retire-initiates-stepxofy').text('Step 4 of 5');
            $('#retire-initiates-stepname').text('Tax Withholding');
            break;
        case 'step5': 
            console.log("set to Lvl5");
            setBarStatus('progress-initiate-bar1','done');
            setBarStatus('progress-initiate-bar2','done');
            setBarStatus('progress-initiate-bar3','done');
            setBarStatus('progress-initiate-bar4','inprogress');
            $('#retire-initiates-stepxofy').text('Step 5 of 5');
            $('#retire-initiates-stepname').text('Review');
            break;
        case 'done': 
            console.log("set to done");
            setBarStatus('progress-initiate-bar1','done');
            setBarStatus('progress-initiate-bar2','done');
            setBarStatus('progress-initiate-bar3','done');
            $('#retire-initiates-stepxofy').text('');
            $('#retire-initiates-stepname').text('Completed');
            break;
        default: 
            console.log("set to default");
            setBarStatus('progress-initiate-bar1','notstarted');
            setBarStatus('progress-initiate-bar2','notstarted');
            setBarStatus('progress-initiate-bar3','notstarted');           
            $('#retire-initiates-stepxofy').text('');
            $('#retire-initiates-stepname').text('Not started');        
    }

    if (retireStatus == 'done') {
        $('#retire-initiate-bars').animate({height: 'hide'}, 0);
        $('retire-initiate-pill').animate({height: 'show'}, 0);
    } else{
        $('#retire-initiate-bars').animate({height: 'show'}, 0);
        $('retire-initiate-pill').animate({height: 'hide'}, 0);
    }

}

function updateElectionStatusBars() {
    console.log('Updating Bars');

    var retireStatus =  localStorage.getItem('retire-initiate-status');
    var electionStatus = localStorage.getItem('retire-elections-status');
    var insuranceStatus = localStorage.getItem('retire-insurance-status');
    var reviewStatus = localStorage.getItem('retire-review-status');

    console.log("Election Status: " + electionStatus);

    switch (electionStatus) {
        case 'step1': 
            console.log("set to Lvl1");
            setBarStatus('progress-election-bar1','inprogress');
            setBarStatus('progress-election-bar2','notstarted');
            setBarStatus('progress-election-bar3','notstarted');
            $('#retire-elections-stepxofy').text('Step 1 of 4');
            $('#retire-elections-stepname').text('Pension options');
            break;
        case 'step2': 
            console.log("set to Lvl2");
            setBarStatus('progress-election-bar1','done');
            setBarStatus('progress-election-bar2','inprogress');
            setBarStatus('progress-election-bar3','notstarted');
            $('#retire-elections-stepxofy').text('Step 2 of 4');
            $('#retire-elections-stepname').text('Insurance');
            break;
        case 'step3': 
            console.log("set to Lvl3");
            setBarStatus('progress-election-bar1','done');
            setBarStatus('progress-election-bar2','done');
            setBarStatus('progress-election-bar3','inprogress');
            $('#retire-elections-stepxofy').text('Step 3 of 4');
            $('#retire-elections-stepname').text('Documents');
            break;
        case 'done': 
            console.log("set to done");
            setBarStatus('progress-election-bar1','done');
            setBarStatus('progress-election-bar2','done');
            setBarStatus('progress-election-bar3','done');
            $('#retire-elections-stepxofy').text('');
            $('#retire-elections-stepname').text('Completed');
            break;
        default: 
            console.log("set to default");
            setBarStatus('progress-election-bar1','notstarted');
            setBarStatus('progress-election-bar2','notstarted');
            setBarStatus('progress-election-bar3','notstarted');           
            $('#retire-elections-stepxofy').text('');
            $('#retire-elections-stepname').text('Not started');
        
    }
}

function updateReviewStatusBars() {
    console.log('Updating Bars');

    var retireStatus =  localStorage.getItem('retire-initiate-status');
    var electionStatus = localStorage.getItem('retire-elections-status');
    var insuranceStatus = localStorage.getItem('retire-insurance-status');
    var reviewStatus = localStorage.getItem('retire-review-status');

    console.log("Election Status: " + electionStatus);

    switch (reviewStatus) {
        case 'step1': 
            console.log("set to Lvl1");
            setBarStatus('progress-review-bar1','inprogress');
            setBarStatus('progress-review-bar2','notstarted');
            $('#retire-reviews-stepxofy').text('');
            $('#retire-reviews-stepname').text('Review options');
            break;
        case 'step2': 
            console.log("set to Lvl2");
            setBarStatus('progress-review-bar1','done');
            setBarStatus('progress-review-bar2','inprogress');
            $('#retire-reviews-stepxofy').text('');
            $('#retire-reviews-stepname').text('Waivers & Consent');
            break;
        case 'done': 
            console.log("set to done");
            setBarStatus('progress-review-bar1','done');
            setBarStatus('progress-review-bar2','done');
            setBarStatus('progress-review-bar3','done');
            $('#retire-reviews-stepxofy').text('');
            $('#retire-reviews-stepname').text('Completed');
            break;
        default: 
            console.log("set to default");
            setBarStatus('progress-review-bar1','notstarted');
            setBarStatus('progress-review-bar2','notstarted');
            $('#retire-reviews-stepxofy').text('');
            $('#retire-reviews-stepname').text('Not started');
        
    }
}

$('#election-continue-link').on('click', function() {
    console.log('Continue Election');
    var electionStatus = localStorage.getItem('retire-elections-status');

    switch (electionStatus) {
        case 'step3': 
            window.open("/integrated/retireonline/retire-choices/retire-choices-documents","_self");
            break;
        case 'step2': 
            window.open("/integrated/retireonline/retire-choices/retire-choices-insurance","_self");
            break;
        case 'step1': 
            window.open("/integrated/retireonline/retire-choices/retire-choices-election","_self");
            break;
        default: 
            window.open("/integrated/retireonline/retire-choices/retire-choices-election","_self");
    }
});

// Secret full reset by clicking on Complete pill for application
$('#retire-initiate-pill').on('click', function() {
    console.log('Resetting...');
    localStorage.setItem('retire-initiate-status','notstarted');
    localStorage.setItem('retire-elections-status','notstarted');
    localStorage.setItem('retire-insurance-status','notstarted');

})


function setBarStatus(barName, newStatus) {

    var jqID = "#" + barName;
    var barClass = $(jqID).attr('class');
    var statusClass = "widget-statusstep-" + newStatus;

    $(jqID).removeClass(barClass);
    $(jqID).addClass(statusClass);

    console.log("status updated to:" + $(jqID).attr('class') + "  on:" + jqID);
}