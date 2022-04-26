import { BsFacebook, BsTwitter, BsLinkedin, BsGoogle } from 'react-icons/bs'
import { navigationItems } from '../../CONSTANTS/navigation';

const Footer = () => {
    return (
        <footer className="p-4 bg-gradient-to-b from-blue-600 to-blue-900 shadow md:px-6 md:py-8 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com" className="flex items-center mb-4 sm:mb-0">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">LOGO</span>
                    </a>
                    <ul className="flex items-center sm:items-center mb-6 text-sm sm:mb-0">

                        {
                            navigationItems.map(({ name, href }) => (
                                <li>
                                    <a href={href} className="mr-4 hover:underline md:mr-6 ">{name}</a>
                                </li>
                            ))
                        }

                    </ul>
                </div>
                <div className="flex space-x-6 sm:justify-center sm:mt-0 mt-10 text-gray-400">
                    <a href="#" className="hover:text-white">
                        <BsFacebook />
                    </a>
                    <a href="#" className="hover:text-white">
                        <BsLinkedin />
                    </a>
                    <a href="#" className="hover:text-white">
                        <BsTwitter />
                    </a>
                    <a href="#" className="hover:text-white">
                        <BsGoogle />
                    </a>

                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span className="block text-sm sm:text-center">&copy; 2022
                    <a href="https://flowbite.com" className="hover:underline mx-2">Plateforme™.</a>
                </span>
            </div>
        </footer>
    );
}
export default Footer;