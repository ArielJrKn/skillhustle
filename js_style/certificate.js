document.addEventListener('DOMContentLoaded', function() {
            const statusFilterBtn = document.getElementById('statusFilterBtn');
            const statusDropdown = document.getElementById('statusDropdown');
            const dateFilterBtn = document.getElementById('dateFilterBtn');
            const dateDropdown = document.getElementById('dateDropdown');
            const categoryFilterBtn = document.getElementById('categoryFilterBtn');
            const categoryDropdown = document.getElementById('categoryDropdown');
            
            function toggleDropdown(dropdown) {
                const isActive = dropdown.classList.contains('show');
                
                // Close all dropdowns first
                document.querySelectorAll('.filter-dropdown').forEach(el => {
                    el.classList.remove('show');
                });
                
                // Toggle the clicked dropdown
                if (!isActive) {
                    dropdown.classList.add('show');
                }
            }
            
            statusFilterBtn.addEventListener('click', function() {
                toggleDropdown(statusDropdown);
            });
            
            dateFilterBtn.addEventListener('click', function() {
                toggleDropdown(dateDropdown);
            });
            
            categoryFilterBtn.addEventListener('click', function() {
                toggleDropdown(categoryDropdown);
            });
            
            // Close dropdowns when clicking outside
            document.addEventListener('click', function(event) {
                if (!event.target.closest('#statusFilterBtn') && 
                    !event.target.closest('#statusDropdown') &&
                    !event.target.closest('#dateFilterBtn') && 
                    !event.target.closest('#dateDropdown') &&
                    !event.target.closest('#categoryFilterBtn') && 
                    !event.target.closest('#categoryDropdown')) {
                    document.querySelectorAll('.filter-dropdown').forEach(el => {
                        el.classList.remove('show');
                    });
                }
            });
        });