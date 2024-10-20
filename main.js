// AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  easing: "ease",
  once: true,
  offset: 50,
});

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".custom-nav");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      // Calculate offset for fixed navbar
      const navbarHeight = document.querySelector(".custom-nav").offsetHeight;
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = targetPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Update Active Link Di Navbar
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.pageYOffset >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active");
    }
  });
});

const revealOnScroll = function () {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((reveal) => {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;
    const revealPoint = 50;

    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const heroSection = document.querySelector(".hero-section");
  heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});

// Back to Top Button
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Progress Bar
window.addEventListener("scroll", function () {
  const scrollPosition = document.documentElement.scrollTop;
  const documentHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollPercentage = (scrollPosition / documentHeight) * 100;

  document.getElementById("progressBar").style.width = scrollPercentage + "%";
});

// Gallery data and effects
document.addEventListener("DOMContentLoaded", function () {
  const galleryData = [
    {
      title: "Akane's Contemplation",
      description:
        "Close-up of Akane Kurokawa's distinctive blue eyes reflecting a moment of deep thought.",
      tags: ["Distinctive", "Moment", "Deep Thought"],
    },
    {
      title: "Peaceful Dreams",
      description:
        "Serene sleeping expression with blue-tinted hair against purple-lit background.",
      tags: ["Serene", "Expression", "blue-tinted"],
    },
    {
      title: "Winter Joy",
      description:
        "Cheerful character in white turtleneck sweater surrounded by soft, dreamy bokeh effects.",
      tags: ["Cheerful", "Soft", "Dreamy"],
    },
    {
      title: "Akane at School",
      description:
        "Akane Kurokawa in her school attire, capturing her composed demeanor and elegant presence.",
      tags: ["Composed", "School", "Elegant"],
    },
    {
      title: "Autumn with Akane",
      description:
        "Akane Kurokawa's cheerful side shown through her gentle smile and stylish urban outfit.",
      tags: ["Gentle", "Cheerful", "Stylish"],
    },
    {
      title: "Mystical Gaze",
      description:
        "Close-up portrait featuring striking crimson eyes with unique patterns and silvery-white hair",
      tags: ["Striking", "Crimson Eyes", "Silvery-White Hair"],
    },
  ];

  // Populate gallery items with data
  const galleryItems = document.querySelectorAll(".gallery-item");
  galleryItems.forEach((item) => {
    const index = parseInt(item.dataset.galleryIndex);
    const data = galleryData[index];

    if (data) {
      const title = item.querySelector(".gallery-title");
      const description = item.querySelector(".gallery-description");
      const tags = item.querySelector(".gallery-tags");

      if (title) title.textContent = data.title;
      if (description) description.textContent = data.description;
      if (tags) {
        tags.innerHTML = data.tags
          .map((tag) => `<span class="gallery-tag">#${tag}</span>`)
          .join(" ");
      }
    }
  });
});
