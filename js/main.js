const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
}
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const button = form.querySelector('button');
    if (button) {
      const original = button.textContent;
      button.textContent = 'Message ready to send';
      setTimeout(() => button.textContent = original, 2200);
    }
  });
});
