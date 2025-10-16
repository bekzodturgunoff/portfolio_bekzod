(() => {
  const els = document.querySelectorAll('[data-reveal]');
  const obs = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('reveal-in');
        obs.unobserve(e.target);
      }
    }
  }, { threshold: 0.15 });
  els.forEach((el) => obs.observe(el));
})();
