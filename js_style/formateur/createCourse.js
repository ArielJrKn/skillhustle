// SELECTION DE L'IMAGE ET AFFICHAGE -------------------------------------------------------------------------------------------------------
        document.addEventListener('DOMContentLoaded', function() {
            const coverImageUpload = document.getElementById('cover-image-upload');
            const coverImageInput = document.getElementById('cover-image-input');
            const uploadPlaceholder = document.getElementById('upload-placeholder');
            const imagePreview = document.getElementById('image-preview');
            const previewImage = imagePreview.querySelector('img');
            const removeImageBtn = document.getElementById('remove-image');
            const previewCoverImage = document.getElementById('preview-cover-image');
            
            // Ouvrir le sélecteur de fichier lors du clic sur le bouton ou la zone
            coverImageUpload.addEventListener('click', function() {
                coverImageInput.click();
            });
            
            // Gérer le glisser-déposer
            coverImageUpload.addEventListener('dragover', function(e) {
                e.preventDefault();
                coverImageUpload.classList.add('border-primary');
            });
            
            coverImageUpload.addEventListener('dragleave', function() {
                coverImageUpload.classList.remove('border-primary');
            });
            
            coverImageUpload.addEventListener('drop', function(e) {
                e.preventDefault();
                coverImageUpload.classList.remove('border-primary');
                
                if (e.dataTransfer.files.length) {
                    handleImageFile(e.dataTransfer.files[0]);
                }
            });
            
            // Gérer la sélection de fichier
            coverImageInput.addEventListener('change', function() {
                if (this.files.length) {
                    handleImageFile(this.files[0]);
                }
            });
            
            // Supprimer l'image
            removeImageBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                uploadPlaceholder.classList.remove('hidden');
                imagePreview.classList.add('hidden');
                coverImageInput.value = '';
                previewCoverImage.style.backgroundImage = '';
            });
            
            // Fonction pour traiter le fichier image
            function handleImageFile(file) {
                if (file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    
                    reader.onload = function(e) {
                        previewImage.src = e.target.result;
                        previewCoverImage.style.backgroundImage = `url(${e.target.result})`;
                        uploadPlaceholder.classList.add('hidden');
                        imagePreview.classList.remove('hidden');
                    };
                    
                    reader.readAsDataURL(file);
                }
            }
        });

// SELECTION DE L'IMAGE ET AFFICHAGE -------------------------------------------------------------------------------------------------------


// |---------------------------------------------------------------------------------------------------------------------------------------|

        document.addEventListener('DOMContentLoaded', function() {
            // Gestionnaire pour la catégorie
            const categoryDropdown = document.getElementById('category-dropdown');
            const categoryOptions = document.getElementById('category-options');
            const selectedCategory = document.getElementById('selected-category');
            
            categoryDropdown.addEventListener('click', function() {
                categoryOptions.classList.toggle('hidden');
            });
            
            document.querySelectorAll('#category-options > div').forEach(option => {
                option.addEventListener('click', function() {
                    selectedCategory.textContent = this.textContent;
                    categoryOptions.classList.add('hidden');
                });
            });
            
            // Gestionnaire pour la langue
            const languageDropdown = document.getElementById('language-dropdown');
            const languageOptions = document.getElementById('language-options');
            const selectedLanguage = document.getElementById('selected-language');
            
            languageDropdown.addEventListener('click', function() {
                languageOptions.classList.toggle('hidden');
            });
            
            document.querySelectorAll('#language-options > div').forEach(option => {
                option.addEventListener('click', function() {
                    selectedLanguage.textContent = this.textContent;
                    languageOptions.classList.add('hidden');
                });
            });
            
            // Fermer les dropdowns lors d'un clic à l'extérieur
            document.addEventListener('click', function(e) {
                if (!categoryDropdown.contains(e.target)) {
                    categoryOptions.classList.add('hidden');
                }
                
                if (!languageDropdown.contains(e.target)) {
                    languageOptions.classList.add('hidden');
                }
            });
        });
