document.addEventListener("DOMContentLoaded", function () {
  const sliderContainer = document.querySelector(".swiper-wrapper");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % dots.length;
    updateSlider();
  }, 3000);

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateSlider();
    });
  });

  function updateSlider() {
    for (let i = 0; i < currentIndex; i++) {
      const firstSlide = sliderContainer.children[0];
      sliderContainer.appendChild(firstSlide);
    }
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }
});