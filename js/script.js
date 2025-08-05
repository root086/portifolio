    lucide.createIcons();
    function toggleMenu() {
      const sidebar = document.querySelector('.sidebar');
      const overlay = document.querySelector('.overlay');
      sidebar.classList.toggle('open');
      overlay.classList.toggle('show');
    }