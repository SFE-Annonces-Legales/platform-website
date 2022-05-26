import City from "./cities";

export default interface User {
    email: string;
    type: 'pro' | 'particulier';
    city: City;
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