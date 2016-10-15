// 11 STEPS FOR PROJECT COPLETION

// Create and lin a JS file to index.html - *** DONE

// Set focus on the first text field - *** DONE
$(document).ready(function() {
  $('#name').focus();
});
// Reveal text field for Job Role: Other selection
var otherField = $('<input type="text" id="other-title" placeholder="Your Title">');
$('fieldset:eq(0)').append(otherField);
$('#other-title').hide();
$('#title').on('change', function() {
  if ($('#title option:selected').val() === 'other') {
    $('#other-title').show();
  }
});

//Hide/Show T-Shirt options dynamically through selection ***DONE
var $shirtDesign = $('.shirt div:eq(1)');
var $shirtColorDiv = $('.shirt div:eq(2)');
var $shirtColorOptions = $('#color option');
$shirtColorDiv.hide();
$shirtColorOptions.hide();
$shirtDesign.on('change', function() {
  // Pair T-Shirt color selectins dynamically
  if ($('#design option:selected').val() === 'js puns') {
    $shirtColorOptions.hide();
    $('#color option:eq(0)').show();
    $('#color option:eq(1)').show();
    $('#color option:eq(2)').show();
  } else {
    $shirtColorOptions.hide();
    $('#color option:selected').val('tomato');
    $('#color option:eq(3)').show();
    $('#color option:eq(4)').show();
    $('#color option:eq(5)').show();
  }
  $shirtColorDiv.show();
});

// Calcualte Registration total and block out conflicts

// Dynamic pay info selection

// Display error messages for incomplete data

// Clear any syntax errors

// Syle selecttion menus to match page

// Add Credit Card Valition
