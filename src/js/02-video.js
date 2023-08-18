import Player from '@vimeo/player';
import throttle from "lodash.throttle";

// імпортуємо, ініціалізуємо, робимо екземпляр класу
// ми маємо зробити екземпляр класа і передати наш iframe

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const LOCAL_KEY = "videoplayer-current-time";
player.on('timeupdate', throttle(({seconds}) => 
    localStorage.setItem(LOCAL_KEY, seconds)
, 1000));

player.setCurrentTime(localStorage.getItem(LOCAL_KEY) || 0)
