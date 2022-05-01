import TextWithImage from "@/components/composed/home/TextWithImage";


const StepsSection = () => {
    return (
        <div className="sm:max-w-6xl max-w-sm mx-auto pt-6 mt-6">

            <TextWithImage
                title="Choisissez le modèle le mieux adapté à votre parution."
                src="https://via.placeholder.com/300"
                reversed={false}
            >
                Constitution, modification, cessation ou autre, nos mdèles prédefinis sont à votre
                disposition pour une réalisation rapide et efficace.
            </TextWithImage>

            <TextWithImage
                title="Remplissez le formulaire."
                src="https://via.placeholder.com/300"
                reversed
            >
                Donner les informations nécessaires pour la création de votre annonce légale.
                Nos formulaires sont faciles à comprendre et simples à remplire.
            </TextWithImage>

            <TextWithImage
                title="Procèdez au paiment."
                src="https://via.placeholder.com/300"
                reversed={false}
            >
                Selectionner la forme de paiment qui vous convient,
                et profitez des avantages tarifaires que notre plateforme fournit
            </TextWithImage>

        </div>
    );
}
export default StepsSection;