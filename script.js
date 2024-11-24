// Mouse Movement Effect
document.addEventListener("mousemove", (e) => {
    const layer = document.querySelector(".background-layer");
  
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
  
    const offsetX = (clientX - centerX) / 50;
    const offsetY = (clientY - centerY) / 50;
  
    layer.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(360deg)`;
  });
  