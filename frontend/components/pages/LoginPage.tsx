import { ErrorMessage, Field, Form, Formik } from 'formik';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import { useAuth } from '../../hooks/useAuth';
import loginValidator from '../../validators/login-validator';

const LoginPage = () => {
    const { login } = useAuth({ middleware: "guest", redirectIfAuthenticated: '/' });
    // const router = useRouter()
    return (
        <div
            className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-300"
            style={{ minHeight: "calc(100vh - 4rem)" }}
        >
            <div className="max-w-md w-full space-y-8 border px-6 py-12 rounded-xl shadow-xl bg-white">

                <div>
                    <h1 className='text-center text-4xl font-bold'>LOGO</h1>
                    <h2 className="mt-6 text-center text-3xl font-extrabold">
                        Connectez-vous à votre compte
                    </h2>
                </div>
                <Formik
                    initialValues={{ email: "", password: "", remember: false }}
                    validationSchema={loginValidator}
                    onSubmit={(values, { setErrors, setSubmitting }) => {
                        try {
                            console.log(values)
                            login(setErrors, values);
                            
                        } catch (err) {
                            console.log(err)
                        }
                        setSubmitting(false);
                    }} >
                    {({ errors, isSubmitting, values }) => (

                        <Form className="mt-8 space-y-6">
                            {
                                errors.email ?
                                    <ErrorMessage name='email' component="p" className="text-red-600" />
                                : errors.password ?
                                    <ErrorMessage name='password' component="p" className="text-red-600" />
                                : null
                            }
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label htmlFor="email-address" className="sr-only">Email </label>
                                    <Field
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Email"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">Mot de passe</label>
                                    <Field
                                        id="password"
                                        name="password"
                                        type="password"
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Mot de passe"
                                    />
                                </div>
                            </div>

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
                                            Mot de passe oublié?
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    {
                                        isSubmitting && (
                                            <svg role="status" className="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                                            </svg>
                                        )
                                    }
                                    Valider
                                </button>
                                <hr className="my-4 border-gray-200 sm:mx-auto lg:my-6 max-w-3xl" />
                                <div className='flex flex-col justify-center items-center text-sm'>
                                    <p className='text-gray-500'>Pas encore de compte chez nous ? </p>
                                    <Link href='/register'>
                                        <a className='text-blue-800 font-bold hover:underline'>Inscrivez-vous gratuitement.</a>
                                    </Link>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
export default LoginPage;