document.addEventListener('DOMContentLoaded', () => {
    
    // Seleziona gli elementi del DOM
    const burgerMenu = document.getElementById('burger-menu');
    const mainNav = document.querySelector('.main-nav');

    // Aggiungi un evento "click" all'icona del burger
    burgerMenu.addEventListener('click', () => {
        // Aggiungi o rimuovi la classe 'active' al menu di navigazione
        mainNav.classList.toggle('active');
    });

});