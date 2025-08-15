// système de navigation
        document.addEventListener('DOMContentLoaded', function() {
  // Sélectionner tous les onglets et contenus
          const tabs = document.querySelectorAll('.settings-tab');
          const contents = document.querySelectorAll('.settings-content');
          
      // Fonction pour activer un onglet
          function activateTab(tab) {
        // Désactiver tous les onglets
            tabs.forEach(t => {
              t.classList.remove('active', 'border-primary', 'text-gray-900');
              t.classList.add('text-gray-500', 'border-transparent');
          });
            
        // Activer l'onglet cliqué
            tab.classList.add('active', 'border-primary', 'text-gray-900');
            tab.classList.remove('text-gray-500', 'border-transparent');
            
        // Masquer tous les contenus
            contents.forEach(c => c.classList.add('hidden'));
            
        // Afficher le contenu correspondant
            const tabId = tab.id.replace('tab-', 'content-');
            const content = document.getElementById(tabId);
            if (content) {
              content.classList.remove('hidden');
          }
      }
      
      // Ajouter les écouteurs d'événements
      tabs.forEach(tab => {
        tab.addEventListener('click', () => activateTab(tab));
    });
      
      // Activer le premier onglet par défaut
      if (tabs.length > 0) {
        activateTab(tabs[0]);
    }
});

// système toggle
document.addEventListener('DOMContentLoaded', function() {
            const toggles = document.querySelectorAll('.toggle-checkbox');
            
            toggles.forEach(toggle => {
                toggle.addEventListener('change', function() {
                    // In a real app, you would save the toggle state here
                    console.log(`Toggle ${this.id} is now ${this.checked ? 'on' : 'off'}`);
                });
            });
        });

