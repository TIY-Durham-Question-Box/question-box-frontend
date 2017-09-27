window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(f){setTimeout(f, 1000/60)};
  var parallax1 = document.getElementsByClassName('header-component')[0];
  function parallaxeffect(){
    var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically
    parallax1.style.backgroundPosition = "0px " + -scrolltop * .5 + 'px'
  };
  window.addEventListener('scroll', function(){ // on page scroll
    requestAnimationFrame(parallaxeffect) // call parallaxeffect() every screen paint
  }, false);
