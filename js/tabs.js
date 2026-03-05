const tabs = document.querySelector(".tabs");
const sections = document.querySelectorAll("[data-tab]");

tabs.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;

  const target = btn.dataset.target;

  tabs.querySelector(".active")?.classList.remove("active");
  btn.classList.add("active");

  sections.forEach(sec => {
    sec.classList.toggle("active", sec.dataset.tab === target);
  });
});