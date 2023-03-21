import { musics } from "../API/musics.js";
const player = () => {
  const playBtn = document.querySelector('.player__play')
  const progressBar = document.querySelector(".progress__bar");
  const increase = document.querySelector('.player__increase');
  const decrease = document.querySelector('.player__Decrease');
  const playerNext = document.querySelector('.player__nextBtn');
  const playerPrev = document.querySelector('.player__prevBtn');
  const progressDot = document.querySelector('.progress__dot')
  const playerCover = document.querySelector('.player__cover');
  const playerTitle = document.querySelector('.player__title');
  const playerSubTitle = document.querySelector('.player__subTitle');
  const playerMusic = document.getElementById('music')
  const trendBoxes = document.querySelectorAll('.trend__box');
  const recentlyBoxes = document.querySelectorAll('.recently__content');
  const recentlyBigBox = document.querySelectorAll('.recently__playIcon');

  let audio;
  let isPlay = false;
  let songIndex = 0;


  musics.map(item => {
    console.log(item);
  })

  const playMusicOnIndex = () => {
    playerCover.src = musics[songIndex].cover;
    playerTitle.innerHTML = musics[songIndex].title;
    playerSubTitle.innerHTML = musics[songIndex].artist;

    playerMusic.src = musics[songIndex].url;
    audio = document.getElementById('music');
  }
  playMusicOnIndex();

  const playSong = () => {
    if (!isPlay) {
      audio.play();
      isPlay = !isPlay;
      playBtn.innerHTML = `<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="25" cy="25" r="25" fill="url(#paint0_linear_592_624)"/>
      <rect x="16" y="14.3636" width="7.36364" height="21.2727" rx="2" fill="white"/>
      <rect x="26.6362" y="14.3636" width="7.36364" height="21.2727" rx="2" fill="white"/>
      <defs>
      <linearGradient id="paint0_linear_592_624" x1="25" y1="0" x2="25" y2="50" gradientUnits="userSpaceOnUse">
      <stop stop-color="#628EF1"/>
      <stop offset="1" stop-color="#26D1DB"/>
      </linearGradient>
      </defs>
      </svg>      
      `
    } else {
      audio.pause()
      isPlay = !isPlay;
      playBtn.innerHTML = `
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="7.5" y="10.0001" width="35" height="30" fill="white"/>
      <rect x="13.75" y="15" width="22.5" height="21.25" fill="white"/>
      <path d="M50 25C50 31.6304 47.3661 37.9893 42.6777 42.6777C37.9893 47.3661 31.6304 50 25 50C18.3696 50 12.0107 47.3661 7.32233 42.6777C2.63392 37.9893 0 31.6304 0 25C0 18.3696 2.63392 12.0107 7.32233 7.32233C12.0107 2.63392 18.3696 0 25 0C31.6304 0 37.9893 2.63392 42.6777 7.32233C47.3661 12.0107 50 18.3696 50 25ZM21.2188 15.9156C20.9851 15.7493 20.7102 15.6504 20.4241 15.63C20.1381 15.6095 19.8519 15.6681 19.5969 15.7995C19.3419 15.9308 19.1281 16.1298 18.9787 16.3746C18.8293 16.6195 18.7502 16.9007 18.75 17.1875V32.8125C18.7502 33.0993 18.8293 33.3805 18.9787 33.6254C19.1281 33.8702 19.3419 34.0692 19.5969 34.2005C19.8519 34.3319 20.1381 34.3905 20.4241 34.37C20.7102 34.3496 20.9851 34.2507 21.2188 34.0844L32.1562 26.2719C32.3588 26.1273 32.5239 25.9365 32.6378 25.7153C32.7517 25.4941 32.8111 25.2488 32.8111 25C32.8111 24.7512 32.7517 24.5059 32.6378 24.2847C32.5239 24.0635 32.3588 23.8727 32.1562 23.7281L21.2188 15.9156Z" fill="url(#paint0_linear_326_544)"/>
      <defs>
      <linearGradient id="paint0_linear_326_544" x1="25" y1="0" x2="25" y2="50" gradientUnits="userSpaceOnUse">
      <stop stop-color="#628EF1"/>
      <stop offset="1" stop-color="#26D1DB"/>
      </linearGradient>
      </defs>
      </svg>
      `
    }
    audio.addEventListener("timeupdate", () => {
      update()
    });
  }

  playBtn.addEventListener('click', playSong);
  const update = () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;

    if (!isNaN(duration)) {
      const percentComplete = (currentTime / duration) * 100;
      progressBar.value = percentComplete;
      progressDot.style.left = `${percentComplete - 2}%`
    }


    document.querySelector('.player__currentTime').innerHTML = (formatTime(Math.floor(audio.currentTime)));
    if (document.querySelector('.player__duration').innerHTML === "NaN:NaN") {
      document.querySelector('.player__duration').innerHTML = "0:00";
    } else {
      document.querySelector('.player__duration').innerHTML = (formatTime(Math.floor(audio.duration)));
    }
  }

  function formatTime(seconds) {
    let min = Math.floor((seconds / 60));
    let sec = Math.floor(seconds - (min * 60));
    if (sec < 10) {
      sec = `0${sec}`;
    };
    if (!isNaN(min) && !isNaN(sec)) {
      return `${min}:${sec}`;
    } else {
      return `0:00`
    }
  };

  progressBar.addEventListener("click", seek);
  progressBar.addEventListener("mousedown", function () {
    progressBar.addEventListener("mousemove", seek);
  });
  progressBar.addEventListener("mouseup", function () {
    progressBar.removeEventListener("mousemove", seek);
  });

  progressDot.addEventListener("mousedown", function () {
    progressDot.addEventListener("mousemove", seek);
  });
  progressDot.addEventListener("mouseup", function () {
    progressDot.removeEventListener("mousemove", seek);
    progressBar.removeEventListener("mousemove", seek);
  });


  function seek(e) {
    const mouseX = e.clientX - progressBar.getBoundingClientRect().left;
    const width = progressBar.clientWidth;
    const percent = mouseX / width;
    const duration = audio.duration;
    audio.currentTime = percent * duration;
    progressBar.value = (audio.currentTime / audio.duration) * 100;
    update();
  }

  increase.addEventListener('click', () => {
    audio.currentTime += 10;
  })
  decrease.addEventListener('click', () => {
    audio.currentTime -= 10;
  })

  const playSongs = (element) => {
    element.forEach(item => {
      console.log(item);
      item.addEventListener('click', () => {
        audio.pause();
        const findSong = musics.find(music => {
          return music._ID === item.dataset.id;
        })
        console.log(findSong);
        audio.src = findSong.url;
        update();
        playerCover.src = findSong.cover;
        playerTitle.innerHTML = findSong.title;
        playerSubTitle.innerHTML = findSong.artist;
        progressBar.value = 0;
        progressDot.style.left = "-2rem";
        isPlay = true;
        playSong()
      })
    })
  }
  playSongs(trendBoxes);
  playSongs(recentlyBoxes);
  playSongs(recentlyBigBox);

  playerNext.addEventListener('click', () => {
    if (musics.length - 1 > songIndex) {
      songIndex++;
      playMusicOnIndex()
      progressBar.value = 0;
      progressDot.style.left = "-2rem";
      isPlay = true;
      playSong()
    } else {
      songIndex = 0;
      playMusicOnIndex()
    }
  })
  playerPrev.addEventListener('click', () => {
    if (musics.length - 1 >= songIndex && songIndex > 0) {
      songIndex--;
      playMusicOnIndex()
      progressBar.value = 0;
      progressDot.style.left = "-2rem";
      isPlay = true;
      playSong()
    } else {
      songIndex = musics.length - 1;
      console.log(songIndex);
      playMusicOnIndex()
    }
  })
}

export { player }