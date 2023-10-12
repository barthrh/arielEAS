// Actions for the various buttons and links.
console.log('Myinfo-actions loaded.');

$('#button-add-cancel').on('click',function() {
    console.log('cancel the add');
    $('#enter-beneficiary-frame').animate({height: 'hide'}, 100);
    $('#button-add-cancel').animate({height: 'hide'}, 0);
    $('#button-add-done').text('Done');
})

$('#link-addbenny-pri').on('click',function() {
    console.log('primary');
    $('#add-benef-frame').animate({height: 'show'}, 0);
    $('#update-benef-frame').animate({height: 'hide'}, 0);
    $('#button-add-cancel').animate({height: 'hide'}, 0);
    $('#button-add-done').text('Done');
})

$('#link-addbenny-sec').on('click',function() {
    console.log('secondary');
    $('#add-benef-frame').animate({height: 'show'}, 0);
    $('#update-benef-frame').animate({height: 'hide'}, 0);
    $('#button-add-cancel').animate({height: 'hide'}, 0);
    $('#button-add-done').text('Done');
})

$('#link-addnew-beneficiary').on('click',function(){
    console.log('summon the add');
    $('#enter-beneficiary-frame').animate({height: 'show'}, 100);
    $('#button-add-cancel').animate({height: 'show'}, 0);
    $('#button-add-done').text('Add');
})

$('#close-addbenny').on('click',function(){
    console.log('Close add');
    $('#add-benef-frame').animate({height: 'hide'}, 0);
    $('#update-benef-frame').animate({height: 'show'}, 0);
})


$('#button-add-done').on('click',function() {
    console.log('Done event');
    if ($('#button-add-done').text = 'Done') {
        console.log('Done pressed');
        $('#add-benef-frame').animate({height: 'hide'}, 0);
        $('#update-benef-frame').animate({height: 'show'}, 0);
    }
})
