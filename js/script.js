  lucide.createIcons();

  function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    const icon = document.getElementById('menuIcon');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
    if (icon.getAttribute('data-lucide') === 'menu') {
      icon.setAttribute('data-lucide', 'x');
    } else {
      icon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
  }
