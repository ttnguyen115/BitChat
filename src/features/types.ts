export interface userData {
    displayName: string | null;
    email: string | null;
    uid: string | null;
    photoURL: string | null;
}

export interface userState {
    data: userData | null;
    loading: boolean;
    error: string;
}

export interface messageData {
    text: string | null;
    displayName: string;
    createAt: string;
    photoURL: string | null;
}