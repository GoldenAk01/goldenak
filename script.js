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
  
  // Mouse trail effect
  document.addEventListener("mousemove", (e) => {
    const dot = document.createElement("div");
    dot.classList.add("trail-dot");
    dot.style.left = e.pageX + "px";
    dot.style.top = e.pageY + "px";
    document.body.appendChild(dot);
  
    // Remove after fade
    setTimeout(() => {
      dot.remove();
    }, 500);
  });
  