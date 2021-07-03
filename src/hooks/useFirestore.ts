import { useEffect, useState } from "react";
import { db } from "../api/firebase";
import { conditionTypes } from "../features/types";

const useFirestore = (
    collection: string, 
    condition: conditionTypes | null
) => {
    const [documents, setDocuments] = useState<any>([]);
    
    useEffect(() => {
        let collectionRef = db.collection(collection).orderBy('createAt');
        
        if (condition) {
            if (!condition.compareValue || !condition.compareValue.length) return;

            collectionRef = collectionRef.where(condition.fieldName, condition.operator, condition.compareValue)
        }
        
        const unsubscribed = collectionRef.onSnapshot(snapshot => {
            const documents = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
            }));

            setDocuments(documents);
        });

        return unsubscribed;
    }, [collection, condition])

    return documents;
};

export default useFirestore;