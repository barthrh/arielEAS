// Tab switching for insurance content.

console.log('Insurance profile loaded...');

$( document ).ready(function() {
    console.log('Ready!');
    showMedicalContent();
})


$('#nav-medical-tab').on('click',function() {
    showMedicalContent();
})

$('#nav-dental-tab').on('click',function() {
    $('#nav-dental-text').css('color','#0078AB');
    $('#nav-dental-arrow').animate({height: 'show'}, 0);

    $('#nav-medical-text').css('color','#595959');
    $('#nav-medical-arrow').animate({height: 'hide'}, 0);

    $('#nav-dental-content').animate({height: 'show'}, 300);
    $('#nav-medical-content').animate({height: 'hide'}, 300);

    $('#page-title-text').text('Health - Dental coverage');

})

function showMedicalContent() {
    console.log('show medical');
    
    $('#nav-medical-text').css('color','#0078AB');
    $('#nav-medical-arrow').animate({height: 'show'}, 0);

    $('#nav-medical-text').css('color','#595959');
    $('#nav-medical-arrow').animate({height: 'hide'}, 0);

    $('#nav-dental-content').animate({height: 'hide'}, 300);
    $('#nav-medical-content').animate({height: 'show'}, 300);

    $('#page-title-text').text('Health - Medical coverage');
}