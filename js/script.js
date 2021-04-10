const truck = document.querySelectorAll('.truck');
const amongUs = document.querySelectorAll('.among-us');
const papanSkor = document.querySelector('.papan-skor');
const pop = document.querySelector('#pop');

let truckSebelumnya;
let selesai;
let skor;

function randomTruck(truck) {
  const t = Math.floor(Math.random() * truck.length);
  const tRandom = truck[t];
  if (tRandom == truckSebelumnya) {
    randomTruck(truck);
  }
  truckSebelumnya = tRandom;
  return tRandom;
}

function randomWaktu(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function munculkanAmongUs() {
  const tRandom = randomTruck(truck);
  const wRandom = randomWaktu(300, 1000);
  tRandom.classList.add('muncul');
  setTimeout(() => {
    tRandom.classList.remove('muncul');
    if (!selesai) {
      munculkanAmongUs();
    }
  }, wRandom);
}

function start() {
  selesai = false;
  skor = 0;
  papanSkor.textContent = 0;
  munculkanAmongUs();
  setTimeout(() => {
    selesai = true;
  }, 30000);
}

function pukul() {
  skor++;
  papanSkor.textContent = skor;
  pop.play();
  this.parentNode.classList.remove('muncul');
}

amongUs.forEach(t => {
  t.addEventListener('click', pukul);
})