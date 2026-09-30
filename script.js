document.querySelectorAll(".icon").forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.style.transform = "scale(0.9)";
    setTimeout(() => {
      icon.style.transform = "";
    }, 150);
  });
});

document.addEventListener("mousemove", (event) => {
  const card = document.querySelector(".card");
  if (!card) return;

  const x = (event.clientX / window.innerWidth - 0.5) * 10;
  const y = (event.clientY / window.innerHeight - 0.5) * 10;

  card.style.transform = `perspective(800px) rotateX(${-y}deg) rotateY(${x}deg)`;
});

document.addEventListener("mouseleave", () => {
  const card = document.querySelector(".card");
  if (card) card.style.transform = "";
});
