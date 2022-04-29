import * as Yup from 'yup';

export default function loginValidator() {

    return Yup.object({
        email: Yup.string().email('email invalid').required('Obligatoir'),
        password: Yup.string().min(8, 'Doit contenir 8 caractère minimum').required("Obligatoir"),
    });
    
}  