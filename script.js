// Toggle Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Form Submission
const reservationForm = document.getElementById('reservation-form');

reservationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Reservation successful! We will contact you shortly.');
  reservationForm.reset();
});