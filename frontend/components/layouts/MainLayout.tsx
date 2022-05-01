import { FunctionComponent, PropsWithChildren } from "react";
import NavBar from "@/components/composed/NavBar";


const MainLayout: FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
    return (
        <div className="w-full min-h-screen">
            <NavBar />
            { children }
        </div>
    );
}
export default MainLayout;