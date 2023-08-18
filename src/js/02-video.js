import Player from '@vimeo/player';
// імпортуємо, ініціалізуємо, робимо екземпляр класу
// ми маємо зробити екземпляр класа і передати наш iframe

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', function(data) {
    console.log(data);
});
// player.on('play', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
// const onPlay = function (data) {
//   // data is an object containing properties specific to that event
// };

// player.on('play', onPlay);

// // If later on you decide that you don’t need to listen for play anymore.
// player.off('play', onPlay);

// // Alternatively, `off` can be called with just the event name to remove all
// // listeners.
// player.off('play');
