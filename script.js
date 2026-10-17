const menuButton = document.querySelector('.menu-toggle');
    const nav = document.querySelector('#primary-nav');
    menuButton.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });
    document.querySelector('#year').textContent = new Date().getFullYear();
