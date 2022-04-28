import Link from "next/link";

const NavAuthLinks = () => {
    return (
        <>
            {/* shows on small screens */}
            <div className='items-center pr-2 sm:hidden'>
                <a href="#" className="btn-white-primary">Inscription</a>
            </div>

            {/* shows on larger screens */}
            <div className="items-center pr-2 hidden sm:flex">
                <Link href="/login">
                    <a className="btn-white-secondary">Connexion</a>
                </Link>
                <Link href="/register">
                    <a className="btn-white-primary">Inscription</a>
                </Link>
            </div>
        </>
    );
}
export default NavAuthLinks;