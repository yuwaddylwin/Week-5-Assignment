document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-button');
    const dropdownMenu = document.getElementById('dropdown-menu');

    // Toggle dropdown visibility
    menuButton.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent the click from bubbling up to the document
        dropdownMenu.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (event) {
        if (!dropdownMenu.contains(event.target) && !menuButton.contains(event.target)) {
            dropdownMenu.classList.remove('active');
        }
    });
});