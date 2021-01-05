import MobileToggle from "./MobileToggle";
import NavMenu from "./NavMenu";

import './NavBar.css';

const NavBar = () => {
  /**
     * Function to toggle visibility of the Nav menu on mobile screens
     * @param {HTMLElement} - Element that will change visibility.
     */
  const navToggle = toggledElement => {
    document.querySelector(toggledElement).classList.toggle("show");
  };
  return (
    <nav>
      <MobileToggle toggle={navToggle}/>
      <NavMenu toggle={navToggle}/>
    </nav>
  );
};

export default NavBar;
