const nextItem = () => {
  const nextBtn = document.querySelectorAll('.nextBtn');

  let pageX = 0;

  nextBtn.forEach(item => {
    item.addEventListener('click', e => {
      const containerBox = e.target.parentElement.parentElement.nextElementSibling;
      const fistElementBox = e.target.parentElement.parentElement.nextElementSibling.firstElementChild;
      const boxSize = fistElementBox.offsetWidth;

      pageX += boxSize;
      console.log(pageX);

      containerBox.style.transform = `translateX(calc(-${pageX}px - 7rem))`
    })
  })
}
const previousItem = () => {
  const prevBtn = document.querySelectorAll('.prevBtn');


  prevBtn.forEach(item => {
    item.addEventListener('click', e => {
      const containerBox = e.target.parentElement.parentElement.nextElementSibling;;
      containerBox.style.transform = `translateX(0)`
    })
  })
}

export { nextItem, previousItem }