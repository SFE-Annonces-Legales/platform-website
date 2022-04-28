import Image from 'next/image';
import Link from 'next/link';
import { HiLockClosed } from 'react-icons/hi'

const LoginPage = () => {
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
                <form className="mt-8 space-y-6">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Mot de passe
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Mot de passe"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded-sm"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
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
                            type="button"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <HiLockClosed className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                            </span>
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
                </form>
            </div>
        </div>
    );
}
export default LoginPage;