try { 
  new WOW().init(); 
} catch(e) {}

var navToggle = document.getElementById('navToggle');
var navLinks = document.getElementById('navLinks');

if (navToggle) {
  navToggle.addEventListener('click', function() {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(function(a) {
    a.addEventListener('click', function() { 
      navLinks.classList.remove('open'); 
    });
  });
}