import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getFirestore, collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
import { firebaseConfig } from "../firebase-config.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getShareCount() {
    const q = query(collection(db, "campaign_stats"), where("type", "==", "shared"));
    const snapshot = await getDocs(q);
    return snapshot.size;
}