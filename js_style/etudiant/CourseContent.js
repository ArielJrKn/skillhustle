


    document.addEventListener('DOMContentLoaded', function() {
    const moduleHeaders = document.querySelectorAll('.sidebar-module');
    moduleHeaders.forEach(header => {
    header.addEventListener('click', function() {
    const nextElement = this.nextElementSibling;
    if (nextElement) {
    const isVisible = nextElement.style.display !== 'none';
    if (isVisible) {
    nextElement.style.display = 'none';
    this.querySelector('i.ri-arrow-down-s-line')?.classList.replace('ri-arrow-down-s-line', 'ri-arrow-right-s-line');
    } else {
    nextElement.style.display = 'block';
    this.querySelector('i.ri-arrow-right-s-line')?.classList.replace('ri-arrow-right-s-line', 'ri-arrow-down-s-line');
    }
    }
    });
    });
    });