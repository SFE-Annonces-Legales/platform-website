export default interface User {
    email: string;
    password?: string;
    type: 'pro' | 'particulier';
    city: string;
    phone: string;
    fullname?: string;
    civility?: string;
    company?: string;
    ice?: string;
}