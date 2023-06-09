
$('#button-article-abouttheplan').on('click', function() {
    $('#tile-abouttheplan').animate({width: '100vw'},300);
    $('#tilesmall-abouttheplan').animate({width: 'hide'},{duration: 300, queue: true});
    $('#tilelarge-abouttheplan').animate({height: 'show'},300);
});

$('#button-shrink-abouttheplan').on('click', function() {
    $('#tilelarge-abouttheplan').animate({width: 'hide'},300);
    $('#tile-abouttheplan').animate({width: '250px'},300);
    $('#tilesmall-abouttheplan').animate({width: 'show'},{duration: 300, queue: false});
});