import { FunctionComponent } from "react";
import { NAV_ITEMS } from "@/constants/navigation";
import NavItem from "./NavItem";


const HorizontalNavItems: FunctionComponent<{containerStyles:string, itemStyles: string}> = ({ containerStyles, itemStyles }) => {
    return (
        <div className={containerStyles}>
            {NAV_ITEMS.map(({ name, href }) => (
                <NavItem
                    href={href}
                    key={name}
                    className={itemStyles}
                >{name}</NavItem>
            ))}
        </div>
    );
}
export default HorizontalNavItems;