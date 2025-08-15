// section filtres des cours--------------------------------------------------------------------------------------------------
    document.addEventListener('DOMContentLoaded', function() {
        const categoryFilterBtn = document.getElementById('categoryFilterBtn');
        const categoryFilterMenu = document.getElementById('categoryFilterMenu');
        const sortFilterBtn = document.getElementById('sortFilterBtn');
        const sortFilterMenu = document.getElementById('sortFilterMenu');

        if (categoryFilterBtn && categoryFilterMenu) {
            categoryFilterBtn.addEventListener('click', function() {
                categoryFilterMenu.classList.toggle('hidden');
                if (sortFilterMenu) sortFilterMenu.classList.add('hidden');
            });
        }

        if (sortFilterBtn && sortFilterMenu) {
            sortFilterBtn.addEventListener('click', function() {
                sortFilterMenu.classList.toggle('hidden');
                if (categoryFilterMenu) categoryFilterMenu.classList.add('hidden');
            });
        }

        document.addEventListener('click', function(event) {
            if (categoryFilterBtn && categoryFilterMenu && !categoryFilterBtn.contains(event.target) && !categoryFilterMenu.contains(event.target)) {
                categoryFilterMenu.classList.add('hidden');
            }

            if (sortFilterBtn && sortFilterMenu && !sortFilterBtn.contains(event.target) && !sortFilterMenu.contains(event.target)) {
                sortFilterMenu.classList.add('hidden');
            }
        });
    });
// section filtres des cours--------------------------------------------------------------------------------------------------


// section affichage -------------------------------------------------------------------------------------------------------------
    document.addEventListener('DOMContentLoaded', function() {
        const gridViewBtn = document.getElementById('gridViewBtn');
        const listViewBtn = document.getElementById('listViewBtn');
        const coursesGrid = document.getElementById('coursesGrid');
        const coursesList = document.getElementById('coursesList');

        if (gridViewBtn && listViewBtn && coursesGrid && coursesList) {
            gridViewBtn.addEventListener('click', function() {
                gridViewBtn.classList.add('active');
                listViewBtn.classList.remove('active');
                coursesGrid.classList.remove('hidden');
                coursesList.classList.add('hidden');
            });

            listViewBtn.addEventListener('click', function() {
                listViewBtn.classList.add('active');
                gridViewBtn.classList.remove('active');
                coursesList.classList.remove('hidden');
                coursesGrid.classList.add('hidden');
            });
        }
    });
// section affichage -------------------------------------------------------------------------------------------------------------


// cours menu -----------------------------------------------------------------------------------------------------------------
    document.addEventListener('DOMContentLoaded', function() {
        const courseMenuBtns = document.querySelectorAll('.course-menu-btn');
        const courseMenus = document.querySelectorAll('.course-menu');

        courseMenuBtns.forEach((btn, index) => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                courseMenus[index].classList.toggle('hidden');

            // Close other menus
                courseMenus.forEach((menu, menuIndex) => {
                    if (menuIndex !== index) {
                        menu.classList.add('hidden');
                    }
                });
            });
        });

        document.addEventListener('click', function(event) {
            let clickedOnMenu = false;

            courseMenuBtns.forEach((btn, index) => {
                if (btn.contains(event.target) || courseMenus[index].contains(event.target)) {
                    clickedOnMenu = true;
                }
            });

            if (!clickedOnMenu) {
                courseMenus.forEach(menu => {
                    menu.classList.add('hidden');
                });
            }
        });
    });

// ----------------------------------------------------------------------------------------------------------------------------------


// supprimer cours -------------------------------------------------------------------------------------------------------------------
    document.addEventListener('DOMContentLoaded', function() {
        const deleteModal = document.getElementById('deleteModal');
        const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');
        const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
        const deleteLinks = document.querySelectorAll('a[href="#"][class*="text-red-400"]');

        if (deleteModal && cancelDeleteBtn && confirmDeleteBtn && deleteLinks) {
            deleteLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    deleteModal.classList.remove('hidden');
                });
            });

            cancelDeleteBtn.addEventListener('click', function() {
                deleteModal.classList.add('hidden');
            });

            confirmDeleteBtn.addEventListener('click', function() {
            // Here you would add the actual delete functionality
                deleteModal.classList.add('hidden');
            // You could show a success notification here
            });

        // Close modal when clicking outside
            deleteModal.addEventListener('click', function(e) {
                if (e.target === deleteModal) {
                    deleteModal.classList.add('hidden');
                }
            });
        }
    });
// -------------------------------------------------------------------------------------------------------------------------------

        document.addEventListener('DOMContentLoaded', function() {
        const newCourseBtn = document.getElementById('newCourseBtn');

        if (newCourseBtn) {
            newCourseBtn.addEventListener('click', function(e) {
            	e.preventDefault();
                window.location.href = "createCourse.html";
            });
        }
    });