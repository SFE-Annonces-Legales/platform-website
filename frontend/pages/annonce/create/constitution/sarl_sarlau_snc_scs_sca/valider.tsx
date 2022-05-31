import CreatePubLayout from "@/components/layouts/CreatePubLayout";
import { FORMES } from "@/constants/formes-societe";
import title from "@/helpers/title";
import PubProvider, { usePub } from "@/hooks/usePub";
import { useRouter } from "next/router";
import { useEffect } from "react";


const ValidationPage = () => {
    const { pub } = usePub();
    const router = useRouter();
    useEffect(() => {
        console.log(pub)
        if (pub === null) router.push("/");
    }, [pub])
    return !pub ? <p>loading</p> :  (
        <CreatePubLayout>
            <div className="text-center">
               <p className="font-bold underline">Avis de Constitution d’une {pub.forme}</p>
                <p>Dénomination Sociale : {pub.denomination}.</p>
                <p>Forme : {title(FORMES[pub.forme])}.</p>
                <p>Capital Social : {pub.capital} DHS.</p>
                <p>Siège Social : {pub.adresse}.</p>

                <p>Numéro R.C :{pub.rc} R.C {pub.siegeVille}.</p>
            </div>

           <p>I– Aux termes d’un acte {pub.acte} en date du {pub.dateActe}, il a été constitué une société.</p> 
            <p>Forme : {FORMES[pub.forme]} ({pub.forme}).</p>
            <p>Dénomination Sociale : {pub.denomination}.</p>
            <p>Objet Social : {pub.objet}.</p>
            <p>Capital Social : {pub.capital} dirhams.</p>
            <p>Siège Social : {pub.adresse}.</p>
            <p>Durée : {pub.duree} ans.</p>
            <p>
            Capital Social : {pub.capital} dirhams divisé en {pub.montantApport} parts sociales de {pub.valeurNominale} dirhams.
            </p>
            {
                (pub.associes as any[]).map((associe, i) => (
                    <p>
                        {associe.qualite} : 
                        {associe.type === 'physique' ? `${associe.civilite} ${associe.nom} ${associe.prenom}`: `${associe.denomination} RC ${associe.rc}`} |
                        {associe.adresse} |
                        {associe.parts} parts
                    </p>
                ))
            }
            <p>Année Sociale :  du 1er janvier au 31 décembre.</p>
            <p>II– Le dépôt légal a été effectué au {pub.tribunal} le {pub.dateDepot} sous le N° {pub.numDepot}.</p>
            {/* <p>II– Le dépôt légal a été effectué au (Greffe du Tribunal de Commerce) [ville] ou (Tribunal d’Instance) [ville] ou (Centre Régional d’Investissement) [ville] le [date de dépôt] sous le N° [numéro de dépôt].</p> */}
        </CreatePubLayout>
    );
}

export default (props: any) => (<PubProvider><ValidationPage {...props} /></PubProvider>);