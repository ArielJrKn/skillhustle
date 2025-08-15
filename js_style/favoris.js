document.addEventListener('DOMContentLoaded', function() {
            const filterButtons = document.querySelectorAll('.filter-btn');
            const cards = document.querySelectorAll('.card');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => {
                        btn.classList.remove('active', 'bg-primary', 'text-white');
                        btn.classList.add('bg-gray-100', 'text-gray-700');
                    });
                    
                    // Add active class to clicked button
                    this.classList.add('active', 'bg-primary', 'text-white');
                    this.classList.remove('bg-gray-100', 'text-gray-700');
                    
                    const filterType = this.id.replace('filter-', '');
                    
                    // Filter cards
                    cards.forEach(card => {
                        if (filterType === 'all' || card.dataset.type === filterType) {
                            card.style.display = 'block';
                            // Reset animation
                            card.style.animation = 'none';
                            card.offsetHeight; // Trigger reflow
                            card.style.animation = 'cardEntrance 0.5s forwards';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });
        });


            
            const favoriteCheckboxes = document.querySelectorAll('.favorite-checkbox');
            
document.addEventListener('DOMContentLoaded', function() {
            const favoriteCheckboxes = document.querySelectorAll('.favorite-checkbox');
            
            favoriteCheckboxes.forEach(checkbox => {
                checkbox.addEventListener('change', function() {
                    const card = this.closest('.card');
                    
                    if (!this.checked) {
                        card.style.opacity = '0.7';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });