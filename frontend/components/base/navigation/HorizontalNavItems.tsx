import { FunctionComponent } from "react";
import { NavItem } from "../../../CONSTANTS/navigation";


const HorizontalNavItems: FunctionComponent<{ navigation: NavItem[] }> = ({ navigation }) => {
    return (
        <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
                {navigation.map(({ name, href }) => (
                    <a
                        key={name}
                        href={href}
                        className={`px-3 text-center flex items-center py-2 rounded-md text-sm font-medium hover:underline`}
                    >
                        {name}
                    </a>
                ))}
            </div>
        </div>
    );
}
export default HorizontalNavItems;