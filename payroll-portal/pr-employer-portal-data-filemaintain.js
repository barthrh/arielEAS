$('.prer-dataentry-multirow-delbutton').on('click',function(){

    var multiblock = $(this).closest('div.prer-dataentry-multirow-block');
    
    multiblock.animate({height: 'hide'}, 500);
});


$('.prer-dataentry-multirow-addbutton').on('click',function(){

    var hideblock = $(this).parent().parent().children('.hide');

    hideblock.animate({height: 'show'}, 500);
});

$('#button-cancel').on('click',function(){

    $('#button-validate').hide();

    $('#manualentry-block').animate({height: 'hide'}, 500);
    $('#datalist-empty').show();

});

$('#button-addmanual').on('click',function()
{
    $('#button-validate').show();

    $('#manualentry-block').animate({height: 'show'}, 500);
    $('#datalist-empty').hide();


});