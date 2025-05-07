// Snowflake function
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

// Create crosshair element with the image
const crosshair = document.createElement("div");
crosshair.classList.add("crosshair");

// Create image element for crosshair
const crosshairImg = document.createElement("img");
crosshairImg.src = "/mnt/data/48002c1d-96e1-4e38-90b4-e02f8063d7e6.png";  // Use your image here
crosshair.appendChild(crosshairImg);
document.body.appendChild(crosshair);

// Update crosshair position and rotation on mouse move
document.addEventListener("mousemove", (e) => {
  crosshair.style.left = `${e.pageX}px`;
  crosshair.style.top = `${e.pageY}px`;

  // Rotate the crosshair slightly based on the mouse movement
  const angle = (e.clientX + e.clientY) % 360; // Simple rotation effect based on mouse position
  crosshair.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
});
