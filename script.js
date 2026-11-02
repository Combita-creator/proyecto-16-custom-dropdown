document.addEventListener('DOMContentLoaded', () => {
    const dropdownContainer = document.querySelector('.dropdown-container');
    const dropdownBtn = document.getElementById('dropdownBtn');
    const selectedText = document.getElementById('selectedText');
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    // 1. Abrir / Cerrar desplegable al hacer clic en el botón
    dropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = dropdownContainer.classList.toggle('open');
        dropdownBtn.setAttribute('aria-expanded', isOpen);
    });

    // 2. Seleccionar un elemento de la lista
    dropdownItems.forEach((item) => {
        item.addEventListener('click', () => {
            // Quitar la clase 'selected' de todos los elementos
            dropdownItems.forEach((el) => el.classList.remove('selected'));

            // Marcar el elemento actual como seleccionado
            item.classList.add('selected');

            // Actualizar el texto mostrado en el botón
            const itemValue = item.getAttribute('data-value');
            selectedText.textContent = itemValue;

            // Cerrar el desplegable
            dropdownContainer.classList.remove('open');
            dropdownBtn.setAttribute('aria-expanded', 'false');
        });
    });

    // 3. Cerrar el menú si se hace clic fuera del componente
    document.addEventListener('click', (e) => {
        if (!dropdownContainer.contains(e.target)) {
            dropdownContainer.classList.remove('open');
            dropdownBtn.setAttribute('aria-expanded', 'false');
        }
    });
});