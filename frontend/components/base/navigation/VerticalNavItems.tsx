import { Disclosure } from "@headlessui/react";
import { FunctionComponent } from "react";
import { NAV_ITEMS } from "../../../constants/navigation";

const VerticalNavItems: FunctionComponent<{  }> = ({ }) => {
    return (
        <Disclosure.Panel className="sm:hidden bg-blue-500 absolute rounded-lg w-full">
            <div className="px-2 pt-2 pb-3 space-y-1">
                {NAV_ITEMS.map(({ name, href }) => (
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