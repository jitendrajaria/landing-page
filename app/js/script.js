window.onload = () => {
  const menu = document.querySelector('#burgerMenu');
  // const backdrop = document.querySelector('#backdrop');
  const header = document.querySelector('header');
  const body = document.querySelector('body');

  menu.addEventListener('click', () => {
    if (header.classList.contains('open')) {
      body.style.overflow = 'auto';
      header.classList.remove('open');
    } else {
      body.style.overflow = 'hidden';
      header.classList.add('open');
    }
  })
}
