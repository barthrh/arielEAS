// Code to hide or show the menus and content panes

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

    $('#add-benef-frame').animate({height: 'hide'}, 0);
    $('#update-benef-frame').animate({height: 'show'}, 0);
    $('#enter-beneficiary-frame').animate({height: 'hide'}, 100);
    $('#button-add-cancel').animate({height: 'hide'}, 0);

    console.log( "ready!" );
});

$('#nav-basic-tab').on('click', function(){
    setBasic('show');
    setSurvivor('hide');
    setAuthrep('hide');
});

$('#nav-survivor-tab').on('click', function(){
    setBasic('hide');
    setSurvivor('show');
    setAuthrep('hide');
});

$('#nav-authrep-tab').on('click', function(){
    setBasic('hide');
    setSurvivor('hide');
    setAuthrep('show');
});

function setBasic(theAction) {
    
    if (theAction == 'show') {
        var textColor = '#0078AB';
        var showHide = 'show';
    } else {
        var textColor = '#595959';
        var showHide = 'hide';
    }
    $('#nav-basic-text').css('color',textColor);
    $('#nav-basic-arrow').animate({height: showHide}, 0);
    $('#nav-basic-content').animate({height: showHide}, 300);
}

function setSurvivor(theAction) {
    
    if (theAction == 'show') {
        var textColor = '#0078AB';
        var showHide = 'show';
    } else {
        var textColor = '#595959';
        var showHide = 'hide';
    }
    $('#nav-survivor-text').css('color',textColor);
    $('#nav-survivor-arrow').animate({height: showHide}, 0);
    $('#nav-survivor-content').animate({height: showHide}, 300);
}

function setAuthrep(theAction) {
    if (theAction == 'show') {
        var textColor = '#0078AB';
        var showHide = 'show';
    } else {
        var textColor = '#595959';
        var showHide = 'hide';
    }
    $('#nav-authrep-text').css('color',textColor);
    $('#nav-authrep-arrow').animate({height: showHide}, 0);
    $('#nav-authrep-content').animate({height: showHide}, 300);
}
// nav-authrep-tab.


// Beneficiary Form support

$('#button-add-cancel').on('click',function() {
    console.log('cancel the add');
    $('#enter-beneficiary-frame').animate({height: 'hide'}, 100);
    $('#button-add-cancel').animate({height: 'hide'}, 0);
    $('#button-add-done').text('Done');
})

$('#link-addbenny-pri').on('click',function() {
    console.log('primary');
    $('#add-benef-frame').animate({height: 'show'}, 0);
    $('#update-benef-frame').animate({height: 'hide'}, 0);
    $('#button-add-cancel').animate({height: 'hide'}, 0);
    $('#button-add-done').text('Done');
})

$('#link-addbenny-sec').on('click',function() {
    console.log('secondary');
    $('#add-benef-frame').animate({height: 'show'}, 0);
    $('#update-benef-frame').animate({height: 'hide'}, 0);
    $('#button-add-cancel').animate({height: 'hide'}, 0);
    $('#button-add-done').text('Done');
})

$('#link-addnew-beneficiary').on('click',function(){
    console.log('summon the add');
    $('#enter-beneficiary-frame').animate({height: 'show'}, 100);
    $('#button-add-cancel').animate({height: 'show'}, 0);
    $('#button-add-done').text('Add');
})

$('#close-addbenny').on('click',function(){
    console.log('Close add');
    $('#add-benef-frame').animate({height: 'hide'}, 0);
    $('#update-benef-frame').animate({height: 'show'}, 0);
})

$('#button-add-done').on('click',function() {
    console.log('Done event');
    if ($('#button-add-done').text = 'Done') {
        console.log('Done pressed');
        $('#add-benef-frame').animate({height: 'hide'}, 0);
        $('#update-benef-frame').animate({height: 'show'}, 0);
    }
})
