document.addEventListener('DOMContentLoaded', () => {
    const rouletteForm = document.getElementById('roulette-form');
    const modal = document.getElementById('shareModal');
    const closeBtn = document.getElementsByClassName('close')[0];

    rouletteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const playerName = document.getElementById('player-name').value;
        const playerEmail = document.getElementById('player-email').value;
        const playerWhatsapp = document.getElementById('player-whatsapp').value;

        if (playerName && playerEmail && playerWhatsapp) {
            // Show the modal
            modal.style.display = "block";

            // Agregar botón 'Ya compartí, quiero jugar' si no existe
            let continueBtn = document.getElementById('continue-to-game-btn');
            if (!continueBtn) {
                continueBtn = document.createElement('button');
                continueBtn.id = 'continue-to-game-btn';
                continueBtn.textContent = 'Ya compartí, quiero jugar';
                continueBtn.className = 'btn';
                continueBtn.style = 'background:#4E6C50; color:#fff; font-size:1.1rem; border-radius:8px; padding:12px 20px; font-weight:600; margin-top:18px; display:inline-block;';
                modal.querySelector('.modal-content').appendChild(continueBtn);
            }
            continueBtn.onclick = function() {
                modal.style.display = "none";
                redirectToGame(playerName, playerEmail, playerWhatsapp);
            };

            // When the user clicks on <span> (x), close the modal and redirect
            closeBtn.onclick = function() {
                modal.style.display = "none";
                redirectToGame(playerName, playerEmail, playerWhatsapp);
            }

            // When the user clicks anywhere outside of the modal, close it and redirect
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                    redirectToGame(playerName, playerEmail, playerWhatsapp);
                }
            }
        }
    });

    function redirectToGame(playerName, playerEmail, playerWhatsapp) {
        const encodedName = encodeURIComponent(playerName);
        const encodedEmail = encodeURIComponent(playerEmail);
        const encodedWhatsapp = encodeURIComponent(playerWhatsapp);
        const currentPagePath = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));
        const fullPath = window.location.origin + currentPagePath;
        window.location.href = `${fullPath}/juegos.html?name=${encodedName}&email=${encodedEmail}&whatsapp=${encodedWhatsapp}`;
    }
});