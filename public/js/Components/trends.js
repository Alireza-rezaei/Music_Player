import trends from '../API/trendMusic.json' assert { type: 'json' };

const showTrendsSong = () => {
  console.log('show Trends music Is Active');
  const artistContainer = document.querySelector('.trend__boxes');

  trends.forEach((item) => {
    artistContainer.insertAdjacentHTML(
      `beforeend`,
      `
      <div data-id="${item._ID}" class="trend__box">
         <img class="trend__img" src="${item.coverSong}" alt="${item.artistName}" ondragstart="return false;" ondrop="return false"; srcset="">
         <p class="trend__musicName">${item.musicName}
         <svg class="favoriteBtn" width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path ${item.favorite ? 'class ="like"' : 'class=""'} d="M16.2916 0.3125C14.2791 0.3125 12.5062 1.31875 11.4999 2.9C10.4937 1.31875 8.72075 0.3125 6.70825 0.3125C3.54575 0.3125 0.958252 2.9 0.958252 6.0625C0.958252 11.7646 11.4999 17.5625 11.4999 17.5625C11.4999 17.5625 22.0416 11.8125 22.0416 6.0625C22.0416 2.9 19.4541 0.3125 16.2916 0.3125Z" fill="#8A8A8A"/>
            </svg>
         </p>
         <span>${item.artistName}</span>
     </div>
			 `,
    );

    // console.log(item);
  });


}


export { showTrendsSong }