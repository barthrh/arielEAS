


$('#button-article-abouttheplan').on('click', function(){
    $('#tile-abouttheplan').animate({width: '100vw'},300);
    $('#tilesmall-abouttheplan').animate('hide',{duration: 300, queue: false});
    $('#tilelarge-abouttheplan').animate({width: '100%'},300);
})

$('#button-shrink-abouttheplan').on('click', function(){
    $('#tilelarge-abouttheplan').animate('hide',300);
    $('#tile-abouttheplan').animate({width: '250px'},300);
    $('#tilesmall-abouttheplan').animate('show',{duration: 300, queue: false});
})