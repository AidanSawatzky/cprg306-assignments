import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
  try {
    const itemsRef = collection(db, "users", userId, "items");
    const q = query(itemsRef);
    const snapshot = await getDocs(q);
    const items = [];
    snapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });
    return items;
  } catch (error) {
    console.error("Error getting items: ", error);
    throw error;
  }
}

export async function addItem(userId, item) {
  try {
    const itemsRef = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsRef, item);
    return { id: docRef.id, ...item };
  } catch (error) {
    console.error("Error adding item: ", error);
    throw error;
  }
}