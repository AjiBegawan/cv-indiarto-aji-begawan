import { Link } from "react-scroll";

const NavLink = ({ href, title }) => {
  return (
    <Link
      activeClass="active"
      to={href}
      spy={true}
      smooth={true}
      offset={-13}
      duration={500}
      className="hover:bg-[#64A9A5] hover:text-white text-lg"
    >
      {title}
    </Link>
  );
};

export default NavLink;
