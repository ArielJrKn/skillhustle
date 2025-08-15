document.addEventListener('DOMContentLoaded', function() {
            const progressCircles = document.querySelectorAll('.progress-circle-value');
            
            progressCircles.forEach(circle => {
                const radius = circle.getAttribute('r');
                const circumference = 2 * Math.PI * radius;
                
                // Set the initial dasharray to the circumference
                circle.style.strokeDasharray = circumference;
                
                // Get the current dashoffset from the style
                const currentOffset = parseFloat(circle.style.strokeDashoffset);
                
                // Animate from full circumference to the current offset
                let start = circumference;
                const end = currentOffset;
                const duration = 1500;
                const startTime = performance.now();
                
                function animate(time) {
                    const elapsed = time - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const current = start - (start - end) * progress;
                    
                    circle.style.strokeDashoffset = current + 'px';
                    
                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    }
                }
                
                requestAnimationFrame(animate);
            });
        });