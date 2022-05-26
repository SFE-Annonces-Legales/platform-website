import Link from "next/link";
import { PropsWithChildren } from "react";
import { Url } from "url";


const HyperLink: React.FC<PropsWithChildren<{ href: Url | string, className: string }>> 
    = ({ children, href, className }) => {
    return (
        <Link href={href}>
            <a className={className}>{ children }</a>
        </Link>
    );
}
export default HyperLink;