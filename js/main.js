document.addEventListener('DOMContentLoaded', () => {
    const rouletteForm = document.getElementById('roulette-form');
    const modal = document.getElementById('shareModal');
    const closeBtn = document.getElementsByClassName('close')[0];

    rouletteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const playerName = document.getElementById('player-name').value;
        const playerContact = document.getElementById('player-contact').value;

        if (playerName && playerContact) {
            // Show the modal
            modal.style.display = "block";

            // When the user clicks on <span> (x), close the modal and redirect
            closeBtn.onclick = function() {
                modal.style.display = "none";
                redirectToGame(playerName, playerContact);
            }

            // When the user clicks anywhere outside of the modal, close it and redirect
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                    redirectToGame(playerName, playerContact);
                }
            }
        }
    });

    function redirectToGame(playerName, playerContact) {
        const encodedName = encodeURIComponent(playerName);
        const encodedContact = encodeURIComponent(playerContact);
        
        const currentPagePath = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));
        const fullPath = window.location.origin + currentPagePath;

        // Redirect to the games page with the data in the URL
        window.location.href = `${fullPath}/juegos.html?name=${encodedName}&contact=${encodedContact}`;
    }
});