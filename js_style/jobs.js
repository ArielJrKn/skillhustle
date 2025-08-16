// filter interactions
	document.addEventListener('DOMContentLoaded', function() {
		const modal = document.getElementById('applicationModal');
		const sortButton = document.getElementById('sortButton');
		const sortDropdown = document.getElementById('sortDropdown');
		const selectedSort = document.getElementById('selectedSort');
		let currentSort = 'relevant';
		function toggleDropdown() {
			sortDropdown.classList.toggle('hidden');
		}
		function closeDropdown() {
			sortDropdown.classList.add('hidden');
		}
		function handleSortSelection(e) {
			const button = e.target.closest('button');
			if (!button) return;
			const value = button.dataset.value;
			const text = button.textContent.trim();
			if (value === currentSort) {
				closeDropdown();
				return;
			}
			currentSort = value;
			selectedSort.textContent = text;
			const checkIcons = sortDropdown.querySelectorAll('.ri-check-line');
			checkIcons.forEach(icon => icon.classList.add('opacity-0'));
			button.querySelector('.ri-check-line').classList.remove('opacity-0');
			sortJobListings(value);
			closeDropdown();
		}
		function sortJobListings(sortType) {
			const jobCards = Array.from(document.querySelectorAll('.job-card'));
			const jobsContainer = jobCards[0].parentElement;
			jobCards.sort((a, b) => {
				switch(sortType) {
				case 'newest':
		return -1; // In a real app, would compare dates
		case 'highest':
			const salaryA = parseInt(a.querySelector('.text-gray-500.text-sm').textContent.match(/\d+/g)[0]);
			const salaryB = parseInt(b.querySelector('.text-gray-500.text-sm').textContent.match(/\d+/g)[0]);
			return salaryB - salaryA;
		case 'lowest':
			const salaryC = parseInt(a.querySelector('.text-gray-500.text-sm').textContent.match(/\d+/g)[0]);
			const salaryD = parseInt(b.querySelector('.text-gray-500.text-sm').textContent.match(/\d+/g)[0]);
			return salaryC - salaryD;
		case 'company':
			const companyA = a.querySelector('p').textContent.trim();
			const companyB = b.querySelector('p').textContent.trim();
			return companyA.localeCompare(companyB);
		default:
			return 0;
		}
		});
			jobCards.forEach(card => jobsContainer.appendChild(card));
		}
		sortButton.addEventListener('click', toggleDropdown);
		sortDropdown.addEventListener('click', handleSortSelection);
		document.addEventListener('click', (e) => {
			if (!sortButton.contains(e.target) && !sortDropdown.contains(e.target)) {
				closeDropdown();
			}
		});
		const confirmationModal = document.getElementById('confirmationModal');
		const applyButtons = document.querySelectorAll('#applyNowBtn');
		const closeBtn = document.getElementById('closeModal');
		const cancelBtn = document.getElementById('cancelBtn');
		const confirmationCloseBtn = document.getElementById('confirmationCloseBtn');
		const applicationForm = document.getElementById('applicationForm');
		function openModal(jobTitle, companyName) {
			document.getElementById('modalJobTitle').textContent = jobTitle;
			document.getElementById('modalCompanyName').textContent = companyName;
			modal.classList.remove('hidden');
			modal.classList.add('flex');
			document.body.style.overflow = 'hidden';
		}
		function closeModal() {
			modal.classList.add('hidden');
			modal.classList.remove('flex');
			document.body.style.overflow = '';
			applicationForm.reset();
		}
		function showConfirmation() {
			confirmationModal.classList.remove('hidden');
			confirmationModal.classList.add('flex');
		}
		function closeConfirmation() {
			confirmationModal.classList.add('hidden');
			confirmationModal.classList.remove('flex');
			document.body.style.overflow = '';
		}
		applyButtons.forEach(button => {
			button.addEventListener('click', (e) => {
				const jobCard = e.target.closest('.job-card');
				const jobTitle = jobCard.querySelector('h3').textContent;
				const companyName = jobCard.querySelector('p').textContent;
				openModal(jobTitle, companyName);
			});
		});
		closeBtn.addEventListener('click', closeModal);
		cancelBtn.addEventListener('click', closeModal);
		confirmationCloseBtn.addEventListener('click', closeConfirmation);
		modal.addEventListener('click', (e) => {
			if (e.target === modal) closeModal();
		});
		confirmationModal.addEventListener('click', (e) => {
			if (e.target === confirmationModal) closeConfirmation();
		});
		applicationForm.addEventListener('submit', (e) => {
			e.preventDefault();
			closeModal();
			showConfirmation();
		});
		const fileInput = document.getElementById('resumeUpload');
		fileInput.addEventListener('change', function() {
			const fileName = this.files[0]?.name;
			if (fileName) {
				const label = this.nextElementSibling;
				label.querySelector('p').textContent = fileName;
			}
		});
		const rangeSlider = document.querySelector('.range-slider');
		const rangeValue = document.querySelector('.range-slider + div + div');
		if (rangeSlider && rangeValue) {
			rangeSlider.addEventListener('input', function() {
				const value = parseInt(this.value).toLocaleString('en-US');
				rangeValue.textContent = `$${value}`;
			});
		}
		const checkboxes = document.querySelectorAll('.custom-checkbox');
		checkboxes.forEach(checkbox => {
			checkbox.addEventListener('change', function() {
	// Filter functionality would go here in a real application
			});
		});
	});

document.addEventListener('DOMContentLoaded', function(){
            const filterBtn = document.querySelector('.filterBtn');
            const filterClose = document.querySelector('.filterClose');
            const filter = document.querySelector('.filter');

            filterBtn.addEventListener('click', function(){
                filter.classList.toggle('hidden');
            });

            filterClose.addEventListener('click', function(){
                filter.classList.add('hidden');
            })


        })