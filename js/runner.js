$(function() {
  var x = document.querySelector('.loader');

  function hideLoader() {
    setTimeout(function() {
      x.style.display = 'none';
    }, 4000)
    
  }

  x.addEventListener("webkitAnimationEnd", hideLoader);
  x.addEventListener("animationend", hideLoader);
});