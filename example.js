import $ from 'jquery/src/jquery';

import {Touch} from 'foundation-sites/js/foundation.util.touch';

window.Foundation.addToJquery($);

$(document).ready(() => {
  function handleRightSwipe () {
    alert('swipe right');
  }

  function handleLeftSwipe () {
    alert('swipe left');
  }

  Touch.init($);
  $('.example').spotSwipe().on('swipeleft', handleLeftSwipe);
  $('.example').spotSwipe().on('swiperight', handleRightSwipe);
});
