import {
    collection,
    getDocs,
    // orderBy,
    query,
    where,
} from "firebase/firestore";
import { db } from "./firebase";

const RACCOLTA_COLLECTION = "raccolta";

export async function getRaccolta() {
    const today = new Date();
    const threeDaysFromNow = new Date();
    threeDaysFromNow.setDate(today.getDate() + 3);

    const raccoltaRef = collection(db, RACCOLTA_COLLECTION);
    const q = query(
        raccoltaRef,
        where("date", ">=", today),
        where("date", "<=", threeDaysFromNow)
    );

    const snapshot = await getDocs(q);
    const raccoltaData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    return raccoltaData;
}
