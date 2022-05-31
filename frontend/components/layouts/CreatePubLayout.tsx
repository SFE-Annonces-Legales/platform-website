import UserLayout from "./UserLayout";
import { BiDollar, BiPen } from "react-icons/bi";
import { MdOutlineVerified } from "react-icons/md";

interface CreatePubLayoutProps {
    children: React.ReactNode;
}


const CreatePubLayout: React.FC<CreatePubLayoutProps> = ({ children }) => {
    return (
        <UserLayout>
            <div className="bg-gray-200 min-h-screen flex flex-col py-5">
                <div className="max-w-5xl mx-auto bg-white px-12 py-6 rounded shadow">
                    <div>
                        <div className="flex flex-wrap mx-auto">
                            <a className="inline-flex items-center justify-center w-1/2 py-3 font-medium leading-none tracking-wider text-blue-500 bg-gray-100 border-b-2 border-blue-500 rounded-t sm:px-6 sm:w-auto sm:justify-start title-font">
                                <BiPen className="mr-2" />
                                Saisie des informations
                            </a>
                            <a className="inline-flex items-center justify-center w-1/2 py-3 font-medium leading-none tracking-wider border-b-2 border-gray-200 sm:px-6 sm:w-auto sm:justify-start title-font hover:text-gray-900">
                                <MdOutlineVerified className="mr-2" />
                                Révision de l'annonce
                            </a>
                            <a className="inline-flex items-center justify-center w-1/2 py-3 font-medium leading-none tracking-wider border-b-2 border-gray-200 sm:px-6 sm:w-auto sm:justify-start title-font hover:text-gray-900">
                                <BiDollar className="mr-2" />
                                Paiement de l'annonce
                            </a>
                        </div>
                    </div>
                    
                        {children}
                   
                </div>
            </div>
        </UserLayout>
    );
}
export default CreatePubLayout;