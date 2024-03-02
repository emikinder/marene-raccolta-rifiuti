import {
    collection,
    getDocs,
    addDoc,
    limit,
    orderBy,
    query,
    where,
} from "firebase/firestore";
import { db } from "./firebase";

const RACCOLTA_COLLECTION = "raccolta";

import { Timestamp } from "firebase/firestore";

export interface IRaccolta {
    id: string;
    date: Timestamp;
    type: string;
}

export async function getRaccolta(): Promise<IRaccolta[]> {
    const today = new Date();

    const raccoltaRef = collection(db, RACCOLTA_COLLECTION);
    const q = query(
        raccoltaRef,
        where("date", ">=", today),
        orderBy("date", "asc"),
        limit(3)
    );

    const snapshot = await getDocs(q);
    const raccoltaData: IRaccolta[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        date: doc.data().date,
        type: doc.data().type,
    }));
    return raccoltaData;
}

export async function submitMessage(
    name: string,
    email: string,
    message: string
) {
    const messagesRef = collection(db, "messages");
    try {
        const response = await addDoc(messagesRef, {
            name,
            email,
            message,
            date: new Date(),
        });
        return { success: true, id: response.id };
    } catch (error) {
        console.error("Error adding document: ", error);
        return { success: false, error };
    }
}

// import { items } from "../assets/data.json";
// export async function addRaccoltaItems() {
//     const raccoltaRef = collection(db, RACCOLTA_COLLECTION);

//     // Use Promise.all to wait for all addDoc promises to resolve
//     await Promise.all(
//         items.map(async (item) => {
//             const newItem = { ...item, date: new Date(item.date)};
//             console.log(newItem);
//             await addDoc(raccoltaRef, newItem);
//         })
//     );
// }
