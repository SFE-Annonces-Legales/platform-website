export default interface User {
    email: string;
    type: 'pro' | 'particulier';
    city: string;
    phone: string;
    fullname: string;
    civility: string;
    company: string;
    ice: string;
    role: Role
}

export interface Role {
    id: number;
    role_name: 'editor'|'user'|'admin';
}