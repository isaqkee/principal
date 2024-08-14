document.addEventListener('DOMContentLoaded', function() {
    const filterLinks = document.querySelectorAll('nav ul li a');
    const menuItems = document.querySelectorAll('.menu-item');

    filterLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const filter = this.getAttribute('data-filter');

            menuItems.forEach(item => {
                if (filter === 'all') {
                    item.style.display = 'block';
                } else {
                    if (item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });
});
