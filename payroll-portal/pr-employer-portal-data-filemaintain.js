$('#multirow-delete').on('click',function(){
    var multiblock = $(this).closest('prer-dataentry-multirow-block')
    
    multiblock.hide();
    multiblock.animate({height: 'show'}, 500);
    console.log(multiblock);
});
