$( document ).ready(function() {
  $('#menuitem-medical').addClass('active');
  $('#menuitem-dental').removeClass('active');
  $('#menuitem-vision').removeClass('active');

  $('#menucontent-medical').removeClass('hide');
  $('#menucontent-dental').addClass('hide');
  $('#menucontent-vision').addClass('hide');

});


$('#menuitem-medical').on('click', function() {
  $('#menuitem-medical').addClass('active');
  $('#menuitem-dental').removeClass('active');
  $('#menuitem-vision').removeClass('active');

  $('#menucontent-medical').removeClass('hide');
  $('#menucontent-dental').addClass('hide');
  $('#menucontent-vision').addClass('hide');
});

$('#menuitem-dental').on('click', function() {
  $('#menuitem-medical').removeClass('active');
  $('#menuitem-dental').addClass('active');
  $('#menuitem-vision').removeClass('active');

  $('#menucontent-medical').addClass('hide');
  $('#menucontent-dental').removeClassClass('hide');
  $('#menucontent-vision').addClass('hide');
});

$('#menuitem-vision').on('click', function() {
  $('#menuitem-medical').removeClass('active');
  $('#menuitem-dental').removeClass('active');
  $('#menuitem-vision').addClass('active');

  $('#menucontent-medical').addClass('hide');
  $('#menucontent-dental').addClass('hide');
  $('#menucontent-vision').removeClass('hide');
});



