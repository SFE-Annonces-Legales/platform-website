import Link from 'next/link';
import CitySelect from '../base/CitySelect';
import { ErrorMessage, Field, Form, Formik } from "formik";
import registerValidator from '../../validators/register-validator';
import InputField from '../base/InputField';
import { useAuth } from '../../hooks/useAuth';
import { RegisterUser, RegisterUserErrors } from '../../interfaces/registerUser';
import useSWR from 'swr';
import http from '../../helpers/http';
import { useRouter } from 'next/router';
import { GetServerSideProps, GetStaticProps } from 'next';

const INITIAL_USER = {
    acceptedTerms: false,
    fullname: '',
    email: "",
    password: "",
    password_confirmation: '',
    type: 'pro',
    city: '',
    phone: '',
    company: '',
    ice: '',
    civility: 'm',
}

const RegisterPage = () => {
    const { register } = useAuth({ middleware: 'guest', redirectIfAuthenticated: '/'})
    return (
        <div className="flex items-center justify-center bg-gray-300 w-auto" style={{ minHeight: "calc(100vh - 4rem)" }}>

            <div className="space-y-8 border px-6 py-12 rounded-xl shadow-xl bg-white my-4 lg:my-0">

                <div className="">
                    <h2 className="mt-4 text-center text-3xl font-extrabold">Créer un compte</h2>
                </div>
                <Formik
                    initialValues={INITIAL_USER}
                    validationSchema={registerValidator}
                    onSubmit={async (values, { setErrors, setSubmitting }) => {
                        try{
                            register(setErrors, values);
                        } catch(err){
                            console.log(err)
                        }
                        setSubmitting(false);
                    }}
                >
                    {({ values, isSubmitting }) => (
                        <Form>
                            <div className="flex justify-center items-center mb-3" >
                                <fieldset className="px-4 flex items-center">
                                    <Field type="radio" value="particulier" name="type" className="w-4 h-4" />
                                    <label className="ml-2 text-sm font-medium text-gray-900">Particulier</label>
                                </fieldset>
                                <fieldset className="px-4 items-center">
                                    <Field type="radio" value="pro" name="type" className="w-4 h-4" />
                                    <label className="ml-2 text-sm font-medium text-gray-900">Professionnel</label>
                                </fieldset>
                            </div>
                            <div className="grid gap-6 lg:grid-cols-2">
                                <section>
                                    {values.type === "particulier" ?
                                        (
                                            <div className='mb-6'>
                                                <div>
                                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Civilité/Nom complet</label>
                                                    {/* <ErrorMessage name="" component="p" className="inline text-red-600 ml-2" /> */}
                                                </div>
                                                <div className="flex">
                                                    <Field
                                                        as='select'
                                                        name="civility"
                                                        className="inline-flex items-center px-3 text-sm text-gray-900 border border-r-0 border-gray-300 rounded-l-md   ">
                                                        <option value="m">M.</option>
                                                        <option value="mme">Mme.</option>
                                                        <option value="mlle">Mlle</option>
                                                    </Field>
                                                    <Field type="text" name="fullname"
                                                        className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5" placeholder='nom complet' />
                                                </div>
                                            </div>
                                        ) : (
                                            <div className='grid lg:grid-cols-2 lg:gap-2'>
                                                <InputField label='ICE' name='ice' placeholder='1234567890' type="number" />
                                                <InputField label='Société' name='company' placeholder='dénomination sociale' type="text" />
                                            </div>
                                        )}
                                    <div className='mb-6'>
                                        <div>
                                            <label htmlFor="phone" className="mb-2 text-sm font-medium text-gray-900 ">Télephone</label>
                                            <ErrorMessage name='phone' component="p" className="inline text-red-600 ml-2" />
                                        </div>
                                        <div className="flex">
                                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                                                +212
                                            </span>
                                            <Field type="text" id="phone" name='phone' className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5" placeholder="6 12345678" />
                                        </div>
                                    </div>
                                    <CitySelect name='city' />
                                </section>

                                <section>
                                    <InputField label='Email' name='email' placeholder='john.doe@company.com' type="email" />
                                    <InputField label='Mot de passe' name='password' placeholder='•••••••••' type="password" />
                                    <InputField label='Confirmer mot de passe' name='password_confirmation' placeholder='•••••••••' type="password" />
                                </section>
                            </div>
                            <div className="flex items-start mb-6">
                                <div className="flex items-center h-5">
                                    <Field id="terms" type="checkbox" name='acceptedTerms' className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" />
                                </div>
                                <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 ">J'ai lu et j'accepte les
                                    <Link href="/">
                                        <a className="text-blue-600 hover:underline ">{' '}conditions générales d'utilisation .</a>
                                    </Link>
                                </label>
                            </div>

                            <div className='flex items-center'>
                                <button
                                    type="submit"
                                    className={`${isSubmitting && 'cursor-not-allowed opacity-70'} text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center`}
                                    disabled={isSubmitting}
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

                                <ErrorMessage name="acceptedTerms" component="p" className="inline text-red-600 ml-2" />
                            </div>

                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

// export const getServerSideProps: GetServerSideProps<any> = ({ req, query }) => {
//     return req.cookies.user && { redirect: { destination: '/', permanent: false } }
// }
export default RegisterPage;


