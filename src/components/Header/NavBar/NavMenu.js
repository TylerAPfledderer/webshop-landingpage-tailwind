import { faAngleDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const NavMenu = ({toggle}) => {
    return (
    <div id="js-mobile-nav" className="nav-wrapper bg-gray opacity-0 -z-1">{/* Wrap for mobile view of the nav content */}
        <ul className="nav-list flex flex-col mb-2 md:flex-row text-center">
            <li>
                <span className="font-bold relative nav-list__link nav-list__sub-header" onClick={() => toggle(".nav-sublist")}>
                    Products
                    <FontAwesomeIcon icon={faAngleDown} className="text-2xl leading-none absolute right-0 top-1/2 transform -translate-y-1/2" />
                </span>
                <ul className="nav-sublist shadow absolute z-50 left-1/2 transform -translate-x-1/2 bg-white max-h-0 overflow-hidden transition-max-h duration-500">
                    <li className="nav-sublist__item">Purses / Handbags</li>
                    <li className="nav-sublist__item">Shoes</li>
                    <li className="nav-sublist__item">Dresses</li>
                    <li className="nav-sublist__item">Suits</li>
                </ul>
            </li>
            <li>
                <a href="#top" className="nav-list__link">
                    Collections
                </a>
            </li>
            <li>
                <a href="#top" className="nav-list__link">
                    Gifts
                </a>
            </li>
            <li>
                <a href="#top" className="nav-list__link">
                    Our Magazine
                </a>
            </li>
        </ul>
        <div className="flex flex-col items-center md:flex-row">
            {/**
              TODO: Add Maginifying icon for the input text field.
              * Icon is shown only on load. Then when clicked, the input field
              * appears and the icon moves into the field. 
              */}
            <div className="mb-1 relative">
                {/* Search Input and icon */}
                <input type="text" />
                <FontAwesomeIcon icon={faSearch} className="absolute right-0.5 top-1/2 transform -translate-y-1/2" />
            </div>
            <button className="py-0.25 px-1.25 mb-1">Log In</button>
            <button className="btn btn--primary">
                Sign Up
            </button>
        </div>
    </div>
    );
}

export default NavMenu;