const nextItem = () => {
  const nextBtn = document.querySelectorAll('.nextBtn');

  let pageX = 0;

  nextBtn.forEach(item => {
    item.addEventListener('click', e => {
      const containerBox = e.target.parentElement.parentElement.nextElementSibling;
      const fistElementBox = e.target.parentElement.parentElement.nextElementSibling.children[1];
      console.log(fistElementBox);
      const boxSize = fistElementBox.offsetWidth;

      if (window.getComputedStyle(containerBox).transform === "matrix(1, 0, 0, 1, 0, 0)") {
        pageX = 0;
      }
      pageX += boxSize;
      console.log(pageX);

      containerBox.style.transform = `translateX(calc(-${pageX}px))`
    })
  })
}
const previousItem = () => {
  const prevBtn = document.querySelectorAll('.prevBox');


  prevBtn.forEach(item => {
    console.log(item);
    item.addEventListener('click', e => {
      const containerBox = e.target.parentElement.nextElementSibling;
      containerBox.style.transform = `translateX(0)`
    })
  })
}

export { nextItem, previousItem }