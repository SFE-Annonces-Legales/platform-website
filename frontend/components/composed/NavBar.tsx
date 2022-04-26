import { Disclosure } from '@headlessui/react'
import HorizontalNavItems from '../base/navigation/HorizontalNavItems';
import Logo from '../base/navigation/Logo';
import MobileMenuButton from '../base/navigation/MobileMenuButton';
import NavAuthLinks from '../base/navigation/NavAuthLinks';
import VerticalNavItems from '../base/navigation/VerticalNavItems';
import { navigationItems } from '../../CONSTANTS/navigation';

const Navbar = () => {
    return (
        <Disclosure as="nav" className="bg-blue-600 shadow-sm text-white">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <Logo />
                            <HorizontalNavItems navigation={navigationItems} />
                            <MobileMenuButton open={open} />
                            <NavAuthLinks />
                        </div>
                    </div>
                    <VerticalNavItems navigation={navigationItems} />
                </>
            )}
        </Disclosure>
    )
}

export default Navbar;