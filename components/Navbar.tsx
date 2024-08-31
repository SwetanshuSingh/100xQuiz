import Logo from "./ui/logo";
import NavLinks from "./ui/nav-links";

const Navbar = () => {
  return (
    <nav className="w-5/6 bg-white flex justify-between items-center rounded-2xl p-4">
      <Logo />
      <NavLinks />
      <p className="text-2xl font-bold">Sign up</p>
    </nav>
  );
};

export default Navbar;
