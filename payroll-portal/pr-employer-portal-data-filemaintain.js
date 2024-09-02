$('#multirow-delete').on('click',function(){
    var multiblock = $(this).closest('prer-dataentry-multirow-block');
    
    var multiblock2 = $(this).parent().parent();

    multiblock.hide();
    multiblock.animate({height: 'show'}, 500);

    multiblock2.hide();
    multiblock2.animate({height: 'show'}, 500);

    console.log(multiblock);

});
