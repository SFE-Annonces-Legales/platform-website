import PricingCard from "@/components/composed/home/PricingCard";


const PricingSection = () => {
    return (
        <div className="sm:max-w-6xl max-w-sm mx-auto pt-6 mt-6">
            <div className="sm:max-w-4xl max-w-sm mx-auto py-2 text-center">
                <h3 className="sm:text-5xl text-3xl text-blue-900 mt-6 sm:mb-4 font-semibold py-2">
                    Packs Professionnels Pour une publication multiple.
                </h3>
                <p className="my-1 sm:py-3 sm:text-xl text-lg  text-gray-500 max-w-x">
                    Vous êtes un professionnel des publications juridiques, expert du droit et du chiffre (cabinet comptable, avocat, huissier, juriste, notaire, ...), vous publiez régulièrement des annonces légales ?
                    Notre Plateforme vous propose de bénéficier d'un système de recharge d'annonces légales grâce aux différents Packs disponibles et de bénéficier de tarifs avantageux.
                </p>
                <p className="my-1 sm:py-2 sm:text-sm text-gray-500 max-w-x">
                    * Pour les individuels le prix unitaire de l'annonce est de 150 DH TTC.
                </p>
            </div>
            <div className="flex justify-evenly flex-wrap space-y-4 lg:space-y-0">
                <PricingCard planName="Silver" totalPrice={1300} totalAnn={10} />
                <PricingCard planName="Gold" totalPrice={2400} totalAnn={20} />
                <PricingCard planName="Platinium" totalPrice={5000} totalAnn={50} />
            </div>

        </div>
    );
}
export default PricingSection;