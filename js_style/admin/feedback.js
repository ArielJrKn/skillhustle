 // système de reponse de feedback 
    document.addEventListener('DOMContentLoaded', function(){
            const messageCard = document.querySelectorAll('.message-card');
            const feedbackdetail = document.querySelector('.FeedbacksDetail');
            const closeFeedback = document.getElementById('close');

            messageCard.forEach(m => {
                m.addEventListener('click', function(){
                    feedbackdetail.classList.remove('hidden');
                });
            });

            closeFeedback.addEventListener('click', function(){
                feedbackdetail.classList.add('hidden');
            });

            document.addEventListener('click', function(e){
                if (!feedbackdetail.classList.contains('hidden') && !feedbackdetail.contains(e.target) && !messageCard.contains(e.target)) {
                    feedbackdetail.classList.add('hidden');
                }
            })
        }); 

    // système d'onglet 
            document.addEventListener("DOMContentLoaded", function(){
            const tabs = document.querySelectorAll('.tab');
            const contents = document.querySelectorAll('.tab-content');

            tabs.forEach(tab => {
                tab.addEventListener('click', function(){
                    const data = tab.getAttribute('data-tab');
                    
                    tabs.forEach(tab => {
                        tab.classList.remove('active');
                    });

                    contents.forEach(content => {
                        content.classList.remove('active');
                    });

                    tab.classList.add('active');
                    document.getElementById(data).classList.add('active')

                });
            });
        });
