const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    document.querySelector('.contact-form__status').textContent =
      'Demo only — your message has not been sent.';
  });
}
