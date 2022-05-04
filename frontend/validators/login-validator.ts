import * as Yup from 'yup';

export default function loginValidator() {

    return Yup.object({
        email: Yup.string().email('email invalid').required('Champ obligatoir'),
        password: Yup.string().min(8, 'Mot de passe invalid').required("Champ obligatoir"),
    });
    
}  