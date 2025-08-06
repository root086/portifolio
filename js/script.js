  lucide.createIcons();

  function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    const menuIcon = document.getElementById('menuIcon');

    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');

    if (sidebar.classList.contains('open')) {
      menuIcon.setAttribute("data-lucide", "x");
    } else {
      menuIcon.setAttribute("data-lucide", "menu");
    }
  }

    function scrollToProjects(event) {
    event.preventDefault(); 
    const section = document.getElementById("project");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }