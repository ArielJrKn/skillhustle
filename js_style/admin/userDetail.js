document.addEventListener('DOMContentLoaded', function () {
            const tabEnrolled = document.getElementById('tab-enrolled');
            const tabCreated = document.getElementById('tab-created');
            const contentEnrolled = document.getElementById('content-enrolled');
            const contentCreated = document.getElementById('content-created');
            tabEnrolled.addEventListener('click', function () {
                tabEnrolled.classList.add('border-primary', 'text-primary');
                tabEnrolled.classList.remove('border-transparent', 'text-gray-500', 'hover:text-gray-700', 'hover:border-gray-300');
                tabCreated.classList.remove('border-primary', 'text-primary');
                tabCreated.classList.add('border-transparent', 'text-gray-500', 'hover:text-gray-700', 'hover:border-gray-300');
                contentEnrolled.classList.remove('hidden');
                contentCreated.classList.add('hidden');
            });
            tabCreated.addEventListener('click', function () {
                tabCreated.classList.add('border-primary', 'text-primary');
                tabCreated.classList.remove('border-transparent', 'text-gray-500', 'hover:text-gray-700', 'hover:border-gray-300');
                tabEnrolled.classList.remove('border-primary', 'text-primary');
                tabEnrolled.classList.add('border-transparent', 'text-gray-500', 'hover:text-gray-700', 'hover:border-gray-300');
                contentCreated.classList.remove('hidden');
                contentEnrolled.classList.add('hidden');
            });
        });