// Start by disabling form submissions
$('#form-ava').submit(function() {
  return false;
});

// Setup
$( document ).ready(function() {
    $('#billingcontent-billing').css('display', 'flex');
    $('#billingcontent-payments').hide();
    $('#billingcontent-profile').hide();

    $('#billingpay-automsg-on').hide();
    $('#billingpay-automsg-off').show();

    console.log( "ready!" );
});

$('#billingtab-billing').on('click', function() {
    setTabStyle('billingtab-billing','active');
    setTabStyle('billingtab-payments','inactive');
    setTabStyle('billingtab-profile','inactive');

    $('#billingcontent-billing').css('display','flex');
    $('#billingcontent-payment').hide();
    $('#billingcontent-profile').hide();

});

$('#billingtab-payments').on('click', function() {
    setTabStyle('billingtab-billing','inactive');
    setTabStyle('billingtab-payments','active');
    setTabStyle('billingtab-profile','inactive');

    $('#billingcontent-billing').hide();
    $('#billingcontent-payment').css('display','flex');
    $('#billingcontent-profile').hide();
});

$('#billingtab-profile').on('click', function() {
    setTabStyle('billingtab-billing','inactive');
    setTabStyle('billingtab-payments','inactive');
    setTabStyle('billingtab-profile','active');

    $('#billingcontent-billing').hide();
    $('#billingcontent-payment').hide();
    $('#billingcontent-profile').css('display','flex');;
  });

$('#check-autopay').on('change', function() {
  if ($('#check-autopay').prop("checked") == true) {
      $('#billingsum-autopay-msg').text('Automatic payments are ON');
      $('#billingdetail-autopay-msg').text('Turn OFF automatic payments');
      $('#billingpay-automsg-on').show();
      $('#billingpay-automsg-off').hide();
  } else {
      $('#billingsum-autopay-msg').text('Automatic payments are OFF');
      $('#billingdetail-autopay-msg').text('Turn ON automatic payments');
      $('#billingpay-automsg-on').hide();
      $('#billingpay-automsg-off').show();
  }
});


function setTabStyle(tabName,newStatus) {
    var jqID = "#" + tabName;
    var tabClass = $(jqID).attr('class');
    var statusClass = "billingdetailtab-" + newStatus;

    $(jqID).removeClass(tabClass);
    $(jqID).addClass(statusClass);
 }

