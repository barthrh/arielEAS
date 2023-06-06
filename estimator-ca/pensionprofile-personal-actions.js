// Code to hide or show the menus and content panes

$('#nav-basic-tab').on('click', function(){
    setBasic('show');
    setSurvivor('hide');
    setAuthrep('hide');
})

$('#nav-survivor-tab').on('click', function(){
    setBasic('hide');
    setSurvivor('show');
    setAuthrep('hide');
})

$('#nav-authrep-tab').on('click', function(){
    setBasic('hide');
    setSurvivor('hide');
    setAuthrep('show');
})

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
// nav-authrep-tab