const swiper = () => {
  const artistContainer = document.querySelector('.popular__infos');
  const trendsContainer = document.querySelector('.trend__boxes');
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



  trendsContainer.addEventListener("mouseup", () => {
    isDragging = false;
  });

  trendsContainer.addEventListener("mousedown", (e) => {
    isDragging = true;
    initialX = e.clientX - xOffset;
  });

  trendsContainer.addEventListener("mouseout", () => {
    isDragging = false;
  });

  trendsContainer.addEventListener("mousemove", (e) => {
    if (isDragging) {
      e.preventDefault();
      currentX = e.clientX - initialX;
      xOffset = currentX;

      setTranslate(currentX, 0, trendsContainer);
      checkTransform(currentX, trendsContainer)
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