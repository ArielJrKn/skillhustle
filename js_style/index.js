// système d'affichages des medias pour la publication----------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function(){
    const photo = document.getElementById('photo');
    const video = document.getElementById('video');
    const photoInput = document.getElementById('photo');
    const videoInput = document.getElementById('video');
    const content = document.querySelector('.content');

    let mediaFiles = []; // stocke toutes les photos et vidéos

    // Quand on clique sur "Ajouter Photo" → on déclenche l'input photo
    photo.addEventListener('click', () => {
        photoInput.click();
    });

    // Quand on clique sur "Ajouter Vidéo" → on déclenche l'input vidéo
    video.addEventListener('click', () => {
        videoInput.click();
    });

    // Gestion ajout de photos
    photoInput.addEventListener('change', function(e){
        const files = Array.from(e.target.files);
        mediaFiles.push(...files);
        displayMedia();
    });

    // Gestion ajout de vidéos
    videoInput.addEventListener('change', function(e){
        const files = Array.from(e.target.files);
        mediaFiles.push(...files);
        displayMedia();
    });

    // Affichage des médias
    function displayMedia() {
        content.innerHTML = ''; // on vide avant de réafficher

        mediaFiles.forEach((file, index) => {
            const src = URL.createObjectURL(file);

            const container = document.createElement('div');
            container.className = 'boss flex items-start gap-1 p-2';

            // Si c'est une image
            if(file.type.startsWith('image/')) {
                const img = document.createElement('img');
                img.src = src;
                img.className = 'w-28 h-28 object-cover rounded-lg';
                container.appendChild(img);
            }
            // Si c'est une vidéo
            else if(file.type.startsWith('video/')) {
                const video = document.createElement('video');
                video.src = src;
                video.className = 'w-28 h-28 object-cover rounded-lg';
                container.appendChild(video);
            }

            // Bouton supprimer
            const closeBtn = document.createElement('span');
            closeBtn.className = 'bg-white p-1 rounded-full cursor-pointer';
            closeBtn.innerHTML = '<i class="ri-close-line ri-lg"></i>';

            closeBtn.addEventListener('click', function(){
                mediaFiles.splice(index, 1); // supprime du tableau
                displayMedia(); // rafraîchit l'affichage
            });

            container.appendChild(closeBtn);
            content.appendChild(container);
        });
    }
});

// système d'affichages des medias pour la publication----------------------------------------------------------------------------------


// système de likes---------------------------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function(){
    const like = document.querySelectorAll(".like");

    like.forEach(l => {
        l.addEventListener('click', function(){
            l.classList.toggle('active')
        })
    })
})


// système de likes---------------------------------------------------------------------------------------------------------------------


// système de commentaire----------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function(){
    const comment = document.querySelectorAll('.comment');
    const commentBox = document.querySelectorAll('.commentBox');

    comment.forEach(c =>{
        c.addEventListener('click', function(){
            c.classList.toggle('active')
            commentBox.forEach(co =>{
                co.classList.toggle('active')
            })
        })
    })
})
// système de commentaire----------------------------------------------------------------------------------------------------------


document.addEventListener('DOMContentLoaded', function(){
    const rightBtn = document.querySelector('.RightBtn');
    const rightSideBar = document.querySelector('.RightSideBar');

    rightBtn.addEventListener('click', function(){
        rightSideBar.classList.toggle('hidden')
    });

    document.addEventListener('click', function(e){
        if (!rightSideBar.classList.contains('hidden') && !rightSideBar.contains(e.target) && !rightBtn.contains(e.target)) {
            rightSideBar.classList.add('hidden');
        }
    });
})