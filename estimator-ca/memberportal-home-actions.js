
$('#button-article-abouttheplan').on('click', function() {
    console.log('pong!');
    $('#tile-abouttheplan').animate({width: '100vw'},300);
    $('#tilesmall-abouttheplan').animate({width: 'hide'},{duration: 300, queue: false});
    $('#tilelarge-abouttheplan').animate({width: 'show'},{duration: 100, queue: false});
});

$('#button-shrink-abouttheplan').on('click', function() {
    console.log('ping!');
    $('#tilelarge-abouttheplan').animate({width: 'hide'},300);
    $('#tile-abouttheplan').animate({width: '250px'},300);
    $('#tilesmall-abouttheplan').animate({width: 'show'},{duration: 300, queue: false});
});