
$('#button-article-abouttheplan').on('click', function() {
    $('#tile-abouttheplan').animate({width: '100vw'},300);
    $('#tile-abouttheplan').animate({minWidth: '700px'},{duration: 300, queue: false});
    $('#tilelarge-abouttheplan').animate({opacity: 'show'},300);
    $('#tilesmall-abouttheplan').animate({width: 'hide'},{duration: 0, queue: false});
});

$('#button-shrink-abouttheplan').on('click', function() {
    $('#tile-abouttheplan').animate({width: '250px'},300);
    $('#tile-abouttheplan').animate({minWidth: '250px'},{duration: 300, queue: false});
    $('#tilelarge-abouttheplan').animate({opacity: 'hide'},0);
    $('#tilesmall-abouttheplan').animate({width: 'show'},{duration: 0, queue: false});
});

$('#button-article-retirementinfo').on('click', function() {
    $('#tile-retirementinfo').animate({width: '100vw'},300);
    $('#tile-retirementinfo').animate({minWidth: '700px'},{duration: 300, queue: false});
    $('#tilelarge-retirementinfo').animate({opacity: 'show'},300);
    $('#tilesmall-retirementinfo').animate({width: 'hide'},{duration: 0, queue: false});
});

$('#button-shrink-retirementinfo').on('click', function() {
    $('#tile-retirementinfo').animate({width: '250px'},300);
    $('#tile-retirementinfo').animate({minWidth: '250px'},{duration: 300, queue: false});
    $('#tilelarge-retirementinfo').animate({opacity: 'hide'},0);
    $('#tilesmall-retirementinfo').animate({width: 'show'},{duration: 0, queue: false});
});