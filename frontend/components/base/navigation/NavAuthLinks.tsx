
const NavAuthLinks = () => {
    return (
        <>
            {/* shows on small screens */}
            <div className='items-center pr-2 sm:hidden'>
                <a href="#" className="btn-white-primary">Inscription</a>
            </div>

            {/* shows on larger screens */}
            <div className="items-center pr-2 hidden sm:flex">
                <a href="#" className="btn-white-secondary">Connexion</a>
                <a href="#" className="btn-white-primary">Inscription</a>
            </div>
        </>
    );
}
export default NavAuthLinks;