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

export interface documentsTypes {
    // doc: object | null,
    id: string
}

export interface conditionTypes {
    fieldName: string,
    operator: "<" | "<=" | "==" | "!=" | ">=" | ">" | "array-contains" | "in" | "array-contains-any" | "not-in",
    compareValue: any
}

export interface roomData {
    name: string | '';
    desc: string | '';
    members: Array<string>;
    createAt: string;
}

export interface roomState {
    data: roomData[] | null;
    loading: boolean;
    error: string | '';
} 