import { FunctionComponent } from "react";
import { NavItem } from "../../composed/NavBar";

const HorizontalNavItems: FunctionComponent<{ navigation: NavItem[] }> = ({ navigation }) => {
    return (
        // flex items-center justify-center
        <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
                {navigation.map(({ name, href, current }) => (
                    <a
                        key={name}
                        href={href}
                        className={`px-3 text-center flex items-center py-2 rounded-md text-sm font-medium ${current ? 'underline' : ' hover:underline'}`}
                        aria-current={current ? 'page' : undefined}
                    >
                        {name}
                    </a>
                ))}
            </div>
        </div>
    );
}
export default HorizontalNavItems;