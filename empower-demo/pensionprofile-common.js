
$('#nav-tab-personal').on('click',function() {
    window.location.href = 'pension-profile-personal';
});

$('#nav-tab-employment').on('click',function() {
    window.location.href = 'pension-profile-employment';
});

$('#nav-tab-membership').on('click',function() {
    let planType = localStorage.getItem('plan-type');

    if (planType == 'cashbal') {
        window.location.href = 'pension-profile-membership';
    } else {
        window.location.href = 'pension-profile-cashbal';
    }
});
