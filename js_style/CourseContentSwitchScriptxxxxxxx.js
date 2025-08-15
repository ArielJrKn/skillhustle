// Tab Switching Script 
    document.addEventListener('DOMContentLoaded', function() {
    const showSolutionBtn = document.getElementById('showSolutionBtn');
    const solutionModal = document.getElementById('solutionModal');
    const closeSolutionModal = document.getElementById('closeSolutionModal');
    const closeSolutionBtn = document.getElementById('closeSolutionBtn');
    function openModal() {
    solutionModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    }
    function closeModal() {
    solutionModal.classList.add('hidden');
    document.body.style.overflow = '';
    }
    showSolutionBtn.addEventListener('click', openModal);
    closeSolutionModal.addEventListener('click', closeModal);
    closeSolutionBtn.addEventListener('click', closeModal);
    solutionModal.addEventListener('click', function(e) {
    if (e.target === solutionModal) {
    closeModal();
    }
    });
    document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !solutionModal.classList.contains('hidden')) {
    closeModal();
    }
    });
    });
