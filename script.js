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

// Contact form: Web3Forms handles delivery. This handler only adds analytics and status feedback.
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', () => {
  const interest = contactForm.elements.interest.value;
  window.trackTourismEvent?.('generate_lead', { visitor_interest: interest });
  document.getElementById('formStatus').textContent = 'Sending your inquiry…';
});
