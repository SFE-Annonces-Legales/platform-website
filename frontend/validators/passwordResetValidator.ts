import * as Yup from 'yup'

Yup.setLocale({
    mixed: {
        required: 'Champ obligatoir'
    }
})

export default function passwordResetValidator() {
    return Yup.object({
        email: Yup.string().required().email('format invalide'),
        password: Yup.string().min(8, 'doit contenir 8 caractères minimum').required(),
        password_confirmation: Yup.string().required().oneOf([Yup.ref('password')], 'les mots de passe ne correspondent pas')
    })
}