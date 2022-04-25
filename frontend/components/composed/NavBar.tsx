import { Disclosure } from '@headlessui/react'
import HorizontalNavItems from '../base/navigation/HorizontalNavItems';
import Logo from '../base/navigation/Logo';
import MobileMenuButton from '../base/navigation/MobileMenuButton';
import NavAuthLinks from '../base/navigation/NavAuthLinks';
import VerticalNavItems from '../base/navigation/VerticalNavItems';

export type NavItem = {
    name: string;
    href: string;
    current: boolean
}

const navigation: NavItem[] = [
    { name: 'Accueil', href: '#', current: true },
    { name: 'Prix', href: '#', current: false },
    { name: 'A Propos', href: '#', current: false },
    { name: 'Contactez Nous', href: '#', current: false },
]

const Navbar = () => {
    return (
        <Disclosure as="nav" className="bg-blue-800 shadow-sm text-white">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <Logo />
                            <HorizontalNavItems navigation={navigation} />
                            <MobileMenuButton open={open} />
                            <NavAuthLinks />
                        </div>
                    </div>
                    <VerticalNavItems navigation={navigation} />
                </>
            )}
        </Disclosure>
    )
}

export default Navbar;