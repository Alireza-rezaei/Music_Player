import Artist from '../API/API.json' assert { type: 'json' };

const showArtist = () => {
	const artistContainer = document.querySelector('.popular__infos');

	Artist.forEach((item) => {
		console.log(item);

		artistContainer.insertAdjacentHTML(
			`beforeend`,
			`
			<div class="popular__info">
       <img class="popular__picture" src="${item.profilePicture}" alt="">
       <span class="popular__name">${item.artistName}</span>
			 </div>
			 `,
		);
	});
};

// fetch('https://data.mongodb-api.com/app/data-uthqi/endpoint/data/v1', {
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

export { showArtist };