// ----------------------------------------------------------------------------------------------------------------------------------------


// Hastags des cours ----------------------------------------------------------------------------------------------------------------------

        document.addEventListener('DOMContentLoaded', function() {
            const tagsContainer = document.getElementById('tags-container');
            const tagInput = document.getElementById('tag-input');
            const tags = [];
            
            tagInput.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' && this.value.trim() !== '') {
                    e.preventDefault();
                    
                    if (tags.length < 5) {
                        const tag = this.value.trim();
                        if (!tags.includes(tag)) {
                            tags.push(tag);
                            addTagElement(tag);
                            this.value = '';
                        }
                    } else {
                        // Notification que le maximum de tags est atteint
                        alert('Vous avez atteint le maximum de 5 tags.');
                    }
                }
            });
            
            function addTagElement(tag) {
                const tagElement = document.createElement('div');
                tagElement.className = 'flex items-center bg-gray-900 dark:bg-gray-500 dark:text-gray-100 rounded-full px-3 py-1 text-sm';
                tagElement.innerHTML = `
                    <span>${tag}</span>
                    <button class="ml-1 text-gray-900 hover:text-red-900 focus:outline-none">
                        <i class="ri-close-line"></i>
                    </button>
                `;
                
                const removeButton = tagElement.querySelector('button');
                removeButton.addEventListener('click', function() {
                    const index = tags.indexOf(tag);
                    if (index !== -1) {
                        tags.splice(index, 1);
                        tagsContainer.removeChild(tagElement);
                    }
                });
                
                tagsContainer.appendChild(tagElement);
            }
        }); 
// Hastags des cours ----------------------------------------------------------------------------------------------------------------------


// range des heurs de cours ---------------------------------------------------------------------------------------------------------------

        document.addEventListener('DOMContentLoaded', function() {
            const durationRange = document.getElementById('duration-range');
            const durationValue = document.getElementById('duration-value');
            
            durationRange.addEventListener('input', function() {
                durationValue.value = this.value;
            });
            
            durationValue.addEventListener('input', function() {
                let value = parseInt(this.value);
                if (isNaN(value)) value = 1;
                if (value < 1) value = 1;
                if (value > 50) value = 50;
                
                this.value = value;
                durationRange.value = value;
            });
        });
// range des heurs de cours ---------------------------------------------------------------------------------------------------------------


// section des objectifs-------------------------------------------------------------------------------------------------------------------

        document.addEventListener('DOMContentLoaded', function() {
            const objectivesContainer = document.getElementById('objectives-container');
            const addObjectiveBtn = document.getElementById('add-objective');
            const previewObjectives = document.getElementById('preview-objectives');
            
            addObjectiveBtn.addEventListener('click', function() {
                addObjective();
            });
            
            function addObjective(value = '') {
                const objectiveItem = document.createElement('div');
                objectiveItem.className = 'objective-item flex items-start space-x-3 mb-3';
                objectiveItem.innerHTML = `
                    <div class="w-5 h-5 flex items-center justify-center mt-1 text-primary">
                        <i class="ri-checkbox-circle-line ri-lg"></i>
                    </div>
                    <input type="text" class="flex-grow px-3 py-2 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition bg-gray-100 bg-opacity-20 text-gray-700 dark:text-white" placeholder="Ex: Maîtriser une compétence spécifique" value="${value}">
                    <button class="remove-objective w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors">
                        <i class="ri-delete-bin-line ri-lg"></i>
                    </button>
                `;
                
                const removeBtn = objectiveItem.querySelector('.remove-objective');
                removeBtn.addEventListener('click', function() {
                    objectivesContainer.removeChild(objectiveItem);
                    updatePreviewObjectives();
                });
                
                const input = objectiveItem.querySelector('input');
                input.addEventListener('input', updatePreviewObjectives);
                
                objectivesContainer.appendChild(objectiveItem);
                updatePreviewObjectives();
            }
            
            function updatePreviewObjectives() {
                previewObjectives.innerHTML = '';
                
                document.querySelectorAll('.objective-item input').forEach(input => {
                    if (input.value.trim()) {
                        const li = document.createElement('li');
                        li.className = 'flex items-start';
                        li.innerHTML = `
                            <div class="w-4 h-4 flex items-center justify-center mt-0.5 mr-2 text-primary">
                                <i class="ri-checkbox-circle-line"></i>
                            </div>
                            <span>${input.value}</span>
                        `;
                        previewObjectives.appendChild(li);
                    }
                });
            }
            
            // Initialiser les gestionnaires d'événements pour les objectifs existants
            document.querySelectorAll('.remove-objective').forEach(btn => {
                btn.addEventListener('click', function() {
                    const objectiveItem = this.closest('.objective-item');
                    objectivesContainer.removeChild(objectiveItem);
                    updatePreviewObjectives();
                });
            });
            
            document.querySelectorAll('.objective-item input').forEach(input => {
                input.addEventListener('input', updatePreviewObjectives);
            });
            
            updatePreviewObjectives();
        });
