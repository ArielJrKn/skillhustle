
        document.addEventListener('DOMContentLoaded', function() {
            const skillInput = document.getElementById('skillInput');
            const addSkillBtn = document.getElementById('addSkill');
            const skillTags = document.getElementById('skillTags');
            
            function addSkill() {
                const skill = skillInput.value.trim();
                if (skill) {
                    const tagElement = document.createElement('div');
                    tagElement.className = 'tag flex items-center px-3 py-1 rounded-full';
                    tagElement.innerHTML = `
                        <span>${skill}</span>
                        <button type="button" class="ml-2 w-4 h-4 flex items-center justify-center text-gray-500 hover:text-gray-700">
                            <i class="ri-close-line"></i>
                        </button>
                    `;
                    
                    tagElement.querySelector('button').addEventListener('click', function() {
                        tagElement.remove();
                    });
                    
                    skillTags.appendChild(tagElement);
                    skillInput.value = '';
                }
            }
            
            addSkillBtn.addEventListener('click', addSkill);
            
            skillInput.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    addSkill();
                }
            });
            
            // Add event listeners to existing skill tags
            const removeButtons = skillTags.querySelectorAll('button');
            removeButtons.forEach(button => {
                button.addEventListener('click', function() {
                    button.closest('.tag').remove();
                });
            });
        });


        document.addEventListener('DOMContentLoaded', function() {
            const photoUpload = document.getElementById('photoUpload');
            const profilePreview = document.getElementById('profilePreview');
            const uploadZone = document.querySelector('.upload-zone');
            
            photoUpload.addEventListener('change', function(e) {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        profilePreview.src = e.target.result;
                    };
                    reader.readAsDataURL(file);
                }
            });
            
            // Drag and drop functionality
            uploadZone.addEventListener('dragover', function(e) {
                e.preventDefault();
                uploadZone.classList.add('border-primary', 'bg-primary', 'bg-opacity-5');
            });
            
            uploadZone.addEventListener('dragleave', function(e) {
                e.preventDefault();
                uploadZone.classList.remove('border-primary', 'bg-primary', 'bg-opacity-5');
            });
            
            uploadZone.addEventListener('drop', function(e) {
                e.preventDefault();
                uploadZone.classList.remove('border-primary', 'bg-primary', 'bg-opacity-5');
                
                const file = e.dataTransfer.files[0];
                if (file && file.type.match('image.*')) {
                    photoUpload.files = e.dataTransfer.files;
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        profilePreview.src = e.target.result;
                    };
                    reader.readAsDataURL(file);
                }
            });
        });


        document.addEventListener('DOMContentLoaded', function() {
            const profileForm = document.getElementById('profileForm');
            const saveButton = document.getElementById('saveButton');
            const loadingBar = document.getElementById('loadingBar');
            const toast = document.getElementById('toast');
            const toastMessage = document.getElementById('toastMessage');
            const toastIcon = document.getElementById('toastIcon');
            const bioTextarea = document.getElementById('bio');
            const bioCount = document.getElementById('bioCount');
            
            // Character counter for bio
            bioTextarea.addEventListener('input', function() {
                const count = bioTextarea.value.length;
                bioCount.textContent = count;
                
                if (count > 300) {
                    bioCount.classList.add('text-red-500');
                } else {
                    bioCount.classList.remove('text-red-500');
                }
            });
            
            // Form submission
            profileForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Show loading bar
                loadingBar.classList.remove('opacity-0');
                
                // Disable save button
                saveButton.disabled = true;
                saveButton.classList.add('opacity-70');
                saveButton.innerHTML = `
                    <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Saving...</span>
                `;
                
                // Simulate API call
                setTimeout(function() {
                    // Hide loading bar
                    loadingBar.classList.add('opacity-0');
                    
                    // Re-enable save button
                    saveButton.disabled = false;
                    saveButton.classList.remove('opacity-70');
                    saveButton.innerHTML = `
                        <span class="w-5 h-5 flex items-center justify-center">
                            <i class="ri-save-line"></i>
                        </span>
                        <span>Save Changes</span>
                    `;
                    
                    // Show success toast
                    toastIcon.innerHTML = '<i class="ri-check-line"></i>';
                    toastIcon.className = 'w-6 h-6 flex items-center justify-center text-white bg-green-500 rounded-full';
                    toastMessage.textContent = 'Profile updated successfully!';
                    toast.classList.remove('translate-y-16', 'opacity-0');
                    
                    // Hide toast after 3 seconds
                    setTimeout(function() {
                        toast.classList.add('translate-y-16', 'opacity-0');
                    }, 3000);
                }, 2000);
            });
        });