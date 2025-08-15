document.addEventListener('DOMContentLoaded', function() {
            const gridViewBtn = document.getElementById('grid-view');
            const listViewBtn = document.getElementById('list-view');
            const courseGrid = document.getElementById('course-grid');
            const courseList = document.getElementById('course-list');
            
            gridViewBtn.addEventListener('click', function() {
                gridViewBtn.classList.add('active');
                listViewBtn.classList.remove('active');
                courseGrid.classList.remove('hidden');
                courseList.classList.add('hidden');
            });
            
            listViewBtn.addEventListener('click', function() {
                listViewBtn.classList.add('active');
                gridViewBtn.classList.remove('active');
                courseList.classList.remove('hidden');
                courseGrid.classList.add('hidden');
            });
        });