// section des objectifs-------------------------------------------------------------------------------------------------------------------


// section des modules de cours ----------------------------------------------------------------------------------------------------------

        document.addEventListener('DOMContentLoaded', function() {
            const sectionsContainer = document.getElementById('sections-container');
            const addSectionBtn = document.getElementById('add-section');
            
            addSectionBtn.addEventListener('click', function() {
                addSection();
            });
            
            function addSection(title = '') {
                const sectionCount = document.querySelectorAll('.section-item').length + 1;
                const defaultTitle = title || `Section ${sectionCount}: Nouvelle section`;
                
                const sectionItem = document.createElement('div');
                sectionItem.className = 'section-item border border-gray-200 rounded-lg mb-4 overflow-hidden';
                sectionItem.innerHTML = `
                    <div class="section-header bg-gray-50 bg-opacity-20 px-4 py-3 flex items-center justify-between cursor-pointer">
                        <div class="flex items-center">
                            <div class="w-5 h-5 flex items-center justify-center mr-2 text-gray-500">
                                <i class="ri-arrow-down-s-line ri-lg section-toggle"></i>
                            </div>
                            <input type="text" class="section-title bg-transparent border-none outline-none font-medium" value="${defaultTitle}" placeholder="Titre de la section">
                        </div>
                        <div class="flex items-center space-x-2">
                            <button class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors">
                                <i class="ri-drag-move-2-line ri-lg"></i>
                            </button>
                            <button class="remove-section w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors">
                                <i class="ri-delete-bin-line ri-lg"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div class="section-content px-4 py-3">
                        <div class="lesson-list space-y-3">
                            <!-- Les leçons seront ajoutées ici -->
                        </div>
                        
                        <div class="add-lesson-buttons flex flex-wrap gap-2 mt-4">
                            <button class="add-video flex items-center px-3 py-1.5 bg-gray-50 bg-opacity-20 dark:text-white border border-gray-300 rounded-button text-sm text-gray-700 hover:bg-gray-700 transition-colors whitespace-nowrap">
                                <div class="w-4 h-4 flex items-center justify-center mr-1 text-primary">
                                    <i class="ri-video-line"></i>
                                </div>
                                <span>Vidéo</span>
                            </button>
                            <button class="add-text flex items-center px-3 py-1.5 bg-gray-50 bg-opacity-20 dark:text-white border border-gray-300 rounded-button text-sm text-gray-700 hover:bg-gray-700 transition-colors whitespace-nowrap">
                                <div class="w-4 h-4 flex items-center justify-center mr-1 text-blue-500">
                                    <i class="ri-file-text-line"></i>
                                </div>
                                <span>Texte</span>
                            </button>
                            <button class="add-quiz flex items-center px-3 py-1.5 bg-gray-50 bg-opacity-20 dark:text-white border border-gray-300 rounded-button text-sm text-gray-700 hover:bg-gray-700 transition-colors whitespace-nowrap">
                                <div class="w-4 h-4 flex items-center justify-center mr-1 text-orange-500">
                                    <i class="ri-question-line"></i>
                                </div>
                                <span>Quiz</span>
                            </button>
                            <button class="add-document flex items-center px-3 py-1.5 bg-gray-50 bg-opacity-20 dark:text-white border border-gray-300 rounded-button text-sm text-gray-700 hover:bg-gray-700 transition-colors whitespace-nowrap">
                                <div class="w-4 h-4 flex items-center justify-center mr-1 text-green-500">
                                    <i class="ri-file-line"></i>
                                </div>
                                <span>Document</span>
                            </button>
                            <button class="add-exercise flex items-center px-3 py-1.5 bg-gray-50 bg-opacity-20 dark:text-white border border-gray-300 rounded-button text-sm text-gray-700 hover:bg-gray-700 transition-colors whitespace-nowrap">
                                <div class="w-4 h-4 flex items-center justify-center mr-1 text-purple-500">
                                    <i class="ri-code-box-line"></i>
                                </div>
                                <span>Exercice</span>
                            </button>
                        </div>
                    </div>
                `;
                
                // Gestionnaire pour supprimer la section
                const removeBtn = sectionItem.querySelector('.remove-section');
                removeBtn.addEventListener('click', function() {
                    sectionsContainer.removeChild(sectionItem);
                });
                
                // Gestionnaire pour ouvrir/fermer la section
                const sectionHeader = sectionItem.querySelector('.section-header');
                const sectionContent = sectionItem.querySelector('.section-content');
                const sectionToggle = sectionItem.querySelector('.section-toggle');
                
                sectionHeader.addEventListener('click', function() {
                    sectionContent.classList.toggle('hidden');
                    sectionToggle.classList.toggle('ri-arrow-down-s-line');
                    sectionToggle.classList.toggle('ri-arrow-right-s-line');
                });
                
                // Gestionnaires pour ajouter des leçons
                const lessonList = sectionItem.querySelector('.lesson-list');
                
                sectionItem.querySelector('.add-video').addEventListener('click', function() {
                    addLesson(lessonList, 'video');
                });
                
                sectionItem.querySelector('.add-text').addEventListener('click', function() {
                    addLesson(lessonList, 'text');
                });
                
                sectionItem.querySelector('.add-quiz').addEventListener('click', function() {
                    addLesson(lessonList, 'quiz');
                });
                
                sectionItem.querySelector('.add-document').addEventListener('click', function() {
                    addLesson(lessonList, 'document');
                });
                
                sectionItem.querySelector('.add-exercise').addEventListener('click', function() {
                    addLesson(lessonList, 'exercise');
                });
                
                sectionsContainer.appendChild(sectionItem);
            }
            
            function addLesson(container, type) {
                let icon, color, title, duration;
                
                switch (type) {
                    case 'video':
                        icon = 'ri-video-line';
                        color = 'primary';
                        title = 'Nouvelle vidéo';
                        duration = 'Vidéo • 0:00';
                        break;
                    case 'text':
                        icon = 'ri-file-text-line';
                        color = 'blue-500';
                        title = 'Nouveau texte';
                        duration = 'Texte • 5 min de lecture';
                        break;
                    case 'quiz':
                        icon = 'ri-question-line';
                        color = 'orange-500';
                        title = 'Nouveau quiz';
                        duration = 'Quiz • 5 questions';
                        break;
                    case 'document':
                        icon = 'ri-file-line';
                        color = 'green-500';
                        title = 'Nouveau document';
                        duration = 'Document • PDF';
                        break;
                    case 'exercise':
                        icon = 'ri-code-box-line';
                        color = 'purple-500';
                        title = 'Nouvel exercice';
                        duration = 'Exercice pratique';
                        break;
                }
                
                const bgColor = type === 'video' ? 'primary/10' : `${color.split('-')[0]}-50`;
                
                const lessonItem = document.createElement('div');
                lessonItem.className = 'lesson-item bg-gray-100 bg-opacity-20 rounded-lg p-3';
                lessonItem.innerHTML = `
                    <div class="flex items-start">
                        <div class="w-8 h-8 flex items-center justify-center mr-3 bg-blue-50 text-blue-500 rounded-full">
                            <i class="${icon} ri-lg"></i>
                        </div>
                        <div class="flex-grow">
                            <input type="text" class="w-full bg-transparent border-none text-gray-700 dark:text-white outline-none font-medium" value="${title}" placeholder="Titre de la leçon">
                            <div class="flex items-center text-xs text-gray-500 mt-1">
                                <span class="mr-3">${duration}</span>
                                ${type === 'video' ? `
                                <label class="custom-switch flex items-center">
                                    <input type="checkbox">
                                    <span class="slider mr-2"></span>
                                    <span>Aperçu gratuit</span>
                                </label>
                                ` : ''}
                            </div>
                        </div>
                        <div class="flex items-center space-x-2">
                            <button class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors">
                                <i class="ri-edit-line ri-lg"></i>
                            </button>
                            <button class="remove-lesson w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors">
                                <i class="ri-delete-bin-line ri-lg"></i>
                            </button>
                        </div>
                    </div>
                `;
                
                const removeBtn = lessonItem.querySelector('.remove-lesson');
                removeBtn.addEventListener('click', function() {
                    container.removeChild(lessonItem);
                });
                
                container.appendChild(lessonItem);
            }
            
            // Initialiser les gestionnaires d'événements pour les sections existantes
            document.querySelectorAll('.section-header').forEach(header => {
                header.addEventListener('click', function() {
                    const content = this.nextElementSibling;
                    const toggle = this.querySelector('.section-toggle');
                    content.classList.toggle('hidden');
                    toggle.classList.toggle('ri-arrow-down-s-line');
                    toggle.classList.toggle('ri-arrow-right-s-line');
                });
            });
            
            document.querySelectorAll('.remove-section').forEach(btn => {
                btn.addEventListener('click', function() {
                    const sectionItem = this.closest('.section-item');
                    sectionsContainer.removeChild(sectionItem);
                });
            });
        });
