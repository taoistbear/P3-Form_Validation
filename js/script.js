//******************************************************************************
// 11 STEPS FOR PROJECT COPLETION
//******************************************************************************

//******************************************************************************
// CREATE AND LINK A JS FILE TO INDEX.HTML - *** DONE
//******************************************************************************

//******************************************************************************
// SET FOCUS TO FIRST FIELD- *** DONE
//******************************************************************************

$(document).ready(function() {
  $('#name').focus();
});

//******************************************************************************
// REVEAL/HIDE TEXT FIELD FOR JOB ROLE SELCETION - OTHER - *** DONE
//******************************************************************************

$('fieldset:eq(0)').append('<input type="text" id="other-title" placeholder="Your Title">');
$('#other-title').hide();
$('#title').on('change', function() {
  if ($('#title option:selected').val() === 'other') {
    $('#other-title').show();
  } else {
    $('#other-title').hide();
  }
});

//******************************************************************************
// REVEAL/HIDE T-SHIRT SELECTION BASED ON VALUE - *** DONE
//******************************************************************************

var $shirtDesign = $('.shirt div:eq(1)');
var $shirtColorDiv = $('.shirt div:eq(2)');
var $shirtColorOptions = $('#color option');
$shirtColorDiv.hide();
$shirtColorOptions.hide();
$shirtDesign.change(function() {
  // Pair T-Shirt color selectins dynamically
  if ($('#design option:selected').val() === 'js puns') {
    $('#color option:eq(0)').prop('selected', 'selected').show();
    $('#color option:eq(1)').show();
    $('#color option:eq(2)').show();
    $('#color option:eq(3)').hide();
    $('#color option:eq(4)').hide();
    $('#color option:eq(5)').hide();
    $shirtColorDiv.show();
  } else if ($('#design option:selected').val() === 'heart js'){
    $('#color option:eq(0)').hide();
    $('#color option:eq(1)').hide();
    $('#color option:eq(2)').hide();
    $('#color option:eq(3)').prop('selected', 'selected').show();
    $('#color option:eq(4)').show();
    $('#color option:eq(5)').show();
    $shirtColorDiv.show();
  } else {
    $shirtColorDiv.hide();
  }
});

//******************************************************************************
// CACLUATE REGISTRATION TOTAL WITH DYMAIC OPTIONS - *** DONE
//******************************************************************************

// function to cycle through each checkbox
var checkActivities = function() {
  // Append span to hold conf total.
  $('.activities').append('<span id="total"></span>');
  $('.activities input:eq(0)').addClass('mainConf');
  // Calculate total based on options checked
  var checked = $('.activities input:checked').length * 100;
  if (checked > 0) {
    if ($('.mainConf').prop('checked')) {
      checked += 100;
    }
    $('#total').text('Total: $' + checked);
  } else {
    $('#total').remove();
  }

  // enable open blocks
  $('.activities input').each(function() {
    $(this).parent().removeClass('conflict');
    $(this).prop('disabled', false);
  })

  // disable conflict blocks
  $('.activities label').each(function() {
    if ($(this).find('input').prop('checked')) {
      var $timeSlot = $(this).text().split('Workshop').pop();
      $('.activities label').each(function() {
        if (!$(this).find('input').prop('checked')) {
          if ($(this).text().indexOf($timeSlot) >= 0) {
            $(this).addClass('conflict');
            $(this).find('input').prop('disabled', true);
          }
        }
      });
    }
  });
};
$('.activities input:checkbox').on('click', checkActivities);


//******************************************************************************
// DYMANIC PAY INFO
//******************************************************************************

// set up variables to hold a quick reference and to hide dynamic options
var $creditCard = $('#credit-card');
var $payPal = $('#credit-card').next();
var $bitcoin = $payPal.next();
$creditCard.hide();
$payPal.hide();
$bitcoin.hide();
// set up event listenr and function to control payment info
$('#payment').change(function() {
  if ($('#payment option:selected').val() == 'credit card') {
    $creditCard.show();
    $payPal.hide();
    $bitcoin.hide();
  } else if ($('#payment option:selected').val() == 'paypal') {
    $creditCard.hide();
    $payPal.show();
    $bitcoin.hide();
  } else if ($('#payment option:selected').val() == 'bitcoin') {
    $creditCard.hide();
    $payPal.hide();
    $bitcoin.show();
  } else {
    $creditCard.hide();
    $payPal.hide();
    $bitcoin.hide();
  }
});


//******************************************************************************
// Display error messages for incomplete data
//******************************************************************************

//******************************************************************************
// Clear any syntax errors
//******************************************************************************

//******************************************************************************
// Syle selecttion menus to match page - *** DONE
//******************************************************************************

$('select').css({
  'background': '#c1deeb',
  'color': '#184f68'
});

//******************************************************************************
// Add Credit Card Valition
//******************************************************************************
