import { FunctionComponent, PropsWithChildren } from "react";
import NavBar from "../composed/NavBar";


const MainLayout: FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
    return (
        <div className="w-full min-h-screen">
            <NavBar />
            { children }
        </div>
    );
}
export default MainLayout;