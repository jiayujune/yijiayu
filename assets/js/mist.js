document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const toggle = document.getElementById("mobileNavToggle");
    const links = Array.from(document.querySelectorAll(".nav-link"));
    const sections = Array.from(document.querySelectorAll("main section[id]"));
    const cursorGlow = document.getElementById("cursorGlow");
    const projectsScroller = document.getElementById("projectsScroller");
    const scrollButtons = Array.from(document.querySelectorAll("[data-scroll-projects]"));
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (toggle && sidebar) {
        toggle.addEventListener("click", () => {
            const isOpen = sidebar.classList.toggle("is-open");
            toggle.setAttribute("aria-expanded", String(isOpen));
        });
    }

    links.forEach((link) => {
        link.addEventListener("click", () => {
            links.forEach((item) => item.classList.remove("active"));
            link.classList.add("active");

            if (window.innerWidth <= 1080 && sidebar && toggle) {
                sidebar.classList.remove("is-open");
                toggle.setAttribute("aria-expanded", "false");
            }
        });
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                const id = entry.target.getAttribute("id");
                links.forEach((link) => {
                    const isMatch = link.getAttribute("href") === `#${id}`;
                    link.classList.toggle("active", isMatch);
                });
            });
        },
        {
            rootMargin: "-20% 0px -55% 0px",
            threshold: 0.1,
        }
    );

    sections.forEach((section) => observer.observe(section));

    if (cursorGlow && !prefersReducedMotion && window.matchMedia("(pointer: fine)").matches) {
        window.addEventListener("pointermove", (event) => {
            cursorGlow.style.opacity = "1";
            cursorGlow.style.left = `${event.clientX}px`;
            cursorGlow.style.top = `${event.clientY}px`;
        });

        document.addEventListener("pointerleave", () => {
            cursorGlow.style.opacity = "0";
        });
    }

    if (projectsScroller && scrollButtons.length > 0) {
        scrollButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const direction = button.getAttribute("data-scroll-projects") === "next" ? 1 : -1;
                const amount = Math.min(420, Math.round(projectsScroller.clientWidth * 0.9));

                projectsScroller.scrollBy({
                    left: direction * amount,
                    behavior: "smooth",
                });
            });
        });
    }
});
