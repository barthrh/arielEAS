$('#multirow-delete').on('click',function(){
    var multiblock = $(this).closest('div.prer-dataentry-multirow-block');
    
    var multiblock2 = $(this).parent().parent();

    multiblock2.animate({height: 'hide'}, 500);

    console.log(multiblock);
    console.log(multiblock2);

});

$('#multirow-add').on('click',function(){

    var hideblock = $(this).parent().parent().children('.hide');

    hideblock.animate({height: 'show'}, 500);
    /*    
    var multiblock1 = $(this).parent();
    var multiblock2 = $(this).parent().parent();
    var multiblock3 = $(this).parent().parent().children('div#hideblock.prer-dataentry-multirow-block.hide');
    var multiblock4 = $(this).parent().parent().children('div.prer-dataentry-multirow-block.hide');
    var multiblock5 = $(this).parent().parent().children('.div#hideblock.prer-dataentry-multirow-block.hide');
    var multiblock6 = $(this).parent().parent().children('.div.prer-dataentry-multirow-block.hide');
    var multiblock7 = $(this).parent().parent().children('.hide');
    var multiblock8 = $(this).parent().parent().next('.hide');

    console.log(multiblock1);
    console.log(multiblock2);
    console.log(multiblock3);
    console.log(multiblock4);
    console.log(multiblock5);
    console.log(multiblock6);
    console.log(multiblock7);
    console.log(multiblock8);
*/

});
