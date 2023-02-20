import Artist from '../API/popularArtist.json' assert { type: 'json' };

const showArtist = () => {
	console.log('show artist Is Active');
	const artistContainer = document.querySelector('.popular__infos');

	Artist.forEach((item) => {
		console.log(item);

		artistContainer.insertAdjacentHTML(
			`beforeend`,
			`
			<div class="popular__info">
       <img class="popular__picture" ondragstart="return false;" ondrop="return false"; src="${item.profilePicture}" alt="">
       <span class="popular__name">${item.artistName}</span>
			 </div>
			 `,
		);
	});
};

export { showArtist };


// fetch('https://music-player-83856-default-rtdb.firebaseio.com/Artist', {
// 	method: 'POST', // or 'PUT'
// 	headers: {
// 		'Content-Type': 'application/json',
// 	},
// 	body: JSON.stringify(Artist),
// })
// 	.then((response) => response.json())
// 	.then((data) => {
// 		console.log('Success:', data);
// 	})
// 	.catch((error) => {
// 		console.error('Error:', error);
// 	});

// localStorage.setItem('data', JSON.stringify(Artist));