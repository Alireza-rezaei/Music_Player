import trends from '../API/trendMusic.json' assert { type: 'json' };

const showTrendsSong = () => {
  console.log('show Trends music Is Active');
  const artistContainer = document.querySelector('.trend__boxes');

  trends.forEach((item) => {
    console.log(item);

    artistContainer.insertAdjacentHTML(
      `beforeend`,
      `
      <div class="trend__box">
         <img src="${item.coverSong}" alt="${item.artistName}" srcset="">
         <p class="trend__musicName">${item.musicName}</p>
         <span>${item.artistName}</span>
     </div>
			 `,
    );
  });


}

export { showTrendsSong }