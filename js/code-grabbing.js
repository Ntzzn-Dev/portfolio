const toy = document.getElementById("codeToy");

let offsetX = 0;
let offsetY = 0;
let isDragging = false;

// ---- desktop ----
toy.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - toy.offsetLeft;
  offsetY = e.clientY - toy.offsetTop;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  toy.style.left = (e.clientX - offsetX) + "px";
  toy.style.top = (e.clientY - offsetY) + "px";
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

// ---- mobile (touch) ----
toy.addEventListener("touchstart", (e) => {
  isDragging = true;
  const touch = e.touches[0];
  offsetX = touch.clientX - toy.offsetLeft;
  offsetY = touch.clientY - toy.offsetTop;
});

document.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const touch = e.touches[0];
  toy.style.left = (touch.clientX - offsetX) + "px";
  toy.style.top = (touch.clientY - offsetY) + "px";
});

document.addEventListener("touchend", () => {
  isDragging = false;
});