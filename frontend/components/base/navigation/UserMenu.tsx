import { Menu } from "@headlessui/react";
import { useRouter } from "next/router";
import { useAuth } from "../../../hooks/useAuth";



const UserMenu = () => {
    const router = useRouter()
    const { user, logout } = useAuth({ middleware: "auth" });

    const handleLogout = () => {
        logout();
        router.push("/home");
    }

    return (
    
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Menu as="div" className="ml-3 relative">
                <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <div className="relative w-8 h-8 overflow-hidden bg-blue-900 rounded-full ">
                            <svg className="absolute w-10 h-10 text-gray-200 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                    </Menu.Button>
                </div>
                <Menu.Items
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                        <a
                            href="#"
                            className={` block px-4 py-2 text-sm text-gray-900`}
                        >
                            {user.type}
                            { user.type === 'pro' ? user.company : user.fullname }
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a
                            href="#"
                            className={` block px-4 py-2 text-sm text-gray-900 hover:bg-gray-300`}
                        >
                            Your Profile
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <button
                            onClick={() => handleLogout()}
                            className={`block px-4 py-2 text-sm text-gray-900 hover:bg-gray-300 w-full text-left`}
                        >
                            Se déconnecter 
                        </button>
                    </Menu.Item>

                </Menu.Items>
            </Menu>
        </div>
    );
}
export default UserMenu;