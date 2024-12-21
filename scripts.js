// scripts.js

// Get all the navigation links
const navLinks = document.querySelectorAll(".sidebar ul li a");

// Listen for scroll events to highlight the active section
window.addEventListener("scroll", () => {
  let currentSection = "";

  // Loop through each section to check which one is currently in view
  document.querySelectorAll(".section").forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });

  // Remove the 'active' class from all links
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });
});

// Add click event to navigation links
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Scroll to the section
    const sectionId = link.getAttribute("href").slice(1); // Get the section id from href
    const section = document.getElementById(sectionId);

    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });

    // Add the active class to the clicked link
    navLinks.forEach((link) => link.classList.remove("active"));
    link.classList.add("active");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".sidebar ul li a");

  // Get the current hash from the URL
  const currentHash = window.location.hash || "#home"; // Default to #home

  links.forEach((link) => {
    // Remove active class from all links
    link.classList.remove("active");

    // Add active class to the link matching the current hash
    if (link.getAttribute("href") === currentHash) {
      link.classList.add("active");
    }
  });

  // Add click event listener to update active link
  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((l) => l.classList.remove("active")); // Remove from all
      link.classList.add("active"); // Add to clicked link
    });
  });
});
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
