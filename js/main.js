// Interacción sutil con el mouse
document.addEventListener('mousemove', (e) => {
    const glows = document.querySelectorAll('.glow');
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;

    glows.forEach((glow, i) => {
        const factor = (i + 1) * 0.5;
        glow.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
    });
});
