import { FC, PropsWithChildren } from "react";
import NavBar from "@/components/composed/NavBar";
import Footer from "@/components/composed/Footer";

const UserLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
    return (
        <div className="w-full min-h-screen">
            <NavBar />
            <div className="w-full" >
                { children }
            </div>
            <Footer />
        </div>
    );
}

export default UserLayout;