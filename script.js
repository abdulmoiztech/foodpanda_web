/* ================= MOBILE MENU ================= */
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

if (hamburger && mobileMenu) {
    hamburger.onclick = () => mobileMenu.style.display = "block";
}

if (closeMenu && mobileMenu) {
    closeMenu.onclick = () => mobileMenu.style.display = "none";
}

// document.addEventListener("DOMContentLoaded", () => {
//   const hamburger = document.getElementById("hamburger");
//   const mobileMenu = document.getElementById("mobileMenu");
//   const closeMenu = document.getElementById("closeMenu");

//   hamburger.addEventListener("click", () => {
//     mobileMenu.style.display = "block";
//   });

//   closeMenu.addEventListener("click", () => {
//     mobileMenu.style.display = "none";
//   });
// });


/* ================= LOCATION DROPDOWN (DESKTOP) ================= */
const locationBtn = document.getElementById("locationBtn");
const locationDropdown = document.getElementById("locationDropdown");

if (locationBtn && locationDropdown) {
    locationBtn.onclick = (e) => {
        e.stopPropagation();
        locationDropdown.style.display = locationDropdown.style.display === "block" ? "none" : "block";
    };

    // Close dropdown when clicking outside
    document.addEventListener("click", () => {
        locationDropdown.style.display = "none";
    });

    locationDropdown.onclick = (e) => e.stopPropagation();
}

/* ================= MOBILE LOCATION DROPDOWN ================= */
const mobileLocationBtn = document.getElementById("mobileLocationBtn");
const mobileLocationDropdown = document.getElementById("mobileLocationDropdown");

if (mobileLocationBtn && mobileLocationDropdown) {
    mobileLocationBtn.onclick = () => {
        const isHidden = window.getComputedStyle(mobileLocationDropdown).display === "none";
        mobileLocationDropdown.style.display = isHidden ? "block" : "none";
        mobileLocationBtn.innerText = isHidden ? "Choose location ▾" : "Choose location ▸";
    };
}

/* ================= MOBILE DROPDOWN ================= */
document.querySelectorAll(".mobile-dropdown-toggle").forEach(toggle => {
    toggle.onclick = () => {
        const dropdownItem = toggle.parentElement;
        dropdownItem.classList.toggle("active");
    };
});

/* ================= ACTIVE NAV ================= */
document.querySelectorAll(".nav-link").forEach(link => {
    link.onclick = () => {
        document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    };
});

/* ================= PRESS SLIDER ================= */
const pressSlider = document.getElementById('pressSlider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

if (pressSlider && prevBtn && nextBtn) {
    nextBtn.onclick = () => {
        pressSlider.scrollBy({ left: 320, behavior: 'smooth' }); // Scroll width of card + gap
    };

    prevBtn.onclick = () => {
        pressSlider.scrollBy({ left: -320, behavior: 'smooth' });
    };
}

/* ================= SCROLL TO TOP BUTTON ================= */
const scrollToTopBtn = document.getElementById('scrollToTop');

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

// Scroll to top when button is clicked
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



/* ================= ABOUT PAGE SLIDER ================= */
const aboutSliderTrack = document.getElementById("sliderTrack");
const aboutPrevBtn = document.getElementById("prevSlideBtn");
const aboutNextBtn = document.getElementById("nextSlideBtn");
const aboutDots = document.querySelectorAll("#dots .dot");

if (aboutSliderTrack && aboutPrevBtn && aboutNextBtn) {
    let currentAboutSlide = 0;
    const totalAboutSlides = 3;

    function updateAboutSlider() {
        aboutSliderTrack.style.transform = `translateX(-${currentAboutSlide * 100}%)`;

        aboutDots.forEach((dot, i) => {
            dot.classList.toggle("bg-pink-600", i === currentAboutSlide);
            dot.classList.toggle("bg-gray-300", i !== currentAboutSlide);
        });
    }

    aboutNextBtn.addEventListener("click", () => {
        currentAboutSlide = (currentAboutSlide + 1) % totalAboutSlides;
        updateAboutSlider();
    });

    aboutPrevBtn.addEventListener("click", () => {
        currentAboutSlide = (currentAboutSlide - 1 + totalAboutSlides) % totalAboutSlides;
        updateAboutSlider();
    });

    aboutDots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            currentAboutSlide = i;
            updateAboutSlider();
        });
    });

    // Auto slide
    setInterval(() => {
        currentAboutSlide = (currentAboutSlide + 1) % totalAboutSlides;
        updateAboutSlider();
    }, 5000);
}
/* ================= VALUES TABS SECTION ================= */
const valueData = [
    {
        title: "prioritise, decide, deliver",
        text: "We are disciplined about focusing on what matters. When we face uncertainty, we put considered thought behind our actions and continue to deliver because it is only through execution that we learn, iterate, and improve.",
        img: "https://www.foodpanda.com/wp-content/uploads/2024/06/02_prioritise-decide_deliver__500x500.webp"
    },
    {
        title: "start with customer, end with customer",
        text: "We want our consumers, vendors, riders, employees – the customers who make up our ecosystem – to keep coming back to the product, service, and experience we create. To achieve this, we keep them at the centre of everything we do.",
        img: "https://www.foodpanda.com/wp-content/uploads/2024/06/01_start-with-customer-end-with-customer_500x500.webp"
    },
    {
        title: "own it end-to-end",
        text: "We take responsibility and ownership from start to finish, ensuring quality, speed and accountability in everything we deliver.",
        img: "https://www.foodpanda.com/wp-content/uploads/2024/06/03_own-it-end-to-end__500x500.webp"
    },
    {
        title: "challenge the status quo",
        text: "We constantly question how things are done and push ourselves to find better, smarter and faster ways forward.",
        img: "https://www.foodpanda.com/wp-content/uploads/2024/06/04_challenge-the-status-quo__500x500.webp"
    },
    {
        title: "we before me",
        text: "We believe collaboration beats individual success. Together we achieve more than we ever could alone.",
        img: "https://www.foodpanda.com/wp-content/uploads/2024/06/05_we-before-me__500x500.webp"
    },
    {
        title: "plan for tomorrow, focus on today",
        text: "Our vision is long-term, but our execution is focused and sharp. We act today to build a better tomorrow.",
        img: "https://www.foodpanda.com/wp-content/uploads/2024/06/06_plan-for-tomorrow-focus-on-today__500x500.webp"
    }
];

const valueButtons = document.querySelectorAll(".value-btn");
const valueTitleEl = document.querySelector("#valueText h1");
const valueTextEl = document.querySelector("#valueText p");
const valueImgEl = document.getElementById("valueImage");

if (valueButtons.length > 0 && valueTitleEl && valueTextEl && valueImgEl) {
    // Initialize the first item (Value at index 0) on load
    function loadValue(index) {
        valueButtons.forEach(b => b.classList.remove("active"));
        const activeBtn = document.querySelector(`.value-btn[data-index="${index}"]`);
        if (activeBtn) activeBtn.classList.add("active");

        valueTitleEl.textContent = valueData[index].title;
        valueTextEl.textContent = valueData[index].text;
        valueImgEl.src = valueData[index].img;
    }

    // Initial load
    loadValue(0);

    valueButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const index = btn.dataset.index;
            loadValue(index);
        });
    });
}

















