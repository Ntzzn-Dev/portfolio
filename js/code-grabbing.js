const toy = document.getElementById("codeToy");

let offsetX = 0;
let offsetY = 0;
let isDragging = false;

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