// section des modules de cours ----------------------------------------------------------------------------------------------------------


// section des prix ---------------------------------------------------------------------------------------------------------------------


        document.addEventListener('DOMContentLoaded', function() {
            const pricingRadios = document.querySelectorAll('input[name="pricing"]');
            const priceContainer = document.getElementById('price-container');
            const previewPrice = document.getElementById('preview-price');
            const coursePrice = document.getElementById('course-price');
            
            pricingRadios.forEach(radio => {
                radio.addEventListener('change', function() {
                    if (this.value === 'free') {
                        priceContainer.classList.add('hidden');
                        previewPrice.textContent = 'Gratuit';
                    } else {
                        priceContainer.classList.remove('hidden');
                        updatePreviewPrice();
                    }
                });
            });
            
            coursePrice.addEventListener('input', updatePreviewPrice);
            
            function updatePreviewPrice() {
                const price = parseFloat(coursePrice.value);
                if (!isNaN(price) && price > 0) {
                    previewPrice.textContent = `${price.toFixed(2)} €`;
                } else {
                    previewPrice.textContent = '0.00 €';
                }
            }
        });
// ----------------------------------------------------------------------------------------------------------------------------


// section de prévisualisation ----------------------------------------------------------------------------------------------------------
    
        document.addEventListener('DOMContentLoaded', function() {
            const courseTitle = document.getElementById('course-title');
            const previewTitle = document.getElementById('preview-title');
            const previewDescription = document.getElementById('preview-description');
            const desktopPreviewBtn = document.getElementById('desktop-preview');
            const mobilePreviewBtn = document.getElementById('mobile-preview');
            const previewContainer = document.querySelector('.preview-container');
                const editor = document.getElementById('editor');

            
            // Mettre à jour le titre dans l'aperçu
            courseTitle.addEventListener('input', function() {
                previewTitle.textContent = this.value || 'Introduction au marketing digital';
            });


            editor.addEventListener('input', function() {
                previewDescription.textContent = this.value || 'Apprz les fondamentaux du marketing digital et développez vos compétences pour réussir dans le monde numérique.';
            });

        });
