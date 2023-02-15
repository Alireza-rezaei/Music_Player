const swiper = () => {
  const artistContainer = document.querySelector('.popular__infos');
  let isDragging = false;
  let currentX;
  let initialX;
  let xOffset = 0;

  artistContainer.addEventListener("mouseup", () => {
    isDragging = false;
  });

  artistContainer.addEventListener("mousedown", (e) => {
    isDragging = true;
    initialX = e.clientX - xOffset;
  });

  artistContainer.addEventListener("mouseout", () => {
    isDragging = false;
  });

  artistContainer.addEventListener("mousemove", (e) => {
    if (isDragging) {
      e.preventDefault();
      currentX = e.clientX - initialX;
      xOffset = currentX;

      setTranslate(currentX, 0, artistContainer);
      checkTransform(currentX, artistContainer)
    }
  });

  function setTranslate(xPos, yPos, el) {
    // if (xPos < 0) {
    el.style.transform = "translateX(" + xPos + "px)";
    // }
  }

  function checkTransform(currentX, container) {
    if (currentX > 0) {
      container.style.transform = "translateX(0px)"
    }
  }
}

export { swiper }