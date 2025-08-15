        document.addEventListener('DOMContentLoaded', function() {
            const hintToggle = document.getElementById('hintToggle');
            const solutionToggle = document.getElementById('solutionToggle');
            const hintContent = document.getElementById('hintContent');
            const solutionContent = document.getElementById('solutionContent');
            
            hintToggle.addEventListener('click', function() {
                this.classList.toggle('active');
                hintContent.classList.toggle('hidden');
            });
            
            solutionToggle.addEventListener('click', function() {
                this.classList.toggle('active');
                solutionContent.classList.toggle('hidden');
            });
        });
