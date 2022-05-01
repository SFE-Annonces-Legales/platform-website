import FormButton from "@/components/base/Forms/FormButton";
import InputField from "@/components/base/Forms/InputField";
import HyperLink from "@/components/base/HyperLink";
import Logo from "@/components/base/navigation/Logo";
import { useAuth } from "@/hooks/useAuth";
import resetPasswordValidator from "@/validators/reset-password-validator";
import { Form, Formik } from "formik";
import { NextPage } from "next";
import { useState } from "react";

const ForgotPassword: NextPage = () => {
    const { forgotPassword } = useAuth({ middleware: 'guest' })
    const [status, setStatus] = useState<string|null>(null)

    return (
        <div className="bg-gray-300 flex justify-center items-center" style={{ minHeight: "calc(100vh - 4rem)" }}>

            <Formik
                initialValues={{ email: '' }}
                validationSchema={resetPasswordValidator}
                onSubmit={(values, { setSubmitting, setErrors }) => {
                    forgotPassword(setErrors, setStatus, values.email);
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="bg-white max-w-lg py-6 px-8 rounded-lg">
                        <div className="flex justify-center my-4">
                            <Logo />
                        </div>
                        <p className="mb-4 text-sm text-gray-600">
                            Mot de passe oublié? Pas de problèmes. Indiquez-nous simplement votre 
                            adresse e-mail et nous vous enverrons par e-mail un lien de réinitialisation 
                            de mot de passe qui vous permettra d'en choisir un nouveau.
                        </p>
                        <InputField label="Email" name="email" type='email' placeholder="Saisissez votre email ..." />
                        <FormButton
                            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
                            isSubmitting={isSubmitting}>
                            Envoyer email
                        </FormButton>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
export default ForgotPassword;