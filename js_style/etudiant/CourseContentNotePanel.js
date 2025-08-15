// Note Panel Toggle Script 
    document.addEventListener('DOMContentLoaded', function() {
    const noteToggle = document.getElementById('noteToggle');
    const notePanel = document.querySelector('.note-panel');
    noteToggle.addEventListener('click', function() {
    const isExpanded = notePanel.classList.contains('expanded');
    if (isExpanded) {
    notePanel.classList.remove('expanded');
    notePanel.classList.add('collapsed');
    noteToggle.querySelector('i').classList.remove('ri-arrow-down-s-line');
    noteToggle.querySelector('i').classList.add('ri-arrow-up-s-line');
    } else {
    notePanel.classList.remove('collapsed');
    notePanel.classList.add('expanded');
    noteToggle.querySelector('i').classList.remove('ri-arrow-up-s-line');
    noteToggle.querySelector('i').classList.add('ri-arrow-down-s-line');
    }
    });
    });