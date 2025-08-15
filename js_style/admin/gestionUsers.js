document.addEventListener('DOMContentLoaded', function() {
            const addUserBtn = document.getElementById('add-user-btn');
            const addUserModal = document.getElementById('add-user-modal');
            const closeModalBtn = document.getElementById('close-modal');
            const deleteModal = document.getElementById('delete-modal');
            const closeDeleteModalBtn = document.getElementById('close-delete-modal');
            const deleteButtons = document.querySelectorAll('button i.ri-delete-bin-line');
            
            // Add User Modal
            addUserBtn.addEventListener('click', function() {
                addUserModal.classList.remove('hidden');
            });
            
            closeModalBtn.addEventListener('click', function() {
                addUserModal.classList.add('hidden');
            });
            
            // Delete Confirmation Modal
            deleteButtons.forEach(button => {
                button.parentElement.addEventListener('click', function() {
                    deleteModal.classList.remove('hidden');
                });
            });
            
            closeDeleteModalBtn.addEventListener('click', function() {
                deleteModal.classList.add('hidden');
            });
            
            // Close modals when clicking outside
            window.addEventListener('click', function(event) {
                if (event.target === addUserModal) {
                    addUserModal.classList.add('hidden');
                }
                if (event.target === deleteModal) {
                    deleteModal.classList.add('hidden');
                }
            });
        });