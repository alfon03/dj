document.addEventListener("DOMContentLoaded", function () {
  function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const navbar = document.querySelector(".navbar");

    sidebar.classList.toggle("active");
    navbar.classList.toggle("hidden");
  }

  document.querySelector(".menu-btn").addEventListener("click", toggleSidebar);
  document.querySelector(".close-btn").addEventListener("click", toggleSidebar);
});
