
$('#button-article-abouttheplan').on('click', function() {
    $('#tile-abouttheplan').animate({width: '100vw'},300);
    $('#tilelarge-abouttheplan').animate({opacity: 'show'},300);
    $('#tilesmall-abouttheplan').animate({width: 'hide'},{duration: 0, queue: false});
});

$('#button-shrink-abouttheplan').on('click', function() {
    $('#tile-abouttheplan').animate({width: '250px'},300);
    $('#tilelarge-abouttheplan').animate({opacity: 'hide'},0);
    $('#tilesmall-abouttheplan').animate({width: 'show'},{duration: 0, queue: false});
});

