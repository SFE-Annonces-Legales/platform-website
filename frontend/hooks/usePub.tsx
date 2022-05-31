import { createContext, ReactNode, useContext, useState, Dispatch, SetStateAction } from "react"

interface Pub {
    [key: string]: any
}

const PubCtx = createContext<{ pub: null | Pub, setPub: Dispatch<SetStateAction<Pub | null>> }>({ pub: null, setPub: () => { } });

export const usePub = () => useContext(PubCtx);

export default function PubProvider({ children }: { children : ReactNode }){
    const [pub, setPub] = useState<null | Pub>(null);
    return (
        <PubCtx.Provider value={{ pub, setPub }}>{ children }</PubCtx.Provider>
    );
}
