import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
import { firebaseConfig } from "../firebase-config.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function saveLead(name, contact) {
    try {
        await addDoc(collection(db, "leads"), {
            name,
            contact,
            email: "", // Si tienes el email, pásalo como argumento
            timestamp: new Date().toISOString()
        });
    } catch (e) {
        console.error("Error guardando lead:", e);
    }
}
