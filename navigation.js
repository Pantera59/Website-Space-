
const nav = document.querySelector('#primary-navigation');
const hamburger = document.querySelector('.mobile-nav-toggle');

hamburger.addEventListener('click', () => {
  const isVisible = nav.getAttribute('data-visible');

  if (isVisible === 'false' || isVisible === null) {
    nav.setAttribute('data-visible', 'true');
    hamburger.setAttribute('aria-expanded', 'true');
  } else {
    nav.setAttribute('data-visible', 'false');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});
