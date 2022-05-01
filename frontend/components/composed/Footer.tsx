import { PLATFORM_NAME } from '@/constants/navigation';
import HorizontalNavItems from '@/components/base/navigation/HorizontalNavItems';
import SocialNetworkLinks from '@/components/base/SocialNetworkLinks';

const Footer = () => {
    return (
        <footer className="p-4 bg-gradient-to-b from-blue-600 to-blue-900 shadow md:px-6 md:py-8 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com" className="flex items-center mb-4 sm:mb-0">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">LOGO</span>
                    </a>
                    <HorizontalNavItems
                        containerStyles='flex items-center sm:items-center mb-6 text-sm sm:mb-0'
                        itemStyles='mr-4 hover:underline md:mr-6'
                    />
                </div>
                <SocialNetworkLinks />
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span className="block text-sm sm:text-center">&copy; 2022
                    <a href="https://flowbite.com" className="hover:underline mx-2">{PLATFORM_NAME}™.</a>
                </span>
            </div>
        </footer>
    );
}
export default Footer;