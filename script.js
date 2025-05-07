// Get the audio element once
const audio = document.getElementById('bg-music');

// Always enforce 30% volume
function setVolume() {
  audio.volume = 0.3;
}

// Set volume before playback (just in case)
setVolume();

// Also set volume after playback starts (for browser compatibility)
audio.addEventListener('play', setVolume);

// Overlay click to start music and fade out overlay/blur/text
document.getElementById('overlay').addEventListener('click', function() {
  audio.loop = true;
  audio.play().then(() => {
    setVolume(); // Set volume again after playback starts
  }).catch((e) => {
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
