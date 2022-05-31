import FormButton from "@/components/base/Forms/FormButton";
import PubFormField from "@/components/base/Forms/PubFormField";
import SectionWrapper from "@/components/base/Forms/SectionWrapper";
import HyperLink from "@/components/base/HyperLink";
import CreatePubLayout from "@/components/layouts/CreatePubLayout"
import http from "@/helpers/http";
import PubProvider, { usePub } from "@/hooks/usePub";
import City from "@/interfaces/cities";
import Court from "@/interfaces/courts";
import sarlValidator from "@/validators/pub-validators/constitution/sarlValidator";
import { FieldArray, Form, Formik } from "formik";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'


const ASSOCIE = { type: "physique", qualite: "gérant", civilité: "m", nom: "", prenom: "", adresse: "", denomination: "", rc: "", parts: 0 };

const INITIAL_VALS = {
    acte: "", dateActe: "",
    denomination: "", forme: '',
    objet: "", capital: 0, valNominale: 0,
    montantApport: 0, duree: 99,
    adresse: "", zip: 0, siegeVille: "",
    associes: [ASSOCIE],
    tribunal: "",
    dateDepot: "",
    numDepot: "",
    rc: ""
}

const Page = ({ cities, courts }: { cities: City[], courts: Court[] }) => {
    const { pub, setPub } = usePub()
    const { push, pathname } = useRouter()
    useEffect(() => { if (pub !== null) { console.log(pub); push(pathname + '/valider') } }, [pub])
    return (
        <CreatePubLayout>
            <Formik
                initialValues={INITIAL_VALS}
                validationSchema={sarlValidator}
                onSubmit={(values, { setSubmitting }) => {
                    setPub(values);

                    // console.log(pub);
                    // setSubmitting(false);
                }}
            >
                {({ values, isSubmitting }) => (
                    <Form>
                        <SectionWrapper title="Info sur l'acte">
                            <PubFormField as={"select"} label="Nature de l'acte" name="acte" >
                                <option value="" defaultValue={""}>Choisir nature</option>
                                <option value="ssp">Acte Sous Seing Privé</option>
                                <option value="an">Acte Notarié</option>
                            </PubFormField>

                            <PubFormField label="Date de l'acte" name="dateActe" type={"date"} />

                        </SectionWrapper>
                        <SectionWrapper title="La société">
                            <PubFormField label="Dénomination sociale" name="denomination" />
                            <PubFormField label="Forme sociale" name="forme" as={"select"}>
                                <option value="" defaultValue={""}>Choisir forme</option>
                                <option value="sarl">Société à Responsabilité Limitée (SARL)</option>
                                <option value="sarlau">Société à Responsabilité Limitée à Associé Unique (SARL.AU)</option>
                                <option value="snc">Société en Nom Collectif (SNC)</option>
                                <option value="scs">Société Commandite Simple (SCS)</option>
                                <option value="sca">Société en Commandite par Action (SCA)</option>
                            </PubFormField>
                            <PubFormField label="Objet social" name="objet" as={"textarea"} className="h-20" />
                            <PubFormField label="Capital social" name="capital" tail="DHs" type={"number"} />
                            <PubFormField label="Valeur nominale" name="valNominale" tail="DHs" type={"number"} />
                            <PubFormField label="Montant des apports" name="montantApport" tail="DHs" type={"number"} />
                            <PubFormField label="Durée" name="duree" tail="Ans" type={"number"} />
                        </SectionWrapper>

                        <SectionWrapper title="Siège social">
                            <PubFormField label="Adresse" as="textarea" name="adresse" />
                            <PubFormField label="Code postal" type={"number"} name="zip" />
                            <PubFormField label="Ville" name="siegeVille" as={"select"}>
                                <option value="" defaultValue={""}>Choisir ville</option>
                                {cities.map(({ id, name }) => (<option value={id} key={id}>{name}</option>))}
                            </PubFormField>
                        </SectionWrapper>

                        <SectionWrapper title="Associés">
                            <FieldArray name={"associes"} render={({ remove, push }) => (
                                <div>
                                    {values.associes.map((associe, index) => (
                                        <div key={index}>
                                            {index !== 0 && (
                                                <button
                                                    type="button"
                                                    onClick={() => remove(index)}
                                                    className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mt-2">
                                                    <BiMinus className="mr-2" />
                                                    Ajouter un associé
                                                </button>
                                            )}
                                            <PubFormField label="Type" name={`associes.${index}.type`} as={"select"}>
                                                <option value="physique">Personne Physique</option>
                                                <option value="morale">Personne Morale</option>
                                            </PubFormField>
                                            <PubFormField label="Qualité" name={`associes.${index}.qualite`} as={"select"}>
                                                <option value="gérant">Gérant</option>
                                                <option value="gérante">Gérante</option>
                                                <option value="cogérant">Cogérant</option>
                                                <option value="cogérante">Cogérante</option>
                                            </PubFormField>
                                            {associe.type === "physique" ? (
                                                <>
                                                    <PubFormField label="Civilité" name={`associes.${index}.civilite`} as={"select"}>
                                                        <option value="m">Monsieur</option>
                                                        <option value="mme">Madame</option>
                                                    </PubFormField>
                                                    <PubFormField label="Prénom" name={`associes.${index}.prenom`} />
                                                    <PubFormField label="Nom" name={`associes.${index}.nom`} />
                                                </>
                                            ) : (
                                                <>
                                                    <PubFormField label="Dénomination" name={`associes.${index}.denomination`} />
                                                    <PubFormField label="RC" name={`associes.${index}.rc`} />
                                                </>
                                            )}
                                            <PubFormField label="Adresse" as="textarea" name={`associes.${index}.adresse`} />
                                            <PubFormField label="Participation" name={`associes.${index}.parts`} tail="parts" />
                                            {index !== values.associes.length - 1 && <hr className="mt-4" />}
                                        </div>

                                    ))}
                                    <button
                                        type="button"
                                        onClick={() => push(ASSOCIE)}
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mt-2">
                                        <BiPlus className="mr-2" />
                                        Ajouter un associé
                                    </button>
                                </div>
                            )} />
                        </SectionWrapper>
                        <SectionWrapper title="Dépot légal" >
                            <PubFormField name="tribunal" label="Tribunal" as={"select"}>
                                <option value="" defaultValue={""}>Choisir le tribunal</option>
                                {courts.map(({ id, name }) => (<option value={id} key={id}>{name}</option>))}
                            </PubFormField>
                            <PubFormField label="Date de dépôt" name="dateDepot" type={"date"} />
                            <PubFormField label="Numéro de dépôt" name="numDepot" />
                            <PubFormField label="Numéro RC" name="rc" />
                        </SectionWrapper>

                        <div className="flex justify-end">
                            <HyperLink
                                href='/'
                                className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mt-2">
                                <MdArrowBackIos className="ml-2" />
                                Choisir un autre modèle
                            </HyperLink>
                            <FormButton
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mt-2"
                                isSubmitting={isSubmitting}
                            >
                                Vérifier l'annonce
                                <MdArrowForwardIos className="ml-2" />
                            </FormButton>

                        </div>
                    </Form>
                )}
            </Formik>
        </CreatePubLayout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    let cities: City[] = [];
    let courts: Court[] = [];
    try {
        const { data: citiesArr } = await http.get('/api/cities');
        const { data: courtsArr } = await http.get('/api/courts');
        cities = citiesArr;
        courts = courtsArr;
    } catch (err: any) {
        console.error(err)
    }
    return {
        props: { cities, courts }
    }
}
export default (props: { cities: City[], courts: Court[] }) => (<PubProvider><Page {...props} /></PubProvider>);