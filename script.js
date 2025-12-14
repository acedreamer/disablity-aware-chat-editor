/**
 * Design Webpage Interactivity
 * Handles scroll animations and visual polish.
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- Scroll Reveal Logic ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        revealElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    // Trigger once on load
    revealOnScroll();

    // Trigger on scroll
    window.addEventListener('scroll', revealOnScroll);

    // --- Console Easter Egg ---
    console.log(
        '%c Disability-Aware Chat Editor ',
        'background: #2A9D8F; color: white; border-radius: 4px; padding: 4px; font-weight: bold;'
    );
    console.log('Design system loaded. Optimizing for neurodiversity...');

    // --- Circuit Breaker Demo ---
    const switchEl = document.getElementById('circuit-switch');
    const statusText = document.getElementById('breaker-text');
    const tripBtn = document.getElementById('trip-breaker');

    if (switchEl && tripBtn) {
        tripBtn.addEventListener('click', () => {
            switchEl.classList.toggle('active');

            if (switchEl.classList.contains('active')) {
                statusText.innerText = 'CIRCUIT OPEN (PROTECTED)';
                tripBtn.innerText = '♻️ Reset System';
                tripBtn.style.color = '#E76F51';
            } else {
                statusText.innerText = 'SYSTEM SECURE';
                tripBtn.innerText = '⚠️ Simulate Error';
                tripBtn.style.color = '#264653';
            }
        });

        // Allow clicking the switch directly too
        switchEl.addEventListener('click', () => {
            tripBtn.click();
        });
    }

    // --- EXPERIMENTAL: Magnetic Buttons ---
    const magnets = document.querySelectorAll('.back-btn, .glass-card');
    magnets.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            // Subtle movement (10% of cursor distance)
            btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });

    // --- EXPERIMENTAL: Parallax Orbs ---
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth - e.pageX) / 50;
        const y = (window.innerHeight - e.pageY) / 50;

        document.querySelector('.orb-1').style.transform = `translate(${x}px, ${y}px)`;
        document.querySelector('.orb-2').style.transform = `translate(${x * -1}px, ${y * -1}px)`;
    });
});
