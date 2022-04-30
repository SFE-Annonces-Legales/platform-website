import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import { useAuth } from '../../hooks/useAuth';
import loginValidator from '../../validators/login-validator';
import FormButton from '../base/FormButton';
import InputField from '../base/InputField';

const LoginPage = () => {
    const { login } = useAuth({ middleware: "guest", redirectIfAuthenticated: '/' });
    return (
        <div
            className="flex items-center justify-center py-4 px-4 sm:px-6 lg:px-8 bg-gray-300"
            style={{ minHeight: "calc(100vh - 4rem)" }}
        >
            <div className="max-w-md w-full space-y-8 border px-6 py-12 rounded-xl shadow-xl bg-white">

                <h2 className="mt-6 text-center text-3xl font-extrabold">
                    Connectez-vous à votre compte
                </h2>
                <Formik
                    initialValues={{ email: "", password: "", remember: false }}
                    validationSchema={loginValidator}
                    onSubmit={(values, { setErrors, setSubmitting }) => {
                        try {
                            login(setErrors, values);
                        } catch (err: any) {
                            console.error(err)
                        }
                        setSubmitting(false);
                    }} >
                    {({ isSubmitting }) => (
                        <Form className="mt-8 space-y-6">
                            <InputField label='Email' name='email' placeholder='test@mail.com' />
                            <InputField label='Mot de passe' name='password' placeholder='•••••••••' type='password' />
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <Field
                                        id="remember"
                                        name="remember"
                                        type="checkbox"
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded-sm"
                                    />
                                    <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
                                        Se souvenir de moi.
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <Link href="#">
                                        <a className="font-medium text-blue-600 hover:text-blue-800">
                                            Mot de passe oublié ?
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <FormButton
                                className='w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                isSubmitting={isSubmitting}
                            >
                                Se connecter
                            </FormButton>
                        </Form>
                    )}
                </Formik>
                <hr className="my-2 border-gray-200 sm:mx-auto lg:my-6 max-w-3xl" />
                <div className='flex flex-col justify-center items-center text-sm'>
                    <p className='text-gray-500'>Pas encore de compte chez nous ? </p>
                    <Link href='/register'>
                        <a className='text-blue-800 font-bold hover:underline'>Inscrivez-vous gratuitement.</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default LoginPage;