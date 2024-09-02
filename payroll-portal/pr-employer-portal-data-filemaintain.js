$('#multirow-delete').on('click',function(){
    var multiblock = $(this).closest('div.prer-dataentry-multirow-block');
    
    var multiblock2 = $(this).parent().parent();

    multiblock2.animate({height: 'hide'}, 500);

    console.log(multiblock);
    console.log(multiblock2);

});

$('#multirow-add').on('click',function(){
    
    var multiblock1 = $(this).parent();
    var multiblock2 = $(this).parent().parent();
    var multiblock3 = $(this).parent().parent().next('div.prer-dataentry-multirow-block.hide');

    console.log(multiblock1);
    console.log(multiblock2);
    console.log(multiblock3);

});

$('#hideblock').on('click',function(){
    console.log($(this));
});

// multiblock-paysources1