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
console.log($('#name').text());

// event listener for submit and validation
$('button').click(function(event) {
  // prevent page from submitting
  event.preventDefault();
  // verify name field
  checkName();
  // verify valid email address
  checkEmail();
  // check job role "other" text field
  checkOther();
  // check t-shirt info
  checkShirt();
  // check enrollment in at least 1 conference
  checkActEnroll();
  // check for a payment method selection
  checkPayMethod();
});


// *** set up functins to run validation

// set up variables to hold the color changes
var cBlack = '#000';
var cTeal = '#c1deeb';
var cRed = '#b73333';
var cPink = '#f9aeae';

// set up standard error clear function
function errorFunc(mainId, titleMsg, cTxt, secondId, cBckgd) {
  $(mainId).prev().text(titleMsg);
  $(mainId).prev().css({
    'color': cTxt
  });
  $(secondId).css({
    'background': cBckgd
  });
}

// name
function checkName() {
  if ($('#name').val().length > 0) {
    errorFunc('#name', 'Name:', cBlack, '#name', cTeal);
  } else {
    errorFunc('#name', 'Please enter your name!', cRed, '#name', cPink);
  }
};

// email
function checkEmail() {
  var $regEmail = $('#mail').val();
  if ($regEmail.length > 0 && $regEmail.indexOf('@') >= 0) {
    errorFunc('#mail', 'Email:', cBlack, '#mail', cTeal);
  } else {
    errorFunc('#mail', 'Please enter valid email address!', cRed, '#mail', cPink);
  }
};
// other text
function checkOther() {
  var $jobValue = $('#title option:selected').val();
  if ($jobValue === 'other') {
    if ($('#other-title').val().length > 0) {
      errorFunc('#title', 'Job Role', cBlack, '#other-title', cTeal);
    } else {
      errorFunc('#title', 'Please enter your job title!', cRed, '#other-title', cPink);
    }
  } else {
    errorFunc('#title', 'Job Role', cBlack, '#other-title', cTeal);
  }
};
// check shirt
function checkShirt() {
  if ($('#design option:selected').val() === 'js puns' || $('#design option:selected').val() === 'heart js') {
    errorFunc('#design', 'Design:', cBlack, '#design', cTeal);
  } else {
    errorFunc('#design', 'Please choose a T-Shirt design!', cRed, '#design', cPink);
  }
}
// checck activities
function checkActEnroll() {
  if ($('.activities input:checked').length > 0) {
    $('.activities legend').text('Register for Activities');
    $('.activities legend').css({
      'color': '#184f68'
    });
    $('.activities label').css({
      'background': '#85b5ca'
    });
  } else {
    $('.activities legend').text('You must at least sing up for at least 1 conference or workshop!');
    $('.activities legend').css({
      'color': cRed
    });
    $('.activities label').css({
      'background': cPink
    });
  }
}
// check pay method
function checkPayMethod() {
  if ($('#payment option:selected').val() !== 'select_method') {
    errorFunc('#payment', 'I\'m going to pay with:', cBlack, '#payment', cTeal);
  } else {
    errorFunc('#payment', 'Please select a payment method!', cRed, '#payment', cPink);
  }
}



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
