import * as Yup from 'yup';

export default function registerValidator() {

    return Yup.object({
        email: Yup.string().email('email invalid').required('Obligatoir'),
        password: Yup.string().min(8, 'Doit contenir 8 caractère minimum').required("Obligatoir"),
        password_confirmation: Yup.string().min(8, 'Doit contenir 8 caractère minimum').required("Obligatoir").oneOf([Yup.ref('password')], 'les mots de passe ne correspondent pas'),
        type: Yup.string().oneOf(['pro', 'particulier'], "type d'utilisateur invalid"),
        phone: Yup.string().length(9, "Enterez un numéro de telephone valid").required("Obligatoir").matches(/[567]\d{8}/g, "format invalide"),
        acceptedTerms: Yup.boolean().required('Required').oneOf([true], "Vous devez accepter les conditions générales d'utilisation."),
        city: Yup.string().required("Obligatoir"),
    });
    
}  