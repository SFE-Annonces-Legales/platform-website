import * as Yup from 'yup'

export default function passwordResetValidator() {
    return Yup.object({
        email: Yup.string().required('obligatoir').email('format invalide'),
        password: Yup.string().min(8, 'doit contenir 8 caractères minimum').required('obligatoir'),
        password_confirmation: Yup.string().required('obligatoir').oneOf([Yup.ref('password')], 'les mots de passe ne correspondent pas')
    })
}