(function () {
  'use strict';

  var heroLight = document.getElementById('heroLight');
  var hero = document.getElementById('hero');

  if (hero && heroLight) {
    hero.addEventListener('mousemove', function (e) {
      var rect = hero.getBoundingClientRect();
      var x = ((e.clientX - rect.left) / rect.width);
      var y = ((e.clientY - rect.top) / rect.height);
      var cx = 48 + x * 4;
      var cy = 40 + y * 10;
      heroLight.style.background =
        'radial-gradient(ellipse 70% 60% at ' + cx + '% ' + cy + '%, rgba(255,240,210,0.7) 0%, transparent 60%), ' +
        'radial-gradient(ellipse 50% 80% at 75% 80%, rgba(144,196,232,0.25) 0%, transparent 50%), ' +
        'radial-gradient(ellipse 60% 40% at 20% 90%, rgba(212,148,58,0.12) 0%, transparent 50%), ' +
        'linear-gradient(175deg, #FFF8F0 0%, #FBF3E8 35%, rgba(214,232,245,0.3) 70%, #FFF8F0 100%)';
    });
  }

  var revealElements = document.querySelectorAll(
    '.manifesto-inner, .pillar, .palabras-inner, .terraza-inner, .cta-inner'
  );
  revealElements.forEach(function (el) { el.classList.add('reveal'); });

  function checkReveal() {
    var trigger = window.innerHeight * 0.85;
    revealElements.forEach(function (el) {
      var top = el.getBoundingClientRect().top;
      if (top < trigger) { el.classList.add('visible'); }
    });
  }

  window.addEventListener('scroll', checkReveal, { passive: true });
  window.addEventListener('resize', checkReveal, { passive: true });
  checkReveal();

  var form = document.getElementById('ctaForm');
  var ctaBlock = document.getElementById('ctaBlock');
  var ctaSuccess = document.getElementById('ctaSuccess');
  var emailInput = document.getElementById('emailInput');
  var ctaBtn = document.getElementById('ctaBtn');

  if (form && ctaBlock && ctaSuccess) {
    ctaBtn.addEventListener('click', function (e) {
      e.preventDefault();
      var email = emailInput.value.trim();
      if (email && email.indexOf('@') > -1 && email.indexOf('.') > -1) {
        ctaBlock.style.display = 'none';
        ctaSuccess.style.display = 'block';
        ctaSuccess.classList.add('reveal', 'visible');
      } else {
        emailInput.style.borderColor = '#D93251';
        emailInput.focus();
      }
    });
  }
})();