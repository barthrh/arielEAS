$('#multirow-delete').on('click',function(){
    var multiblock = $(this).closest('div.prer-dataentry-multirow-block');
    
    var multiblock2 = $(this).parent().parent();

    multiblock2.animate({height: 'hide'}, 500);

    console.log(multiblock);
    console.log(multiblock2);

});

$('#multirow-add').on('click',function(){
    
    var multiblock2 = $(this).parent().parent().next('div.prer-dataentry-multirow-block.hide');

    console.log(multiblock2);

});


// multiblock-paysources1