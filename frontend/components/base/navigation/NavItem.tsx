import Link from "next/link";
import { PropsWithChildren } from "react";

type NavItemProps = PropsWithChildren<{
    href: string;
    className: string;
}>

const NavItem = ({ href, className, children }: NavItemProps) => {
    return (
        <Link href={href}>
            <a className={className}>{children}</a>
        </Link>
    );
}
export default NavItem;