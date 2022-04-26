import { Disclosure } from "@headlessui/react";
// import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { MdOutlineClose, MdMenu } from 'react-icons/md'
import { FunctionComponent } from "react";


const MobileMenuButton: FunctionComponent<{ open: boolean }> = ({ open }) => {
    return (
        <div className="flex items-center sm:hidden">
            <Disclosure.Button
                className="inline-flex items-center justify-center p-2 rounded-md border text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                {
                    open ?
                        <MdOutlineClose className="block h-6 w-6" aria-hidden="true" />
                        :
                        <MdMenu className="block h-6 w-6" aria-hidden="true" />
                }
            </Disclosure.Button>
        </div>
    );
}
export default MobileMenuButton;