// section de prévisualisation ----------------------------------------------------------------------------------------------------------

// section de chargement de fichier...------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    const fileRessources = document.getElementById('fileRessources');
    const fileView = document.querySelector('.fileView');

    // Tableau pour stocker les fichiers sélectionnés
    let selectedFiles = [];

    fileRessources.addEventListener('change', function (e) {
        const files = Array.from(e.target.files);

        // Parcours chaque fichier sélectionné
        files.forEach((file, index) => {
            const fileName = file.name;
            const ext = fileName.split('.').pop().toLowerCase();
            const src = URL.createObjectURL(file);

            // On crée un identifiant unique pour chaque fichier
            const fileId = `${fileName}-${Date.now()}-${index}`;

            // On stocke le fichier avec son ID pour gestion future (suppression par exemple)
            selectedFiles.push({ id: fileId, file });

            let content = '';

            // Choix du rendu selon l’extension
            switch (ext) {
                case 'pdf':
                case 'docx':
                case 'txt':
                case 'html':
                    content = `
                    <div class="file-item flex align-center mb-2" data-id="${fileId}" style="align-items:center;">
                        <div class="w-4 h-4 p-6 rounded-lg bg-secondary flex items-center justify-center mr-1 text-primary">
                            <i class="ri-file-line"></i>
                        </div>                                   
                        <div class="flex justify-between align-center w-full">
                            <h2>${fileName}</h2>
                            <i class="ri-close-line cursor-pointer delete-file"></i>
                        </div>
                    </div>`;
                    break;

                case 'jpg':
                case 'jpeg':
                case 'png':
                    content = `
                    <div class="file-item flex align-center mb-2" data-id="${fileId}" style="align-items:center;">
                        <div class="rounded-lg flex items-center justify-center mr-1 text-primary">
                            <img src="${src}" class="w-10 h-10 rounded-full object-cover" />
                        </div>                                   
                        <div class="flex justify-between align-center w-full">
                            <h2>${fileName}</h2>
                            <i class="ri-close-line cursor-pointer delete-file"></i>
                        </div>
                    </div>`;
                    break;

                case 'mp3':
                    content = `
                    <div class="file-item flex align-center mb-2" data-id="${fileId}" style="align-items:center;">
                        <div class="w-4 h-4 p-6 rounded-lg bg-secondary flex items-center justify-center mr-1 text-primary">
                            <audio controls src="${src}"></audio>
                        </div>                                   
                        <div class="flex justify-between align-center w-full">
                            <h2>${fileName}</h2>
                            <i class="ri-close-line cursor-pointer delete-file"></i>
                        </div>
                    </div>`;
                    break;

                default:
                    content = `
                    <div class="file-item flex align-center mb-2" data-id="${fileId}" style="align-items:center;">
                        <div class="w-4 h-4 p-6 rounded-lg bg-gray-300 flex items-center justify-center mr-1 text-primary">
                            <i class="ri-file-unknow-line"></i>
                        </div>                                   
                        <div class="flex justify-between align-center w-full">
                            <h2>${fileName}</h2>
                            <i class="ri-close-line cursor-pointer delete-file"></i>
                        </div>
                    </div>`;
                    break;
            }

            // Ajout du bloc HTML dans la vue
            fileView.innerHTML += content;
        });
    });

    // Gestion du clic sur l'icône de suppression
    fileView.addEventListener('click', function (e) {
        if (e.target.classList.contains('delete-file')) {
            const fileItem = e.target.closest('.file-item');
            const fileId = fileItem.getAttribute('data-id');

            // On supprime du DOM
            fileItem.remove();

            // Optionnel : tu peux aussi le supprimer du tableau selectedFiles si tu veux l'envoyer après
            selectedFiles = selectedFiles.filter(f => f.id !== fileId);
        }
    });
});

// section de chargement de fichier...------------------------------------------------------------------------------------------------
