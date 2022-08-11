const date = new Date();
const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const Months = [" January", " February", " March", " April", " May", " June", " July", " August", " September", " October", " November", " December"];

let day = Days[date.getDay()];
let moth = Months[date.getMonth()];

let year = date.getFullYear();
let ngay = date.getDate();
document.querySelector('.card__title>p').innerHTML = day + ',' + moth + '&nbsp' + ngay + ',' + year;
