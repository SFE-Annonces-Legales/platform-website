import { Menu } from "@headlessui/react";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks/useAuth";
import HyperLink from "@/components/base/HyperLink";
import { FaUserCircle } from 'react-icons/fa'
import title from "@/helpers/title";
import { BiLogOut } from "react-icons/bi";
import { ImProfile } from "react-icons/im";


const UserMenu = () => {
    const router = useRouter()
    const { user, logout } = useAuth({ middleware: "auth" });

    const handleLogout = () => {
        logout();
        router.push("/home");
    }

    return (

        <div className=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Menu as="div" className="ml-3 relative">

                <Menu.Button
                    className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <FaUserCircle className=" w-8 h-8 bg-blue-900 rounded-full" />
                </Menu.Button>

                <Menu.Items
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                        <p className={`block px-4 py-2 text-sm text-gray-900`}>
                            {user.type === 'pro' ? user.company : title(`${user.civility}. ${user.fullname}`)}
                        </p>
                    </Menu.Item>
                    <hr className="bg-gray-700 mb-1" />
                    <Menu.Item>
                        <HyperLink
                            href="#"
                            className="flex items-center px-4 py-2 text-sm text-gray-900 hover:bg-gray-300"
                        >
                            <ImProfile className="mr-2" />
                            Profile
                        </HyperLink>
                    </Menu.Item>
                    <Menu.Item>
                        <button
                            onClick={() => handleLogout()}
                            className='px-4 py-2 text-sm text-gray-900 hover:bg-gray-300 w-full text-left flex items-center'
                        >
                            <BiLogOut className='mr-2' />
                            Se déconnecter
                        </button>
                    </Menu.Item>

                </Menu.Items>
            </Menu>
        </div>
    );
}
export default UserMenu;