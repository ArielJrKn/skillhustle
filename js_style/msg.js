

// système pour ouvrir la messagerie
    const btnMsg = document.querySelector('.btnMsg');
    const backMsg = document.querySelector('.backMsg');
    const sideBarMessage = document.querySelector('.sideBarMessage');

    btnMsg.addEventListener('click', function(){
        sideBarMessage.classList.remove('hidden')
    })

    backMsg.addEventListener('click', function(){
        document.querySelector('.sideBarMessage').classList.add('hidden')
    })

    document.addEventListener('click', function(e){
        if (!sideBarMessage.classList.contains('hidden') && !sideBarMessage.contains(e.target) && !btnMsg.contains(e.target)) {
            sideBarMessage.classList.add('hidden');
        }
    });


// système pour les actions pour un chat (bloquer ou supprimer une conversation...)
    const settingChat = document.querySelector('.settingChat');
    const userSetting = document.querySelector('.userSetting');

    settingChat.addEventListener('click', function(e){
        userSetting.classList.toggle('hidden'); 
    });

    document.addEventListener('click', function(e){
        if (!userSetting.classList.contains('hidden') && !userSetting.contains(e.target) && !settingChat.contains(e.target)) {
            userSetting.classList.add('hidden');
        }
    });

        // système de retour vers la liste des conversation
    const backListConversation = document.getElementById('backListConversation');
    const section2 = document.querySelector('.section2');
    const section1 = document.querySelector('.section1');

    backListConversation.addEventListener('click', function(){
        section2.classList.add('hidden');
        section1.classList.remove('hidden')
    })

    //     // retour avec la touche backspace
    // document.addEventListener('keydown', function (e) {
    //     if (e.key === 'Backspace' && !section2.classList.contains('hidden')) {
    //         section2.classList.add('hidden');
    //         section1.classList.remove('hidden')
    //     }
    // });

        // système pour afficher une conversation
    const conversation = document.querySelectorAll('.conversation');
    const section22 = document.querySelector('.section2');
    const section11 = document.querySelector('.section1');

    conversation.forEach(function(chat){
        chat.addEventListener('click', function(){
            section22.classList.remove('hidden');
            section11.classList.add('hidden')
        })
    })

// systeme d'affichage pour ajout de nouveau message ou création de groupe

    const addChat = document.querySelector('.addChat');
    const conversationList = document.querySelector('.section1');
    const section3 = document.querySelector('.section3');
    const close = document.querySelector('.close');


    addChat.addEventListener('click', function(){
        conversationList.classList.add('active')
        section3.classList.add('active')
    })

    close.addEventListener('click', function(){
        document.querySelector('.section1').classList.remove('active')
        document.querySelector('.section3').classList.remove('active')
    })


        // système d'ajout de nouveau message ou de création de groupe

                // On cible le titre qui va changer (le <h2>)
    const changeTextElement = document.querySelector('.ChangeToContinue');

            // On cible tous les boutons radio qui représentent les utilisateurs
    const radios = document.querySelectorAll('.selectUser');

            // On surveille les changements sur TOUS les boutons radio
    radios.forEach(radio => {
        radio.addEventListener('change', () => {
                    // Chaque fois qu’un radio change, on vérifie le total de radios cochés
            const selectedUsers = Array.from(radios).filter(r => r.checked);

            if (selectedUsers.length === 1) {
                        // ✅ Si un seul utilisateur est sélectionné
                changeTextElement.innerHTML = `
                            <button class="backdrop-filter backdrop-blur-2xl bg-gray-100 bg-opacity-30 hover:bg-opacity-50 text-gray-800 dark:text-white px-4 py-2 rounded-full text-sm">
                                Continuer
                            </button>
                `;
            } else if (selectedUsers.length > 1) {
                        // ✅ Si plusieurs utilisateurs sont sélectionnés
                changeTextElement.innerHTML = `
                            <button class="backdrop-filter backdrop-blur-2xl bg-gray-100 bg-opacity-30 hover:bg-opacity-50 text-gray-800 dark:text-white px-4 py-2 rounded-full text-sm">
                                Créer un groupe
                            </button>
                `;
            } else {
                        // 🔄 Si aucun utilisateur sélectionné → on remet le texte par défaut
                changeTextElement.innerHTML = `Sélectionner un utilisateur pour démarrer une conversation`;
            }
        });
    });


// système de gestion des médias dans la conversation à la gpt
    document.addEventListener('DOMContentLoaded', function(){
        const mediaUpload = document.getElementById("mediaUpload");
        const img = document.querySelector(".img");

        if (img.src = " ") {
            img.classList.add('hidden');
        }

        mediaUpload.addEventListener('change', function(e){
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e){
                    img.src = e.target.result;
                    img.classList.remove('hidden')
                };
                reader.readAsDataURL(file);
            }
        });

        img.addEventListener('click', function(){
            img.src = " ";
            img.classList.add('hidden')
        })
    })