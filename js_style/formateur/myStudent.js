// section pagination dropDown------------------------------------------------------------------------------------------------------
	document.addEventListener('DOMContentLoaded', function() {
		const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
		dropdownToggles.forEach(toggle => {
			toggle.addEventListener('click', function(e) {
				e.stopPropagation();
				const parent = this.closest('[id^="dropdown-"]');
				const menu = parent.querySelector('.dropdown-menu');
// Close all other dropdowns
				document.querySelectorAll('.dropdown-menu').forEach(item => {
					if (item !== menu) {
						item.classList.add('hidden');
					}
				});
// Toggle current dropdown
				menu.classList.toggle('hidden');
			});
		});
// Close dropdowns when clicking outside
		document.addEventListener('click', function() {
			document.querySelectorAll('.dropdown-menu').forEach(menu => {
				menu.classList.add('hidden');
			});
		});
	});

// section pagination dropDown------------------------------------------------------------------------------------------------------


// section radio ---------------------------------------------------------------------------------------------------------------------
	document.addEventListener('DOMContentLoaded', function() {
		const mainCheckbox = document.querySelector('thead .custom-checkbox');
		const rowCheckboxes = document.querySelectorAll('tbody .custom-checkbox');
		if (mainCheckbox) {
			mainCheckbox.addEventListener('change', function() {
				rowCheckboxes.forEach(checkbox => {
					checkbox.checked = mainCheckbox.checked;
				});
			});
		}
		rowCheckboxes.forEach(checkbox => {
			checkbox.addEventListener('change', function() {
// Check if all row checkboxes are checked
				const allChecked = Array.from(rowCheckboxes).every(cb => cb.checked);
				const someChecked = Array.from(rowCheckboxes).some(cb => cb.checked);
				if (mainCheckbox) {
					mainCheckbox.checked = allChecked;
// You could add an indeterminate state here if needed
					mainCheckbox.indeterminate = !allChecked && someChecked;
				}
			});
		});
	});
// section radio ---------------------------------------------------------------------------------------------------------------------
