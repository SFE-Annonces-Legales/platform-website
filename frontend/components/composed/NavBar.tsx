import { Disclosure } from '@headlessui/react'
import { useAuth } from '@/hooks/useAuth';
import HorizontalNavItems from '@/components/base/navigation/HorizontalNavItems';
import Logo from '@/components/base/navigation/Logo';
import MobileMenuButton from '@/components/base/navigation/MobileMenuButton';
import NavAuthLinks from '@/components/base/navigation/NavAuthLinks';
import UserMenu from '@/components/base/navigation/UserMenu';
import VerticalNavItems from '@/components/base/navigation/VerticalNavItems';


const Navbar = () => {
    const { user } = useAuth({});
    return (
        <Disclosure as="nav" className="bg-blue-600 shadow-sm text-white h-16">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <Logo />
                            <HorizontalNavItems
                                containerStyles='hidden sm:flex sm:ml-6 sm:space-x-4'
                                itemStyles='px-3 text-center flex items-center py-2 text-sm font-medium hover:underline'
                            />
                            <MobileMenuButton open={open} />
                            { user ? <UserMenu /> : <NavAuthLinks /> }
                        </div>
                    </div>
                    <VerticalNavItems />
                </>
            )}
        </Disclosure>
    )
}

export default Navbar;