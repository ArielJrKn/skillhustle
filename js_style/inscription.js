document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('registerForm');
            const password = document.getElementById('password');
            const confirmPassword = document.getElementById('confirmPassword');
            
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Vérifier si les mots de passe correspondent
                if (password.value !== confirmPassword.value) {
                    confirmPassword.setCustomValidity("Les mots de passe ne correspondent pas");
                } else {
                    confirmPassword.setCustomValidity("");
                }
                
                if (form.checkValidity()) {
                    // Simuler l'envoi du formulaire
                    alert("Inscription réussie ! Vous allez être redirigé vers la page de connexion.");
                    // Ici, vous pourriez rediriger l'utilisateur ou effectuer d'autres actions
                }
                
                form.classList.add('was-validated');
            });
            
            // Vérifier la correspondance des mots de passe en temps réel
            confirmPassword.addEventListener('input', function() {
                if (password.value !== confirmPassword.value) {
                    confirmPassword.setCustomValidity("Les mots de passe ne correspondent pas");
                } else {
                    confirmPassword.setCustomValidity("");
                }
            });
            
            // Réinitialiser la validation personnalisée lors de la modification du mot de passe
            password.addEventListener('input', function() {
                if (confirmPassword.value) {
                    if (password.value !== confirmPassword.value) {
                        confirmPassword.setCustomValidity("Les mots de passe ne correspondent pas");
                    } else {
                        confirmPassword.setCustomValidity("");
                    }
                }
            });
        });



document.addEventListener('DOMContentLoaded', function() {
            const toggleButtons = document.querySelectorAll('.password-toggle');
            
            toggleButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const targetId = this.getAttribute('data-target');
                    const passwordInput = document.getElementById(targetId);
                    const icon = this.querySelector('i');
                    
                    if (passwordInput.type === 'password') {
                        passwordInput.type = 'text';
                        icon.classList.remove('ri-eye-line');
                        icon.classList.add('ri-eye-off-line');
                    } else {
                        passwordInput.type = 'password';
                        icon.classList.remove('ri-eye-off-line');
                        icon.classList.add('ri-eye-line');
                    }
                });
            });
        });