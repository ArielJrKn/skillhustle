// moduleToggle----------------------------------------------------------------------------------------------------
	document.addEventListener('DOMContentLoaded', function() {
			const moduleItems = document.querySelectorAll('.module-item');
			moduleItems.forEach(item => {
				item.addEventListener('click', function() {
					const moduleContent = this.nextElementSibling;
					const icon = this.querySelector('.module-toggle i');
					if (moduleContent.classList.contains('open')) {
						moduleContent.classList.remove('open');
						icon.classList.remove('ri-arrow-up-s-line');
						icon.classList.add('ri-arrow-down-s-line');
					} else {
						moduleContent.classList.add('open');
						icon.classList.remove('ri-arrow-down-s-line');
						icon.classList.add('ri-arrow-up-s-line');
					}
				});
			});
		});

// checkboxHandler
	document.addEventListener('DOMContentLoaded', function() {
		const checkboxes = document.querySelectorAll('input[type="checkbox"]');
		let currentIncompleteLesson = null;
		checkboxes.forEach(checkbox => {
			checkbox.addEventListener('change', function() {
				updateProgress();
			});
		});
		function updateProgress() {
	// Count total and checked checkboxes for lessons only (not modules)
			const lessonCheckboxes = Array.from(document.querySelectorAll('input[type="checkbox"]')).filter(
				checkbox => checkbox.id.includes('lesson')
				);
			const totalLessons = lessonCheckboxes.length;
			const completedLessons = lessonCheckboxes.filter(checkbox => checkbox.checked).length;
	// Update progress text
			const progressText = document.querySelector('.progress-circle + div p:first-child');
			if (progressText) {
				progressText.textContent = `${completedLessons} of ${totalLessons} lessons completed`;
			}
	// Update progress percentage
			const percentage = Math.round((completedLessons / totalLessons) * 100);
			const percentageText = document.querySelector('.progress-circle .text-3xl');
			if (percentageText) {
				percentageText.textContent = `${percentage}%`;
			}
	// Update progress circle
			const circle = document.querySelector('.progress-value');
			if (circle) {
				const radius = 54;
				const circumference = 2 * Math.PI * radius;
				const offset = circumference - (percentage / 100) * circumference;
				circle.style.strokeDasharray = `${circumference}`;
				circle.style.strokeDashoffset = `${offset}`;
			}
	// Update module progress bars
			for (let i = 1; i <= 5; i++) {
				updateModuleProgress(i);
			}
		}
		function updateModuleProgress(moduleNumber) {
			const moduleCheckboxes = Array.from(document.querySelectorAll(`input[id^="lesson${moduleNumber}"]`));
			const totalModuleLessons = moduleCheckboxes.length;
			const completedModuleLessons = moduleCheckboxes.filter(checkbox => checkbox.checked).length;
			const percentage = totalModuleLessons > 0 ? Math.round((completedModuleLessons / totalModuleLessons) * 100) : 0;
	// Update module percentage text
			const modulePercentageText = document.querySelector(`.space-y-4 > div:nth-child(${moduleNumber}) .flex.justify-between span:last-child`);
			if (modulePercentageText) {
				modulePercentageText.textContent = `${percentage}%`;
			}
	// Update module progress bar
			const moduleProgressBar = document.querySelector(`.space-y-4 > div:nth-child(${moduleNumber}) .bg-secondary`);
			if (moduleProgressBar) {
				moduleProgressBar.style.width = `${percentage}%`;
			}
	// Update module checkbox
			const moduleCheckbox = document.getElementById(`module${moduleNumber}`);
			if (moduleCheckbox) {
				moduleCheckbox.checked = percentage === 100;
			}
		}
	// Initial progress update
		updateProgress();
	});


// // continueLearningSectionHandler

// 	document.addEventListener('DOMContentLoaded', function() {
// 		const continueLearningBtn = document.getElementById('continueLearningBtn');
// 		const videoModal = document.getElementById('videoModal');
// 		const closeModal = document.getElementById('closeModal');
// 		const markAsComplete = document.getElementById('markAsComplete');

// 		function findNextIncompleteLesson() {
// 			const lessonCheckboxes = Array.from(document.querySelectorAll('input[type="checkbox"]')).filter(
// 				checkbox => checkbox.id.includes('lesson')
// 				);
// 			return lessonCheckboxes.find(checkbox => !checkbox.checked);
// 		}

// 		function scrollToLesson(lessonElement) {
// 			const moduleContent = lessonElement.closest('.module-content');
// 			const moduleItem = moduleContent.previousElementSibling;

// 			if (!moduleContent.classList.contains('open')) {
// 				moduleItem.click();
// 			}

// 			lessonElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
// 			setTimeout(() => {
// 				lessonElement.closest('li').style.backgroundColor = '#EDF2F7';
// 				setTimeout(() => {
// 					lessonElement.closest('li').style.backgroundColor = '';
// 				}, 2000);
// 			}, 500);
// 		}

// 		continueLearningBtn.addEventListener('click', function() {
// 			const nextLesson = findNextIncompleteLesson();
// 			if (nextLesson) {
// 				scrollToLesson(nextLesson);
// 				setTimeout(() => {
// 					videoModal.classList.remove('hidden');
// 					document.body.style.overflow = 'hidden';
// 				}, 1000);
// 			}
// 		});

// 		closeModal.addEventListener('click', function() {
// 			videoModal.classList.add('hidden');
// 			document.body.style.overflow = '';
// 		});

// 		markAsComplete.addEventListener('click', function() {
// 			const nextLesson = findNextIncompleteLesson();
// 			if (nextLesson) {
// 				nextLesson.checked = true;
// 				nextLesson.dispatchEvent(new Event('change'));
// 				videoModal.classList.add('hidden');
// 				document.body.style.overflow = '';
// 			}
// 		});

// 		videoModal.addEventListener('click', function(e) {
// 			if (e.target === videoModal) {
// 				videoModal.classList.add('hidden');
// 				document.body.style.overflow = '';
// 			}
// 		});
// 	});

// loadingBarHandler
		document.addEventListener('DOMContentLoaded', function() {
		const loadingBar = document.querySelector('.loading-bar');
	// Simulate loading
		setTimeout(() => {
			loadingBar.style.opacity = '0';
		}, 2000);
	// Toggle loading bar visibility when navigating between modules
		const moduleItems = document.querySelectorAll('.module-item');
		moduleItems.forEach(item => {
			item.addEventListener('click', function() {
				loadingBar.style.opacity = '1';
				setTimeout(() => {
					loadingBar.style.opacity = '0';
				}, 800);
			});
		});
	});

// expandDescription
	document.addEventListener('DOMContentLoaded', function() {
		const expandButton = document.getElementById('expand-description');
		const descriptionDiv = expandButton.previousElementSibling;
		expandButton.addEventListener('click', function() {
			if (descriptionDiv.style.maxHeight) {
				descriptionDiv.style.maxHeight = null;
				expandButton.querySelector('span').textContent = 'Read more';
				expandButton.querySelector('i').classList.remove('ri-arrow-up-s-line');
				expandButton.querySelector('i').classList.add('ri-arrow-down-s-line');
			} else {
				descriptionDiv.style.maxHeight = descriptionDiv.scrollHeight + 'px';
				expandButton.querySelector('span').textContent = 'Read less';
				expandButton.querySelector('i').classList.remove('ri-arrow-down-s-line');
				expandButton.querySelector('i').classList.add('ri-arrow-up-s-line');
			}
		});
	});