// 11 STEPS FOR PROJECT COPLETION

// Create and link a JS file to index.html - *** DONE

// Set focus on the first text field - *** DONE
$(document).ready(function() {
  $('#name').focus();
});
// Reveal text field for Job Role: Other selection
$('fieldset:eq(0)').append('<input type="text" id="other-title" placeholder="Your Title">');
$('#other-title').hide();
$('#title').on('change', function() {
  if ($('#title option:selected').val() === 'other') {
    $('#other-title').show();
  } else {
    $('#other-title').hide();
  }
});

//Hide/Show T-Shirt options dynamically through selection ***DONE
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



// Calcualte Registration total
var checkActivities = function() {
  // Append span to hold conf total.
  $('.activities').append('<span id="total"></span>');
  $('.activities input:eq(0)').addClass('mainConf');
  var checked = $('.activities input:checked').length * 100;
  if (checked > 0) {
    if ($('.mainConf').prop('checked')) {
      checked += 100;
    }
    $('#total').text('Total: $' + checked);
  } else {
    $('#total').remove();
  }

  // toggle conflict blocks
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
    } else if ($(this).find('input').prop('disabled')){
      var $disSlot = $(this).text().split('Workshop').pop();
      console.log($disSlot);
      $('.activities label').each(function() {
        if (!$(this).find('input').prop('checked')) {
          console.log($(this).text());
          // if ($(this).text().indexOf($disSlot) >= 0) {
          //   $(this).removeClass('conflict');
          //   $(this).find('input').prop('disabled', false);
          // }
        }
      });
    }
  });
};
$('.activities input:checkbox').on('click', checkActivities);



// Dynamic pay info selection

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


// Display error messages for incomplete data

// Clear any syntax errors

// Syle selecttion menus to match page
$('select').css({
  'background': '#c1deeb',
  'color': '#184f68'
});

// Add Credit Card Valition
