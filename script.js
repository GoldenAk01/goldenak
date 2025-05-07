// SNOWFLAKE FUNCTION
function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");

    // Random initial horizontal position
    snowflake.style.left = Math.random() * window.innerWidth + "px";
    // Random size
    const size = Math.random() * 4 + 2;
    snowflake.style.width = size + "px";
    snowflake.style.height = size + "px";
    // Random fall duration
    const duration = Math.random() * 5 + 5;
    snowflake.style.animationDuration = duration + "s";

    document.body.appendChild(snowflake);

    // Remove the snowflake after it falls
    setTimeout(() => {
      snowflake.remove();
    }, duration * 1000);
}

// Create new snowflakes every 100ms
setInterval(createSnowflake, 100);

// Crosshair follows mouse
const crosshair = document.querySelector('.crosshair-container');
document.addEventListener('mousemove', (e) => {
  crosshair.style.left = (e.clientX - 30) + 'px'; // Center the crosshair (60px/2)
  crosshair.style.top = (e.clientY - 30) + 'px';
});

// Magnetic title effect
const magneticTitle = document.getElementById('magnetic-title');
document.addEventListener('mousemove', (e) => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const maxDist = 60;
  const dx = (e.clientX - centerX) / centerX;
  const dy = (e.clientY - centerY) / centerY;
  magneticTitle.style.transform = `translate(-50%, -50%) translate(${dx * maxDist}px, ${dy * maxDist}px)`;
});

// On mouse leave, reset the title position
document.addEventListener('mouseleave', () => {
  magneticTitle.style.transform = 'translate(-50%, -50%)';
});
