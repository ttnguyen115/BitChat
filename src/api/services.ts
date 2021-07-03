import firebase, { db } from "./firebase";

export const addDocument = (collection: string, data: {
    displayName: string | null,
    email: string | null,
    photoURL: string | null,
    uid: string | null,
    providerId: string
}): void => {
    const query = db.collection(collection);

    query.add({
        ...data,
        createAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
}