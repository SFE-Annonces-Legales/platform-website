import { Disclosure } from "@headlessui/react";
import { FunctionComponent } from "react";
import { NavItem } from "../../../CONSTANTS/navigation";

const VerticalNavItems: FunctionComponent<{ navigation: NavItem[] }> = ({ navigation }) => {
    return (
        <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-500">
                {navigation.map(({ name, href }) => (
                    <Disclosure.Button
                        key={name}
                        as="a"
                        href={href}
                        className={`block px-3 py-2 rounded-md text-base font-medium hover:underline`}
                    >
                        {name}
                    </Disclosure.Button>
                ))}
            </div>
        </Disclosure.Panel>
    );
}
export default VerticalNavItems;