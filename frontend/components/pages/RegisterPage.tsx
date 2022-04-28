import { useState } from 'react';
import CitySelect from '../base/CitySelect';
import SelectUserType from '../composed/register/selectUserType';



const RegisterPage = () => {
    const [userType, setUserType] = useState<string>("pro");
    const handleChange = (v: string) => setUserType(v);
    return (
        <div className="flex items-center justify-center bg-gray-300 w-auto" style={{ minHeight: "calc(100vh - 4rem)" }}>

            <div className="space-y-8 border px-6 py-12 rounded-xl shadow-xl bg-white my-4 lg:my-0">

                <div className="">
                    <h2 className="mt-4 text-center text-3xl font-extrabold">Créer un compte</h2>
                    <SelectUserType handleChange={handleChange} userType={userType} />
                </div>

                <form>
                    <div className="grid gap-6 lg:grid-cols-2">
                        <section className="">
                            {userType === "particulier" ?
                                (
                                    <div className='mb-6'>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Civilité/Nom complet</label>
                                        <div className="flex">
                                            <select name="civility" className="inline-flex items-center px-3 text-sm text-gray-900 border border-r-0 border-gray-300 rounded-l-md   ">
                                                <option value="m">M.</option>
                                                <option value="mme">Mme.</option>
                                                <option value="mlle">Mlle</option>
                                            </select>
                                            <input type="text" className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5" placeholder='nom complet' />
                                        </div>
                                    </div>
                                ) : (
                                    <div className='grid lg:grid-cols-2 lg:gap-2'>
                                        <div className="mb-6 ">
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">ICE</label>
                                            <input type="number" id="ice" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="1234567890" />
                                        </div>
                                        <div className="mb-6 ">
                                            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 ">Société</label>
                                            <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="dénomination sociale" />
                                        </div>
                                    </div>
                                )}
                            <div className='mb-6'>
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Télephone</label>
                                <div className="flex">
                                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                                        +212
                                    </span>
                                    <input type="text" id="phone" className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5" placeholder="6 12345678" />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Ville</label>
                                <CitySelect />
                            </div>
                        </section>

                        <section>
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@company.com" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="•••••••••" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password_confirmation" className="block mb-2 text-sm font-medium text-gray-900 ">Confirm password</label>
                                <input type="password" id="password_confirmation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="•••••••••" />
                            </div>
                        </section>
                    </div>
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300    " />
                        </div>
                        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 ">I agree with the <a href="#" className="text-blue-600 hover:underline ">terms and conditions</a>.</label>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center   ">Submit</button>
                </form>

            </div>
        </div>
    );
}
export default RegisterPage;