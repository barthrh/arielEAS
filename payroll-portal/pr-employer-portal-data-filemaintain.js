$('#multirow-delete').on('click',function(){
    var multiblock = $(this).closest('prer-dataentry-multirow-block');
    
    var multiblock2 = $(this).parent().parent();

    multiblock2.animate({height: 'hide'}, 500);

    console.log(multiblock);
    console.log(multiblock2);

});
