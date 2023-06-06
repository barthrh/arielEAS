// Code to hide or show the menus and content panes

$('#nav-basic-tab').on('click', function(){
    $('#nav-basic-text').css('color','#0078AB');
    $('#nav-basic-arrow').animate({height: 'show'}, 500);
    $('#nav-basic-content').animate({height: 'show'}, 500);
})

$('#nav-survivor-tab').on('click', function(){
    setBasic('hide');
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
    $('#nav-basic-arrow').animate({height: showHide}, 500);
    $('#nav-basic-content').animate({height: showHide}, 500);
}

function setAuthrep() {
    //nothing
}
// nav-authrep-tab