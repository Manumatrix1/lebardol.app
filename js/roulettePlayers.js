import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getRoulettePlayers() {
    const players = [];
    const q = collection(db, "leads");
    const snapshot = await getDocs(q);
    snapshot.forEach(doc => {
        const data = doc.data();
        players.push({
            name: data.name || '',
            contact: data.contact || '',
            email: data.email || '',
            prize: data.prize || '',
            timestamp: data.timestamp || ''
        });
    });
    return players;
}
