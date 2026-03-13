const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
  if (card.getAttribute("page-to-open") != null) {
    card.addEventListener("click", (e) => {
      if (e.target.closest("a")) return;
      window.location.href = card.getAttribute("page-to-open");
    });
  }
});