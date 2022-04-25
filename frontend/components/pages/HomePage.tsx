import Image from "next/image";
import { FunctionComponent } from "react";
import NavBar from "../composed/NavBar";

interface HomePageProps {

}
const myLoader = (width: string ) => `https://via.placeholder.com/${width}`;
const HomePage: FunctionComponent<HomePageProps> = () => {

    return (
        <div className="w-full">
            <NavBar />
            <main>
                {/* Hero Section */}
                <div className="bg-blue-800  sm:text-left text-center text-white px-2 sm:px-6 lg:px-8 pt-10 pb-20">
                    <div className="sm:max-w-4xl max-w-sm mx-auto py-2">
                            <h2 className="sm:text-5xl text-3xl mt-6 sm:mb-6 font-semibold py-3">
                                Publier une annonce légale n'a jamais été facile.
                            </h2>
                        <p className="my-6 sm:py-3 sm:text-2xl text-lg font-medium text-blue-300 max-w-xl">
                            Créer et publier une annonce légale facilement et rapidement avec nos modèles prêts à utiliser.
                        </p>
                        <button className="btn-white-primary my-2 sm:my-6">
                            Commencer maintenant
                        </button>
                    </div>
                </div>
                {/* End Hero Section */}

                {/* About Section */}

                <div className="px-2 sm:px-6 lg:px-8 pt-10 pb-20">
                    <div className="sm:max-w-4xl max-w-sm mx-auto py-2 text-center">
                        <h3 className="sm:text-5xl text-3xl text-blue-900 mt-6 sm:mb-4 font-semibold py-2">
                            'Plateforme' Facilite la création d'une annonce légale. 
                        </h3>
                        <p className="my-2 sm:py-3 sm:text-2xl text-lg  text-gray-500 max-w-x">
                            La création d'une annonce légale rendue facile grâce aux modèles que nous mettons à votre disposition.
                            Suivez les étapes et créer votre annonce rapidement et au prix qui vous convient.
                        </p>
                        <button className="btn-white-primary my-2 sm:my-6 px-10">
                            Rédiger
                        </button>
                    </div>

                    {/* Steps Section */}
                    <div className="sm:max-w-6xl max-w-sm mx-auto pt-6 mt-6">
                            <div className="flex flex-wrap justify-between my-6">
                                <div className="">
                                    <h4 className="sm:text-5xl text-3xl text-blue-900 font-semibold">Title</h4>
                                    <p className="my-2 sm:py-3 sm:text-2xl text-lg  text-gray-500 max-w-x">Paragraph</p>
                                </div>
                                <Image loader={() => myLoader("600x400")} src="https://via.placeholder.com/300" width={500} height={300}/>
                            </div>
                            <div className="flex flex-wrap sm:flex-1 my-6">
                                <Image loader={() => myLoader("600x400")} src="https://via.placeholder.com/300" width={500} height={300}/>
                                <div className="">
                                    <h4 className="sm:text-5xl text-3xl text-blue-900 font-semibold">Title</h4>
                                    <p className="my-2 sm:py-3 sm:text-2xl text-lg  text-gray-500 max-w-x">Paragraph</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-between my-6">
                                <div className="">
                                    <h4 className="sm:text-5xl text-3xl text-blue-900 font-semibold">Title</h4>
                                    <p className="my-2 sm:py-3 sm:text-2xl text-lg  text-gray-500 max-w-x">Paragraph</p>
                                </div>
                                <Image loader={() => myLoader("600x400")} src="https://via.placeholder.com/300" width={500} height={300}/>
                            </div>
                            


                    </div>
                    {/* End Steps Section */}

                </div>

                {/* End About Section */}
            </main>

        </div>
    );
}


export default HomePage;