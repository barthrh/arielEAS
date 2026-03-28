// Start by disabling form submissions
$('#form-ava').submit(function() {
  return false;
});

// Setup
$( document ).ready(function() {
    $('#billingtab-billing').css('display', 'flex');
    $('#billingtab-payments').hide();
    $('#billingtab-profile').hide();

    $('#billingpay-automsg-on').hide();
    $('#billingpay-automsg-off').show();

    console.log( "ready!" );
});

$('#billingtab-billing').on('click', function() {
    setTabStyle('billingtab-billing','active');
    setTabStyle('billingtab-payments','inactive');
    setTabStyle('billingtab-profile','inactive');

    $('#')
});

$('#billingtab-payments').on('click', function() {
    setTabStyle('billingtab-billing','inactive');
    setTabStyle('billingtab-payments','active');
    setTabStyle('billingtab-profile','inactive');
});

$('#billingtab-profile').on('click', function() {
    setTabStyle('billingtab-billing','inactive');
    setTabStyle('billingtab-payments','inactive');
    setTabStyle('billingtab-profile','active');
});


function setTabStyle(tabName,newStatus) {
    var jqID = "#" + tabName;
    var tabClass = $(jqID).attr('class');
    var statusClass = "billingDetailTab-" + newStatus;

    $(jqID).removeClass(tabClass);
    $(jqID).addClass(statusClass);
 }

