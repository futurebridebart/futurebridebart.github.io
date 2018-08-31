$(function() {
  var x = document.querySelector('.loader');

  function hideLoader() {
    setTimeout(function() {
      x.style.display = 'none';
      $('body').removeClass('hide-overflow');
    }, 4000)
    
  }

  x.addEventListener("webkitAnimationEnd", hideLoader);
  x.addEventListener("animationend", hideLoader);
});