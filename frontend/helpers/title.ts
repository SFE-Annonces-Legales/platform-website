
const title = (sentence: string): string => {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
}

export default title;