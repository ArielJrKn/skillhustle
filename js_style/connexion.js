
        document.addEventListener('DOMContentLoaded', function() {
            const toggleButton = document.querySelector('.toggle-password');
            const passwordInput = document.getElementById('password');
            
            toggleButton.addEventListener('click', function() {
                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', type);
                
                // Toggle icon
                const icon = toggleButton.querySelector('i');
                if (type === 'password') {
                    icon.className = 'ri-eye-line';
                } else {
                    icon.className = 'ri-eye-off-line';
                }
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
            const loginForm = document.getElementById('loginForm');
            const loginButton = document.getElementById('loginButton');
            
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Show loading state
                loginButton.innerHTML = '<div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div> Logging in...';
                loginButton.disabled = true;
                
                // Simulate API call
                setTimeout(function() {
                    loginButton.innerHTML = '<span>Login</span>';
                    loginButton.disabled = false;
                    
                    // Here you would normally redirect or show success message
                    // For demo purposes, we'll just reset the form
                    loginForm.reset();
                }, 2000);
            });
        });



        document.addEventListener('DOMContentLoaded', function() {
            const toggleThemeButton = document.getElementById('toggleTheme');
            const body = document.body;
            const themeIcon = toggleThemeButton.querySelector('i');
            const themeText = toggleThemeButton.querySelector('span');
            
            toggleThemeButton.addEventListener('click', function() {
                body.classList.toggle('dark');
                
                if (body.classList.contains('dark')) {
                    themeIcon.className = 'ri-sun-line';
                    themeText.textContent = 'Switch to Light Mode';
                } else {
                    themeIcon.className = 'ri-moon-line';
                    themeText.textContent = 'Switch to Dark Mode';
                }
            });
        });
