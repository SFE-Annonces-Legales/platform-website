import * as Yup from 'yup';

Yup.setLocale({
    mixed: {
        required: 'Champ obligatoir'
    }
})

export default function registerValidator() {

    return Yup.object({
        email: Yup.string().email('email invalid').required(),
        password: Yup.string().min(8, 'Doit contenir 8 caractère minimum').required(),
        password_confirmation: Yup.string().min(8, 'Doit contenir 8 caractère minimum').required().oneOf([Yup.ref('password')], 'les mots de passe ne correspondent pas'),
        type: Yup.string().oneOf(['pro', 'particulier'], "type d'utilisateur invalid"),
        phone: Yup.string().length(9, "Enterez un numéro de telephone valid").required().matches(/[567]\d{8}/g, "format invalide"),
        acceptedTerms: Yup.boolean().required().oneOf([true], "Vous devez accepter les conditions générales d'utilisation."),
        city: Yup.string().required(),
        ice: Yup.number().when('type', {
            is: 'pro',
            then: Yup.number().required()
        }),
        company: Yup.string().when('type', {
            is: 'pro',
            then: Yup.string().required()
        }),
        fullname: Yup.string().when('type', {
            is: 'particulier',
            then: Yup.string().required()
        }),
    });
    
}  