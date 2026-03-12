document.querySelectorAll(".carousel").forEach(carousel => {
  const slides = carousel.querySelectorAll(".slide");
  const btnNext = carousel.querySelector(".next-btn");
  const btnPrev = carousel.querySelector(".prev-btn");
  let index = 0;

  slides.forEach((slide, i) => {
    const letter = String.fromCharCode(65 + i);

    slide.dataset.index = letter;

    const label = document.createElement("span");
    label.className = "slide-number";
    label.textContent = letter;

    slide.appendChild(label);
  });

  function update() {
    if (slides.length <= 1) {
      slides[0].classList.add("center");
      return;
    }

    slides.forEach(s => {
      s.classList.remove("left", "center", "right");
      s.classList.add("next");
    });

    const prev = (index - 1 + slides.length) % slides.length;
    const next = (index + 1) % slides.length;

    slides[index].classList.remove("next");
    slides[index].classList.add("center");

    slides[prev].classList.remove("next");
    slides[prev].classList.add("left");

    slides[next].classList.remove("next");
    slides[next].classList.add("right");
  }

  function goTo(targetIndex) {
    index = ((targetIndex % slides.length) + slides.length) % slides.length;
    update();
  }

  if (btnNext) {
    btnNext.addEventListener("click", () => {
      goTo(index + 1);
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener("click", () => {
      goTo(index - 1);
    });
  }

  carousel.goTo = goTo;
});

document.querySelectorAll(".go-slide").forEach(el => {
  el.addEventListener("click", () => {
    const index = parseInt(el.dataset.slide);
    const carousel = el.closest("section").querySelector(".carousel");

    carousel.goTo(index);
  });
});