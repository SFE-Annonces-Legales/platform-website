import Link from "next/link";
import { PropsWithChildren } from "react";


const HyperLink: React.FC<PropsWithChildren<{ href: string, className: string }>> 
    = ({ children, href, className }) => {
    return (
        <Link href={href}>
            <a className={className}>{ children }</a>
        </Link>
    );
}
export default HyperLink;