import * as yup from 'yup';

yup.setLocale({
    mixed: {
        required: 'Champ obligatoir'
    },
    number: {
        positive: "valeur invalide"
    }
})

export default function sarlValidator() {
    return yup.object({
        acte: yup.string().required().oneOf(["ssp", "an"], "Valeur invalide"),
        dateActe: yup.date().required(),
        denomination: yup.string().required(),
        forme: yup.string().required().oneOf(["sarl", "sarlau", "snc", "scs", "sca"], "valeur invalide"),
        objet: yup.string().required(),
        capital: yup.number().positive().required(),
        valNominale: yup.number().positive().required(),
        montantApport: yup.number().positive().required(),
        duree: yup.number().positive().required(),
        zip: yup.number().positive().required(),
        adresse: yup.string().required(),
        siegeVille: yup.string().required().matches(/^[1-9][0-9]?$/g),
        tribunal: yup.string().required().matches(/^[1-9][0-9]?$/g),
        dateDepot: yup.date().required(),
        numDepot: yup.string().required(),
        rc: yup.string().required(),
        associes: yup.array().min(1, "Doit avoir au moin un associé")
        .of(yup.object({
            type: yup.string().required().oneOf(['physique', "morale"]), 
            parts: yup.number().required().positive(),
            adresse: yup.string().required(), 
            civilité: yup.string().when("type", {is: "physique", then: yup.string().required().oneOf(["m", "mme"], "valeur invalide")}), 
            nom: yup.string().when("type", {is: "physique", then: yup.string().required()}), 
            prenom: yup.string().when("type", {is: "physique", then: yup.string().required()}), 
            denomination: yup.string().when("type", {is: "morale", then: yup.string().required()}),
            rc: yup.string().when("type", {is: "morale", then: yup.string().required()}), 
        }))
    });
}  