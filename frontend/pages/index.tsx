import { NextPage } from "next";
import { useAuth } from "@/hooks/useAuth";
import UserLayout from "@/components/layouts/UserLayout";
import { PUB_LIST } from '@/constants/pub-list'
import Link from "next/link";
import { PLATFORM_NAME } from "@/constants/navigation";

const Index: NextPage = () => {
    const { logout, user } = useAuth({ middleware: "auth" });
    return (
        <UserLayout>
            <div className="min-h-screen w-full my-0 bg-gray-200 pb-4">
                {/* Pricing Alert */}
                <div className="flex p-4 text-sm text-blue-700 bg-blue-200 mb-4 " role="alert">
                    <svg className="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                    </svg>
                    <div>
                        <span className="font-medium mr-2">Note !</span>
                        Le prix unitaire de l'annonce est de 150 DH TTC. Découvrez aussi nos différents packs de recharges et bénéficiez de tarifs avantageux.
                    </div>
                </div>
                <div className="max-w-7xl mx-auto">
                    {/* Welcoming Text */}
                    <div className="sm:max-w-4xl max-w-sm mx-auto py-2 text-center">
                        <h3 className="sm:text-4xl text-lg text-blue-900 mt-6 sm:mb-4 font-semibold py-2">
                            Publier votre annonce légale au journal et au bulletin officiel
                        </h3>
                        <p className="my-2 sm:py-3 sm:text-md text-md  text-gray-500 max-w-x">
                            {PLATFORM_NAME} simplifie vos démarches en vous proposant un outil pratique et simple d’utilisation pour la publication de votre annonce légale dans le journal et au bulletin officiel du Maroc.
                        </p>
                    </div>
                    <div className="sm:max-w-4xl max-w-sm mx-auto py-2 text-center">
                        <h3 className="sm:text-lg text-md text-blue-900 mt-6 sm:mb-4 font-semibold py-2">
                            Choisissez le formulaire d’annonce légale adapté à votre demande.
                        </h3>
                    </div>
                    {/* Templates list */}
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
                        {
                            PUB_LIST.map(({ title, url, items }, i) => (
                                <div className="shadow-xl h-fit rounded-lg" key={i}>
                                    <div className="bg-blue-600 text-center py-4 rounded-t-lg">
                                        <h3 className=" font-semibold text-white">{title.toUpperCase()}</h3>
                                    </div>
                                    <ul className="p-8 list-inside bg-white rounded-b-lg">
                                        {items.map((item, index) => (
                                            <li className="list-disc py-1" key={index}>
                                                <Link href={`${url}/${item.url}`}>
                                                    <a className="hover:font-semibold hover:text-blue-600">{item.name}</a>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}


export default Index;