import $ from 'jquery/src/jquery';

import {Foundation} from 'foundation-sites/js/foundation.core';
import {Touch} from 'foundation-sites/js/foundation.util.touch';

window.Foundation.addToJquery($);

function handleRightSwipe () {
  alert('swipe right');
}

function handleLeftSwipe () {
  alert('swipe left');
}

$(document).ready(() => {
  $('body').append('<div class="example">Hi there can you swipe me?</div>');

  Touch.init($);
  $('.example').spotSwipe().on('swipeleft', handleLeftSwipe);
  $('.example').spotSwipe().on('swiperight', handleRightSwipe);
});
