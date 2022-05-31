// export const FORMES = [
//     { short: 'sarl', full: "société à responsabilité limitée" },
//     { short: 'sarlau', full: "société à responsabilité limitée à associé unique" },
//     { short: 'snc', full: "société en nom collectif" },
//     { short: 'scs', full: "société commandite simple" },
//     { short: 'sca', full: "société en commandite par action" },
// ]
type Forms = { [key: string]: string }


export const FORMES: Forms = {
    sarl: "société à responsabilité limitée",
    sarlau: "société à responsabilité limitée à associé unique",
    snc: "société en nom collectif",
    scs: "société commandite simple",
    sca: "société en commandite par action",
}
