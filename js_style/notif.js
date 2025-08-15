
const riclose = document.querySelector('.ri-close');
riclose.addEventListener('click', function(){
    notif.classList.add('hidden');
})

const notif = document.querySelector('.sideBarNotification');
const btnNotif = document.querySelector('.btnNotif');

// Toggle notif à l'ouverture
btnNotif.addEventListener('click', function (e) {
    e.stopPropagation(); // Évite que ça ferme direct quand on clique sur le bouton
    notif.classList.toggle('hidden');
});

// Fermer si on clique en dehors
document.addEventListener('click', function (e) {
    if (!notif.classList.contains('hidden') && !notif.contains(e.target) && !btnNotif.contains(e.target)) {
        notif.classList.add('hidden');
    }
});

// Fermer avec la touche Échap
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !notif.classList.contains('hidden')) {
        notif.classList.add('hidden');
    }
});

