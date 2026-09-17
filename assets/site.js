// Shared site chrome: footer year, nav scroll-edge, and scroll reveals.
(function () {
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var nav = document.querySelector('.nav');
  if (nav) {
    var setScrolled = function () {
      nav.classList.toggle('is-scrolled', window.scrollY > 4);
    };
    setScrolled();
    window.addEventListener('scroll', setScrolled, { passive: true });
  }

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealables = document.querySelectorAll('.reveal');

  if (!revealables.length) return;

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealables.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  revealables.forEach(function (el) { observer.observe(el); });
})();
