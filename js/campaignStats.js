import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, where, doc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Registrar acción de campaña (generar, compartir, clic)
export async function logCampaignAction(type, extra = {}) {
    try {
        await addDoc(collection(db, "campaign_stats"), {
            type,
            timestamp: new Date().toISOString(),
            ...extra
        });
    } catch (e) {
        console.error("Error guardando acción de campaña:", e);
    }
}

// Obtener estadísticas resumidas
export async function getCampaignStats() {
    const stats = { generated: 0, shared: 0, clicked: 0 };
    const q = query(collection(db, "campaign_stats"));
    const snapshot = await getDocs(q);
    snapshot.forEach(doc => {
        const data = doc.data();
        if (data.type === "generated") stats.generated++;
        if (data.type === "shared") stats.shared++;
        if (data.type === "clicked") stats.clicked++;
    });
    return stats;
}
