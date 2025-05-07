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

// Create crosshair element
const crosshair = document.createElement("div");
crosshair.classList.add("crosshair");
document.body.appendChild(crosshair);

// Update crosshair position on mouse move
document.addEventListener("mousemove", (e) => {
  crosshair.style.left = `${e.pageX}px`;
  crosshair.style.top = `${e.pageY}px`;
});
