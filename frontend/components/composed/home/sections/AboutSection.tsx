import { PLATFORM_NAME } from "@/constants/navigation";
import { BiPencil } from 'react-icons/bi'
import HyperLink from "@/components/base/HyperLink";


const AboutSection = () => {
    return (
        
            <div className="sm:max-w-4xl max-w-sm mx-auto py-2 text-center">
                <h3 className="sm:text-5xl text-3xl text-blue-900 mt-6 sm:mb-4 font-semibold py-2">
                    {PLATFORM_NAME} Facilite la création d'une annonce légale.
                </h3>
                <p className="my-2 sm:py-3 sm:text-2xl text-lg  text-gray-500 max-w-x">
                    Le journal {PLATFORM_NAME} est un service spécialisé dans l'information légale, juridique et financière.
                    Il permet aux sociétés et professionnels du chiffre et du droit de publier rapidement et aux meilleurs tarifs leur annonces légales dans le journal quotidien numérique.
                </p>
                <HyperLink href="/" className="btn-white-primary my-2 sm:my-6 px-10">
                    <BiPencil className="inline mr-2" />
                    Rédiger
                </HyperLink>
            </div>
            );
}
export default AboutSection;