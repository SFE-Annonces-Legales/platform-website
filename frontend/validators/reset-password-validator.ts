import * as Yup from 'yup'
export default function resetPasswordValidator(){
    return Yup.object({
        email: Yup.string().email("Email invalid").required('Champ obligatoir')
    })
}