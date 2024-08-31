const NavLinks = () => {
  const links = [
    {
      label: "Play",
      target: "",
    },
    {
      label: "Support",
      target: "",
    },
    {
      label: "About",
      target: "",
    },
    {
      label: "How it Works?",
      target: "",
    },
  ];
  return (
    <ul className="list-none flex justify-center gap-20 items-center font-semibold uppercase tracking-tight">
      {links.map((link) => (
        <li className="cursor-pointer">{link.label}</li>
      ))}
    </ul>
  );
};

export default NavLinks;
