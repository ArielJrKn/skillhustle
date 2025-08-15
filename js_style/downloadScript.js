
	document.addEventListener('DOMContentLoaded', function() {
		const downloadDialog = document.getElementById('downloadDialog');
		const downloadFileName = document.getElementById('downloadFileName');
		const downloadFileSize = document.getElementById('downloadFileSize');
		const downloadProgressBar = document.getElementById('downloadProgressBar');
		const downloadStatus = document.getElementById('downloadStatus');
		const cancelDownloadBtn = document.getElementById('cancelDownload');
		const openFileBtn = document.getElementById('openFile');
		const closeDownloadDialog = document.getElementById('closeDownloadDialog');
		const toastNotification = document.getElementById('toastNotification');
		const toastMessage = document.getElementById('toastMessage');
		document.querySelectorAll('[class*="ri-download-line"]').forEach(button => {
			button.parentElement.addEventListener('click', function() {
				const card = this.closest('.card');
				const fileName = card.querySelector('h4').textContent;
				const fileSize = '25.7 MB';
				
				downloadDialog.style.display = 'flex';
				downloadFileName.textContent = fileName;
				downloadFileSize.textContent = `File size: ${fileSize}`;
				downloadProgressBar.style.width = '0%';
				downloadStatus.textContent = 'Starting download...';
				openFileBtn.classList.add('hidden');
				let progress = 0;
				const interval = setInterval(() => {
					progress += Math.random() * 15;
					if (progress > 100) {
						progress = 100;
						clearInterval(interval);
						downloadStatus.textContent = 'Download complete!';
						openFileBtn.classList.remove('hidden');
						
						setTimeout(() => {
							downloadDialog.style.display = 'none';
							showToast(`${fileName} has been downloaded successfully!`);
						}, 1000);
					}
					downloadProgressBar.style.width = `${progress}%`;
					downloadStatus.textContent = `Downloading... ${Math.round(progress)}%`;
				}, 500);
				cancelDownloadBtn.onclick = () => {
					clearInterval(interval);
					downloadDialog.style.display = 'none';
				};
				closeDownloadDialog.onclick = () => {
					clearInterval(interval);
					downloadDialog.style.display = 'none';
				};
				openFileBtn.onclick = () => {
					downloadDialog.style.display = 'none';
				};
			});
		});
		function showToast(message) {
			toastMessage.textContent = message;
			toastNotification.classList.remove('hidden');
			setTimeout(() => {
				toastNotification.style.transform = 'translateY(0)';
				toastNotification.style.opacity = '1';
			}, 100);
			setTimeout(() => {
				toastNotification.style.transform = 'translateY(full)';
				toastNotification.style.opacity = '0';
				setTimeout(() => {
					toastNotification.classList.add('hidden');
				}, 300);
			}, 5000);
		}
	});
