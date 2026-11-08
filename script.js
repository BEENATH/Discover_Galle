const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '×' : '☰';
});

navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}));

// Filter destination cards and record the selected category.
document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const category = button.dataset.filter;
    document.querySelectorAll('.place-card').forEach(card => {
      card.hidden = category !== 'all' && card.dataset.category !== category;
    });
    window.trackTourismEvent?.('destination_filter', { filter_category: category });
  });
});

// Record outbound map and accommodation clicks.
document.querySelectorAll('[data-track]').forEach(link => {
  link.addEventListener('click', () => {
    const payload = { item_name: link.dataset.place || link.dataset.stay || link.dataset.track };
    window.trackTourismEvent?.(link.dataset.track, payload);
  });
});

// Contact form: send through Web3Forms and track a lead only after successful delivery.
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const submitButton = contactForm.querySelector('button[type="submit"]');
    const status = document.getElementById('formStatus');
    const originalButtonText = submitButton.innerHTML;

    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    status.textContent = 'Sending your inquiry…';

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { Accept: 'application/json' }
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Your inquiry could not be sent.');
      }

      const interest = contactForm.elements.interest.value;
      window.trackTourismEvent?.('generate_lead', {
        visitor_interest: interest
      });

      status.textContent = 'Thank you! Your inquiry has been sent successfully.';
      contactForm.reset();
    } catch (error) {
      console.error('Web3Forms submission error:', error);
      status.textContent = 'Sorry, we could not send your inquiry. Please try again.';
    } finally {
      submitButton.disabled = false;
      submitButton.innerHTML = originalButtonText;
    }
  });
}
