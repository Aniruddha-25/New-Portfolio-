const navLinks = document.querySelectorAll(".sidebar ul li a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const sectionId = link.getAttribute("href").slice(1); // Get the section id from href
    const section = document.getElementById(sectionId);

    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });

    navLinks.forEach((link) => link.classList.remove("active"));
    link.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".sidebar ul li a");

  const currentHash = window.location.hash || "#home"; // Default to #home

  links.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === currentHash) {
      link.classList.add("active");
    }
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
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

document
  .querySelector(".feedback-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const passkey = formData.get("passkey");

    if (passkey === "18fca1a1-7146-4ca5-ab50-e4bd67bed5d8") {
      alert("Form submitted successfully!");
    } else {
      alert("Invalid passkey. Form submission failed.");
    }
  });

document.addEventListener("DOMContentLoaded", () => {
  const photo = document.querySelector(".PersonalPhoto");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          photo.classList.add("visible"); 
        } else {
          photo.classList.remove("visible"); 
        }
      });
    },
    {
      threshold: 0.5, 
    }
  );

  observer.observe(photo);
});

document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll(".skill"); // Select all skill items

  // Create an Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Add 'visible' class when in view
        } else {
          entry.target.classList.remove("visible"); // Remove 'visible' class when out of view
        }
      });
    },
    {
      threshold: 0.2, // Trigger when 20% of the element is visible
    }
  );

  // Observe each skill item
  skills.forEach((skill) => observer.observe(skill));
});

document.addEventListener("DOMContentLoaded", () => {
  const scrollElements = document.querySelectorAll(".scroll-animation");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Add 'visible' class when in view
        } else {
          entry.target.classList.remove("visible"); // Remove 'visible' class when out of view
        }
      });
    },
    {
      threshold: 0.2, 
    }
  );


  scrollElements.forEach((el) => observer.observe(el));
});

