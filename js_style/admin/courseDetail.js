document.addEventListener('DOMContentLoaded', function () {
           const supp = document.getElementById('supp');
           const modal = document.querySelector('.modal');

           supp.addEventListener('click', function(){
            modal.classList.remove('hidden');
           })
        });

        window.onclick = function (event) {
                if (event.target == document.getElementById('refuseModal')) {
                    document.getElementById('refuseModal').style.display = 'none';
                document.body.style.overflow = 'auto';                }
            }