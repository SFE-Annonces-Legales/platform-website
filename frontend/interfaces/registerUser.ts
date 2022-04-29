import { FormikErrors } from "formik";

export interface RegisterUser {
    acceptedTerms: boolean,
    fullname: string,
    email: string,
    password: string,
    password_confirmation: string,
    type: string,
    city: string,
    phone: string,
    company: string,
    ice: string,
    civility: string,
}
export type RegisterUserErrors =  (errors: FormikErrors<{ 
    acceptedTerms: boolean; 
    fullname: string; 
    email: string; 
    password: string; 
    password_confirmation: string; 
    type: string; 
    city: string; 
    phone: string; 
    company: string; 
    ice: string; 
    civility: string; }>) => void;
