import * as Yup from 'yup';

export default function loginValidator() {

    return Yup.object({
        email: Yup.string().email('email invalid').required('email obligatoir'),
        password: Yup.string().min(8, 'Mot de passe invalid').required("Mot de passe obligatoir"),
    });
    
}  