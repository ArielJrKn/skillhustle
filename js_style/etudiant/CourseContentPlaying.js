// 🎥 On récupère l'élément <video> principal
const video = document.querySelector('.video');

// ▶️ Partie : Lecture / Pause
// On cible le bouton play/pause (entouré de plusieurs <div>)
const playPauseBtn = document.querySelector('.ri-play-fill').parentElement.parentElement;
// L’icône à changer dynamiquement (pause ↔ play)
const playPauseIcon = document.querySelector('.ri-play-fill');

// Quand on clique sur le bouton
playPauseBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play(); // Si la vidéo est en pause, on la lance
    playPauseIcon.classList.remove('ri-play-fill');
    playPauseIcon.classList.add('ri-pause-fill');
  } else {
    video.pause(); // Sinon, on la met en pause
    playPauseIcon.classList.remove('ri-pause-fill');
    playPauseIcon.classList.add('ri-play-fill');
  }
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'k') {
        if (video.paused) {
    video.play(); // Si la vidéo est en pause, on la lance
    playPauseIcon.classList.remove('ri-play-fill');
    playPauseIcon.classList.add('ri-pause-fill');
  } else {
    video.pause(); // Sinon, on la met en pause
    playPauseIcon.classList.remove('ri-pause-fill');
    playPauseIcon.classList.add('ri-play-fill');
  }    
}
});

video.addEventListener('click', function(){
  if (video.paused) {
    video.play(); // Si la vidéo est en pause, on la lance
    playPauseIcon.classList.remove('ri-play-fill');
    playPauseIcon.classList.add('ri-pause-fill');
  } else {
    video.pause(); // Sinon, on la met en pause
    playPauseIcon.classList.remove('ri-pause-fill');
    playPauseIcon.classList.add('ri-play-fill');
  }    
});


// 🔊 Partie : Volume
// On récupère les éléments du slider de volume
const volumeBar = document.querySelector('.custom-volume');
const volumeFill = document.querySelector('.custom-volume-fill');
const volumeHandle = document.querySelector('.custom-volume-handle');

// Quand on clique dans la barre de volume
volumeBar.addEventListener('click', (e) => {
  const rect = volumeBar.getBoundingClientRect(); // Position réelle de la barre dans la fenêtre
  const percent = (e.clientX - rect.left) / rect.width; // Position du clic en pourcentage
  volumeFill.style.width = `${percent * 100}%`; // On remplit visuellement la barre
  volumeHandle.style.left = `${percent * 100}%`; // On déplace le "rond" du volume
  video.volume = percent; // On applique le volume à la vidéo
});


// 📈 Partie : Barre de progression (lecture)
const progressFill = document.querySelector('.video-progress-fill');
const progressHandle = document.querySelector('.video-progress-handle');
const debut = document.querySelector('.debut');
const fin = document.querySelector('.fin');


function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}

// À chaque changement de temps de la vidéo (lecture en cours)
video.addEventListener('timeupdate', () => {
  const percent = (video.currentTime / video.duration) * 100; // % de la vidéo déjà lue
  progressFill.style.width = `${percent}%`; // On remplit la barre de progression
  progressHandle.style.left = `${percent}%`; // On déplace la boule

debut.textContent = formatTime(video.currentTime);
fin.textContent = formatTime(video.duration);
});

// Si l'utilisateur clique sur la barre pour avancer/reculer
const progressBar = document.querySelector('.video-progress');
progressBar.addEventListener('click', (e) => {
  const rect = progressBar.getBoundingClientRect();
  const percent = (e.clientX - rect.left) / rect.width;
  video.currentTime = percent * video.duration; // On met à jour le temps de lecture

debut.textContent = formatTime(video.currentTime);
fin.textContent = formatTime(video.duration);
});




// ⏩ Partie : Vitesse de lecture
const speedBtn = document.querySelector('button.text-sm.px-2'); // Le bouton "1.0x"
let speeds = [1.0, 1.25, 1.5, 2.0]; // Les vitesses disponibles
let speedIndex = 0; // Index pour savoir quelle vitesse on utilise

speedBtn.addEventListener('click', () => {
  speedIndex = (speedIndex + 1) % speeds.length; // On passe à la vitesse suivante
  video.playbackRate = speeds[speedIndex]; // On l’applique à la vidéo
  speedBtn.textContent = `${speeds[speedIndex]}x`; // On met à jour le texte du bouton
});


// 📺 Partie : Plein écran
const fullscreenBtn = document.querySelector('.ri-fullscreen-line').parentElement.parentElement;

fullscreenBtn.addEventListener('click', () => {
  // Si on est pas déjà en plein écran, on demande le fullscreen
  if (!document.fullscreenElement) {
    video.requestFullscreen();
  } else {
    document.exitFullscreen(); // Sinon on sort du plein écran
  }
});


// 💎 Partie : Qualité (pas fonctionnelle ici, mais cliquable)
const qualityBtn = document.querySelectorAll('button.text-sm')[1]; // Le bouton "1080p"
qualityBtn.addEventListener('click', () => {
  alert("🎞️ Le changement de qualité nécessite plusieurs sources vidéo ou un lecteur HLS (non dispo ici)");
});

//Sauvegarder la partie de l'utilisateur-------------------------------------------
//1. Sauvegarder la position dans localStorage à chaque changement
const videoSaving = document.querySelector('video');

// Sauvegarde la position toutes les X secondes
videoSaving.addEventListener('timeupdate', () => {
  localStorage.setItem('videoSavingProgress', videoSaving.currentTime);
});

// 2. Reprendre la lecture là où il s'était arrêté
window.addEventListener('DOMContentLoaded', () => {
  const savedTime = localStorage.getItem('videoSavingProgress');
  const videoSaving = document.querySelector('video');

  if (savedTime) {
    videoSaving.currentTime = parseFloat(savedTime);
  }
});

// 3. Bonus : Nettoyer si la vidéo est terminée
videoSaving.addEventListener('ended', () => {
  localStorage.removeItem('videoSavingProgress');
});
//Sauvegarder la partie de l'utilisateur-------------------------------------------

