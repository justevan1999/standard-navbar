document.addEventListener("DOMContentLoaded", () => {
    const menu_toggle = document.getElementById("menu_toggle");
    menu_toggle.addEventListener("click", () => {
      const mobile_nav = document.getElementById("sm_ul");
      mobile_nav.classList.toggle("show_menu");
    });
  
    // Highlight the current page in the navigation menu
    const currentPage = window.location.pathname;
    console.log("Current Page:", currentPage);
  
    const navLinks = document.querySelectorAll("nav ul li a");
  
    // Default: Highlight the "Home" link
    const homeLink = document.querySelector("nav ul li a[href='/']");
    homeLink.classList.add("hideee");
  
    navLinks.forEach((link) => {
      const linkPath = link.getAttribute("href");
  
      // Check if the current page exactly matches the link path
      if (currentPage === linkPath) {
        link.classList.add("hideee");
      } else {
        link.classList.remove("hideee");
      }
    });
  });
  