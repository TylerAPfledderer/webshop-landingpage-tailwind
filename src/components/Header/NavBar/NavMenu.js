import { faAngleDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavMenu = ({ toggle }) => {

    function lgInputFocus() {
        if (window.innerWidth < 1024) {
            return;
        }
        const input = document.querySelector("#js-search-input");
        document.querySelector("#js-search-icon").classList.add("toggled");
        input.classList.add("focused");
        input.focus();
    }

    return (
        <div
        id="js-mobile-nav"
        className="bg-gray opacity-0 -z-1 flex flex-col ite ms-center pt-3.25 transition-opacity duration-500 fixed h-full-vh w-full-vw justify-center lg:static lg:flex-row lg:justify-between lg:px-1.5 lg:py-2.5 lg:mx-auto lg:opacity-100 lg:w-full lg:h-auto lg:z-0 lg:p-0"
        >
        {/* Wrap for mobile view of the nav content */}
        <ul className="flex flex-col mb-2 items-center lg:flex-row lg:mb-0">
            <li className="nav-list-item relative lg:mr-2">
                <span
                    className="font-bold relative nav-list-link cursor-pointer"
                    onClick={() => toggle("#js-nav-sublist")}
                >
                    Products
                    <FontAwesomeIcon
                    icon={faAngleDown}
                    className="text-2xl leading-none absolute right-0 top-1/2 transform -translate-y-1/2 lg:-right-0"
                    />
                </span>
                <ul id="js-nav-sublist" className="shadow absolute z-50 left-1/2 transform -translate-x-1/2 bg-white text-center px-1.5 py-0.5 max-h-0 overflow-hidden opacity-0 duration-500 lg:left-4">
                    <li className="nav-sublist-item">Purses / Handbags</li>
                    <li className="nav-sublist-item">Shoes</li>
                    <li className="nav-sublist-item">Dresses</li>
                    <li className="nav-sublist-item">Suits</li>
                </ul>
            </li>
            <li className="nav-list-item">
            <a href="#top" className="nav-list-link">
                Collections
            </a>
            </li>
            <li className="nav-list-item">
            <a href="#top" className="nav-list-link">
                Gifts
            </a>
            </li>
            <li className="nav-list-item">
            <a href="#top" className="nav-list-link">
                Our Magazine
            </a>
            </li>
        </ul>
        <div className="flex flex-col items-center lg:flex-row">
            {/**
                 TODO: Add Maginifying icon for the input text field.
                * Icon is shown only on load. Then when clicked, the input field
                * appears and the icon moves into the field. 
                */}
            <div className="mb-1 relative lg:mb-0">
            {/* Search Input and icon */}
            <input id="js-search-input" type="text" className="lg:opacity-0 lg:-z-1 lg:transition-opacity" />
            <div id="js-search-icon" className="absolute right-0.5 top-1/2 transform -translate-y-1/2 lg:p-0.75 lg:transition-all lg:duration-300 lg:cursor-pointer" onClick={() => lgInputFocus()}>
                <FontAwesomeIcon
                    icon={faSearch}
                    className="transform lg:scale-125 lg:transition-transform lg:duration-300"
                />
            </div>
            </div>
            <button className="btn mb-1 lg:mb-0 lg:ml-1">Log In</button>
            <button className="btn btn--primary lg:ml-1">Sign Up</button>
        </div>
        </div>
    );
};

export default NavMenu;
