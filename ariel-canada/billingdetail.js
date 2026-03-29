// Start by disabling form submissions
$('#form-autopay').submit(function() {
  return false;
});

$('#form-makepay').submit(function() {
  return false;
});



// Setup
$( document ).ready(function() {
  $('#billingcontent-billing').css('display', 'flex');
  $('#billingcontent-payments').hide();
  $('#billingcontent-profile').hide();

  $('#billingpay-automsg-on').hide();
  $('#billingpay-automsg-off').show();

  $('#makepay-field-acctname').val("Mark's Checking");
  $('#makepay-field-acctno').val("******456");

  $('#makepay-pane').hide();
  $('#makepay-pane').animate({ right: '-350px' }, 0);

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

$('#button-makepay').on('click', function(){
  $('#makepay-pane').show();
  $('#makepay-pane').animate({ right: '0px' }, 300);

});

$('#button-makepay-cancel').on('click', function(){
  $('#makepay-pane').animate({ right: '-350px' }, 300, function(){
    $('#makepay-pane').hide();
  });
});

$('input[name="payType"]:checked').on('change', function() {
  if ($('input[name="amount"]:checked').val() == 'onetime') {
    $('#form-makepay-onetime').show();
  } else {
    $('#form-makepay-onetime').hide();

  }

})



function setTabStyle(tabName,newStatus) {
    var jqID = "#" + tabName;
    var tabClass = $(jqID).attr('class');
    var statusClass = "billingdetailtab-" + newStatus;

    $(jqID).removeClass(tabClass);
    $(jqID).addClass(statusClass);
 }

