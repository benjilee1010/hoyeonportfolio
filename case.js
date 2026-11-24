(function () {
  var bar = document.querySelector('.progress span');
  var links = Array.prototype.slice.call(document.querySelectorAll('.rail-link'));
  var steps = links.map(function (a) { return document.querySelector(a.getAttribute('href')); });

  function update() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    if (bar) bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';

    var line = window.innerHeight * 0.35;
    var current = -1;
    steps.forEach(function (s, i) { if (s && s.getBoundingClientRect().top <= line) current = i; });
    links.forEach(function (a, i) {
      a.classList.toggle('active', i === current);
      if (i === current) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
