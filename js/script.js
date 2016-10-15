// 11 STEPS FOR PROJECT COPLETION

// Create and lin a JS file to index.html - *** DONE

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

// Append span to hold conf total.
$('.activities').append('<span id="total"></span>');
$('.activities input:eq(0)').addClass('mainConf');

// Calcualte Registration total and block out conflicts
var checkTotal = function() {
  var checked = $('.activities input:checked').length * 100;
  if ($('.mainConf').prop('checked')) {
    checked += 100;
  }
  $('#total').text('Total: $' + checked);
};
checkTotal();
$('.activities input:checkbox').on('click', checkTotal);


// Dynamic pay info selection
$('#credit-card').hide();


// Display error messages for incomplete data

// Clear any syntax errors

// Syle selecttion menus to match page

// Add Credit Card Valition
