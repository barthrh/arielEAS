// Tab switching for insurance content.

console.log('Insurance profile loaded...');
$('#nav-dental-content').animate({height: 'hide'}, 300);


$('#nav-medical-tab').on('click',function() {
    $('#nav-medical-text').css('color','#0078AB');
    $('#nav-medical-arrow').animate({height: 'show'}, 0);

    $('#nav-medical-text').css('color','#595959');
    $('#nav-medical-arrow').animate({height: 'hide'}, 0);

    $('#nav-dental-content').animate({height: 'hide'}, 300);
    $('#nav-medical-content').animate({height: 'show'}, 300);

})

$('#nav-dental-tab').on('click',function() {
    $('#nav-dental-text').css('color','#0078AB');
    $('#nav-dental-arrow').animate({height: 'show'}, 0);

    $('#nav-medical-text').css('color','#595959');
    $('#nav-medical-arrow').animate({height: 'hide'}, 0);

    $('#nav-dental-content').animate({height: 'show'}, 300);
    $('#nav-medical-content').animate({height: 'hide'}, 300);

})