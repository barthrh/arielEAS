
$( document ).ready(function() {
    $('#tile-abouttheplan').animate({width: '250px'},0);
    $('#tile-abouttheplan').css('min-width','250px');
    $('#tilelarge-abouttheplan').animate({opacity: 'hide'},0);
    $('#tilesmall-abouttheplan').animate({width: 'show'},{duration: 0, queue: false});
    console.log( "ready!" );
  });
