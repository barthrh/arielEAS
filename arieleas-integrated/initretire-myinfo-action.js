// Actions for the various buttons and links.

$('#button-add-cancel').on('click',function() {
    $('#add-benef-frame').animate({height: 'hide'}, 0);
    $('#update-benef-frame').animate({height: 'show'}, 0);
})

$('#link-addbenny-pri').on('click'),function() {
    console.log('primary');
    $('#add-benef-frame').animate({height: 'show'}, 0);
    $('#update-benef-frame').animate({height: 'hide'}, 0);
}

$('#link-addbenny-sec').on('click'),function() {
    console.log('secondary');
    $('#add-benef-frame').animate({height: 'show'}, 0);
    $('#update-benef-frame').animate({height: 'hide'}, 0);
}
