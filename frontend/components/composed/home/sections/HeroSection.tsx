import HyperLink from "@/components/base/HyperLink";


const HeroSection = () => {
    return (
        <div className="bg-gradient-to-b from-blue-600 to-blue-900 sm:text-left text-center text-white px-2 sm:px-6 lg:px-8 pt-10 pb-20">
            <div className="sm:max-w-4xl max-w-sm mx-auto py-2">
                <h2 className="sm:text-5xl text-3xl mt-6 sm:mb-6 font-semibold py-3">
                    Publier une annonce légale n'a jamais été facile.
                </h2>
                <p className="my-6 sm:py-3 sm:text-2xl text-lg font-medium text-blue-300 max-w-xl">
                    Créer et publier une annonce légale facilement et rapidement avec nos modèles prêts à utiliser.
                </p>
                <HyperLink href='/' className="btn-white-primary my-2 sm:my-6">
                    Commencer maintenant
                </HyperLink>
            </div>
        </div>
    );
}
export default HeroSection;