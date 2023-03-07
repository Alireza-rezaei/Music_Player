import trends from '../API/trendMusic.json' assert { type: 'json' };
const favoriteSongs = () => {
  const favoriteBtn = document.querySelectorAll('.favoriteBtn');

  favoriteBtn.forEach(item => {
    item.addEventListener('click', (e) => {
      e.target.classList.toggle('like');
      const musicData = e.target.parentElement.parentElement.parentElement.getAttribute('data-id');

      trends.forEach((item) => {
        item.ID === musicData ? item.favorite = !item.favorite : null;
        console.log(item);
      });


    })
  })

}


export { favoriteSongs }
