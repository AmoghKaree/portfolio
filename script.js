// Initialize Vanta.js GLOBE Background - Cyan with bright white core
VANTA.GLOBE({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x00d9ff,           // Bright cyan for entire globe
    color2: 0xffffff,          // Bright white for illuminated core
    backgroundColor: 0x0f0f23, // Dark navy background
    size: 1.00,
    points: 10.00,
    maxDistance: 20.00
});

// Custom Cursor - Orb to Halo Transformation
const cursor = document.querySelector('.custom-cursor');
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

// Cursor movement tracking
let shakeAmount = 0;
let lastMouseX = 0, lastMouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Calculate movement speed for subtle pulsing effect
    const speedX = Math.abs(mouseX - lastMouseX);
    const speedY = Math.abs(mouseY - lastMouseY);
    shakeAmount = Math.min((speedX + speedY) * 0.2, 8);

    lastMouseX = mouseX;
    lastMouseY = mouseY;
});

// Smooth cursor animation
function animateCursor() {
    // Smooth follow with slight lag
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    
    // Apply position
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    // Reduce shake over time
    shakeAmount *= 0.92;

    requestAnimationFrame(animateCursor);
}
animateCursor();

// Cursor hover effects - transforms to halo on interactive elements
const hoverElements = document.querySelectorAll('a, button, .project-card, .social-icon, .nav-links a, .logo, .project-media');
hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
});
