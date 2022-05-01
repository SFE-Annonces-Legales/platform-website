import FormButton from "@/components/base/Forms/FormButton";
import InputField from "@/components/base/Forms/InputField";
import Logo from "@/components/base/navigation/Logo";
import { useAuth } from "@/hooks/useAuth";
import resetPasswordValidator from "@/validators/reset-password-validator";
import { Formik, Form } from "formik";
import { useState } from "react";

const EmailVerification = () => {
    const { logout, resendEmailVerification } = useAuth({
        middleware: 'auth',
    })

    const [status, setStatus] = useState<string|null>(null);
    return (
        <div className="bg-gray-300 flex justify-center items-center" style={{ minHeight: "calc(100vh - 4rem)" }}>

            <Formik
                initialValues={{ email: '' }}
                validationSchema={resetPasswordValidator}
                onSubmit={(values, { setSubmitting, setErrors }) => {
                    resendEmailVerification({ setStatus });
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="bg-white max-w-lg py-6 px-8 rounded-lg">
                        <div className="flex justify-center my-4">
                            <Logo />
                        </div>
                        <p className="mb-4 text-sm text-gray-600">
                            Merci pour votre inscription! Avant de commencer,
                            pourriez-vous vérifier votre adresse e-mail en cliquant sur le lien que nous venons de vous envoyer ?
                            Si vous n'avez pas reçu l'e-mail, nous vous en enverrons un autre avec plaisir.
                        </p>
                        {status === 'verification-link-sent' && (
                            <div className="mb-4 font-medium text-sm text-green-600">
                                A new verification link has been sent to the email
                                address you provided during registration.
                            </div>
                        )}
                        <FormButton
                            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
                            isSubmitting={isSubmitting}>
                            envoyer un autre email 
                        </FormButton>
                        <button className="underline text-sm text-gray-600 hover:text-gray-900 mx-4" type="button" onClick={logout}>
                            Se déconnecter
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
export default EmailVerification;