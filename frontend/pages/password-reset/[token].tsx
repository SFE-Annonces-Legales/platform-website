import FormButton from "@/components/base/Forms/FormButton";
import InputField from "@/components/base/Forms/InputField";
import Logo from "@/components/base/navigation/Logo";
import UserLayout from "@/components/layouts/UserLayout";
import { useAuth } from "@/hooks/useAuth";
import passwordResetValidator from "@/validators/passwordResetValidator";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";


const ResetPasswordForm = () => {
    const router = useRouter()
    const { resetPassword } = useAuth({ middleware: 'guest' })
    const [status, setStatus] = useState<string | null>(null)
    return (
        <UserLayout>
            <div className="bg-gray-300 flex justify-center items-center" style={{ minHeight: "calc(100vh - 4rem)" }}>

                <Formik
                    initialValues={{ email: router.query.email as string ?? "", password: "", password_confirmation: "" }}
                    validationSchema={passwordResetValidator}
                    onSubmit={(values, { setSubmitting, setErrors }) => {
                        resetPassword({ setErrors, setStatus, values });
                        setSubmitting(false);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="bg-white max-w-lg py-6 px-8 rounded-lg" style={{ minWidth: "30rem" }}>
                            <div className="flex justify-center my-4">
                                <Logo />
                            </div>
                            {status && <p className="text-sm text-green-600">{status}</p>}
                            <InputField
                                name="email"
                                type={"email"}
                                placeholder="nom@email.com"
                                label="Email"
                            />
                            <InputField
                                name="password"
                                type={"password"}
                                placeholder="*********"
                                label="Mot de passe"
                            />
                            <InputField
                                name="password_confirmation"
                                type={"password"}
                                placeholder="********"
                                label="Confirmez mot de passe"
                            />
                            <FormButton
                                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
                                isSubmitting={isSubmitting}>
                                Changer mot de passe
                            </FormButton>
                        </Form>
                    )}
                </Formik>
            </div>
        </UserLayout>
    );
}

export default ResetPasswordForm;