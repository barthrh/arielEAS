// Actions for the various buttons and links.
console.log('Myinfo-actions loaded.');

$('#button-add-cancel').on('click',function() {
    console.log('cancel the add');
    $('#enter-beneficiary-frame').animate({height: 'hide'}, 0);
})

$('#link-addbenny-pri').on('click',function() {
    console.log('primary');
    $('#add-benef-frame').animate({height: 'show'}, 0);
    $('#update-benef-frame').animate({height: 'hide'}, 0);
})

$('#link-addbenny-sec').on('click',function() {
    console.log('secondary');
    $('#add-benef-frame').animate({height: 'show'}, 0);
    $('#update-benef-frame').animate({height: 'hide'}, 0);
})

$('#link-addnew-beneficiary').on('click',function(){
    console.log('summon the add');
    $('#enter-beneficiary-frame').animate({height: 'hide'}, 0);
})