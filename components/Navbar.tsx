import Logo from "./ui/logo";
import NavLinks from "./ui/nav-links";

const Navbar = () => {
    return (
        <nav className="w-5/6 min-h-14 bg-white flex justify-between items-center rounded-2xl p-5">
            <Logo />
            <NavLinks />
            <p>Sign up</p>
        </nav>
    )
}

export default Navbar;