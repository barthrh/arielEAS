
$('#button-article-abouttheplan').on('click', function() {
    $('#tile-abouttheplan').animate({width: '100vw'},300);
    $('#tile-abouttheplan').css('min-width','700px');
    $('#tilelarge-abouttheplan').animate({opacity: 'show'},300);
    $('#tilesmall-abouttheplan').animate({width: 'hide'},{duration: 0, queue: false});
});

$('#button-shrink-abouttheplan').on('click', function() {
    $('#tile-abouttheplan').animate({width: '250px'},300);
    $('#tile-abouttheplan').animate({minWidth: '250px'},{duration: 300, queue: false});
    $('#tilelarge-abouttheplan').animate({opacity: 'hide'},0);
    $('#tilesmall-abouttheplan').animate({width: 'show'},{duration: 0, queue: false});
});

