// Overlay click to start music and fade out overlay/blur/text
document.getElementById('overlay').addEventListener('click', function() {
  const audio = document.getElementById('bg-music');
  audio.loop = true;
  audio.play().catch((e) => {
    console.log("Audio play failed:", e);
  });

  this.classList.add('fading');
  setTimeout(() => {
    this.style.display = 'none';
  }, 700);
});

// Snowflake creation function
function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.style.left = Math.random() * window.innerWidth + "px";
  const size = Math.random() * 4 + 2;
  snowflake.style.width = size + "px";
  snowflake.style.height = size + "px";
  const duration = Math.random() * 5 + 5;
  snowflake.style.animationDuration = duration + "s";
  document.body.appendChild(snowflake);
  setTimeout(() => {
    snowflake.remove();
  }, duration * 1000);
}
setInterval(createSnowflake, 100);

// Crosshair follows mouse
const crosshair = document.querySelector('.crosshair-container');
document.addEventListener('mousemove', (e) => {
  crosshair.style.left = (e.clientX - 30) + 'px';
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
document.addEventListener('mouseleave', () => {
  magneticTitle.style.transform = 'translate(-50%, -50%)';
});

// Discord button copy functionality
document.getElementById('discord-btn').addEventListener('click', function() {
  const discordName = "goldenak";
  navigator.clipboard.writeText(discordName).then(() => {
    const copied = document.getElementById('discord-copied');
    copied.classList.add('visible');
    setTimeout(() => {
      copied.classList.remove('visible');
    }, 1500);
  });
});

// Orbit animation for Discord button
const discordBtnContainer = document.getElementById('discord-btn-container');
const pfpContainer = document.querySelector('.pfp-container');
const magneticTitleElem = document.getElementById('magnetic-title');

function animateOrbit() {
  const now = Date.now() / 1000;
  const orbitRadius = 120;
  const orbitSpeed = 0.35; // rotations per second
  const angle = now * orbitSpeed * 2 * Math.PI;

  // Center position (between pfp and title)
  const pfpRect = pfpContainer.getBoundingClientRect();
  const titleRect = magneticTitleElem.getBoundingClientRect();
  const centerX = (pfpRect.left + titleRect.left + pfpRect.width/2 + titleRect.width/2) / 2 + window.scrollX;
  const centerY = (pfpRect.top + titleRect.top + pfpRect.height/2 + titleRect.height/2) / 2 + window.scrollY;

  // Orbit position
  const x = centerX + orbitRadius * Math.cos(angle) - discordBtnContainer.offsetWidth/2;
  const y = centerY + orbitRadius * Math.sin(angle) - discordBtnContainer.offsetHeight/2;

  discordBtnContainer.style.left = `${x}px`;
  discordBtnContainer.style.top = `${y}px`;

  requestAnimationFrame(animateOrbit);
}
animateOrbit();
