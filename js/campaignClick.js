import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
import { firebaseConfig } from "../firebase-config.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Registrar clic en el enlace de campaña
export async function logCampaignClick(extra = {}) {
    try {
        await addDoc(collection(db, "campaign_stats"), {
            type: "clicked",
            timestamp: new Date().toISOString(),
            ...extra
        });
    } catch (e) {
        console.error("Error guardando clic de campaña:", e);
    }
}

// Ejecutar al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    logCampaignClick();
});
