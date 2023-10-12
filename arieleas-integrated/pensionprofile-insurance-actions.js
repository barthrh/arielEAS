// Tab switching for insurance content.

console.log('Insurance profile loaded...');

$( document ).ready(function() {
    console.log('Ready!');
    showMedicalContent();
    showLifeContent();
})


$('#nav-medical-tab').on('click',function() {
    showMedicalContent();
    $('#page-title-text').text('Health - Medical coverage');
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

    $('#nav-dental-text').css('color','#595959');
    $('#nav-dental-arrow').animate({height: 'hide'}, 0);

    $('#nav-dental-content').animate({height: 'hide'}, 300);
    $('#nav-medical-content').animate({height: 'show'}, 300);

}

$('#nav-life-tab').on('click',function() {
    showLifeContent();
    $('#page-title-text').text('Life Insurance - Member');
})

$('#nav-beneficiary-tab').on('click',function() {
    $('#nav-beneficiary-text').css('color','#0078AB');
    $('#nav-beneficiary-arrow').animate({height: 'show'}, 0);

    $('#nav-life-text').css('color','#595959');
    $('#nav-life-arrow').animate({height: 'hide'}, 0);

    $('#nav-beneficiary-content').animate({height: 'show'}, 300);
    $('#nav-life-content').animate({height: 'hide'}, 300);

    $('#page-title-text').text('Life Insurance - Beneficiaries');

})

function showLifeContent() {
    console.log('show life');

    $('#nav-life-text').css('color','#0078AB');
    $('#nav-life-arrow').animate({height: 'show'}, 0);

    $('#nav-beneficiary-text').css('color','#595959');
    $('#nav-beneficiary-arrow').animate({height: 'hide'}, 0);

    $('#nav-beneficiary-content').animate({height: 'hide'}, 300);
    $('#nav-life-content').animate({height: 'show'}, 300);

}