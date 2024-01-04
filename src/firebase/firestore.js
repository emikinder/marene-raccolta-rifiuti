import {
    collection,
    getDocs,
    limit,
    orderBy,
    query,
    where,
} from "firebase/firestore";
import { db } from "./firebase";

const RACCOLTA_COLLECTION = "raccolta";

export async function getRaccolta() {
    const today = new Date();

    const raccoltaRef = collection(db, RACCOLTA_COLLECTION);
    const q = query(
        raccoltaRef,
        where("date", ">=", today),
        orderBy("date", "asc"),
        limit(3)
    );

    const snapshot = await getDocs(q);
    const raccoltaData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    return raccoltaData;
}