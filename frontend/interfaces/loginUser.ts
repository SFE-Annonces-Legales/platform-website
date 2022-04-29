import { FormikErrors } from "formik";


export type LoginUserErrors =  (errors: FormikErrors<{ 
    remember: boolean; 
    email: string; 
    password: string; 
 }>) => void;