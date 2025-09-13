document.addEventListener('DOMContentLoaded', () => {
    const rouletteForm = document.getElementById('roulette-form');
    
    rouletteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const playerName = document.getElementById('player-name').value;
        const playerContact = document.getElementById('player-contact').value;
        
        if (playerName && playerContact) {
            const encodedName = encodeURIComponent(playerName);
            const encodedContact = encodeURIComponent(playerContact);
            
            const currentPagePath = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));
            const fullPath = window.location.origin + currentPagePath;

            // Redirigir a la página de juegos con los datos en la URL
            window.location.href = `${fullPath}/juegos.html?name=${encodedName}&contact=${encodedContact}`;
        }
    });
});