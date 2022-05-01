import CitySelect from '@/components/base/Forms/CitySelect';
import { Field, Form, Formik } from "formik";
import registerValidator from '@/validators/register-validator';
import InputField from '@/components/base/Forms/InputField';
import { useAuth } from '@/hooks/useAuth';
import FormError from '@/components/base/Forms/FormError';
import FormButton from '@/components/base/Forms/FormButton';
import HyperLink from '@/components/base/HyperLink';

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
    const { register } = useAuth({ middleware: 'guest', redirectIfAuthenticated: '/verify-email' })
    return (
        <div className="flex items-center justify-center bg-gray-300 w-auto" style={{ minHeight: "calc(100vh - 4rem)" }}>

            <div className="space-y-8 border px-6 py-12 m-4 rounded-xl shadow-xl bg-white my-4 ">

                <div className="">
                    <h2 className="mt-4 text-center text-3xl font-extrabold">Créer un compte</h2>
                </div>
                <Formik
                    initialValues={INITIAL_USER}
                    validationSchema={registerValidator}
                    onSubmit={async (values, { setErrors, setSubmitting }) => {
                        try {
                            register(setErrors, values);
                        } catch (err) {
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
                                                    <label className="mb-2 text-sm font-medium text-gray-900 ">Civilité/Nom complet</label>
                                                    <FormError name="fullname" />
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
                                            <FormError name='phone' />
                                        </div>
                                        <div className="flex">
                                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                                                +212
                                            </span>
                                            <Field
                                                type="text"
                                                id="phone"
                                                name='phone'
                                                className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                                                placeholder="6 12345678" />
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
                                <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 ">
                                    J'ai lu et j'accepte les
                                    <HyperLink href="/" className="text-blue-600 hover:underline ">
                                        {' '}conditions générales d'utilisation .
                                    </HyperLink>
                                </label>
                            </div>

                            <div className='flex items-center'>
                                <FormButton
                                    className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
                                    isSubmitting={isSubmitting}>
                                    Créer
                                </FormButton>
                                <FormError name="acceptedTerms" />
                            </div>

                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}


export default RegisterPage;


