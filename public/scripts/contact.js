document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('contact-status');
  const scriptEl = document.currentScript;
  const apiBase = (scriptEl && scriptEl.dataset && scriptEl.dataset.api) || 'http://localhost:5000';
  if (!form || !status) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = 'Sending...';
    try {
      const body = Object.fromEntries(new FormData(form));
      const res = await fetch(apiBase + '/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      status.textContent = data.ok ? 'Sent!' : (data.error || 'Failed');
      if (data.ok) form.reset();
    } catch (err) {
      status.textContent = 'Failed to send';
    }
  });
});
