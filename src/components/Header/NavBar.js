const NavBar = () => {
  const toggleMobileNav = () => {
    document.querySelector("#js-mobile-nav").classList.toggle("visible");
  };
  return (
    <nav className="md:p-1">
      <div className="fixed bg-opacity-40 bg-blue top-0 left-0 w-full px-1 py-0.25 z-50 md:hidden">
        {/* Mobile Bar with Hamburger Icon */}
        <button
          className="block w-2.75 ml-auto active:bg-blue active:bg-opacity-25 focused"
          onClick={() => toggleMobileNav()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="0.0"
            viewBox="0 0 44 44"
          >
            <path d="M10 12v4h24v-4zm0 8v4h24v-4zm0 8v4h24v-4z" />
          </svg>
        </button>
      </div>
      <div id="js-mobile-nav" className="nav-wrapper opacity-0 -z-1">
        {/* Wrap for mobile view of the nav content */}
        <ul className="flex flex-col mb-2 md:flex-row text-center">
          <li>
            <a href="#top" className="font-bold block p-0.5 relative nav-sub-list">
              Products
            </a>
            <ul className="hidden">
              <li>Purses / Handbags</li>
              <li>Shoes</li>
              <li>Dresses</li>
              <li>Suits</li>
            </ul>
          </li>
          <li>
            <a href="#top" className="block p-0.5">
              Collections
            </a>
          </li>
          <li>
            <a href="#top" className="block p-0.5">
              Gifts
            </a>
          </li>
          <li>
            <a href="#top" className="block p-0.5">
              Our Magazine
            </a>
          </li>
        </ul>
        <div className="flex flex-col md:flex-row">
          {/**
                     TODO: Add Maginifying icon for the input text field.
                    * Icon is shown only on load. Then when clicked, the input field
                    * appears and the icon moves into the field. 
                    */}
          <div className="mb-1">
            {/* Search Input and icon */}
            <input type="text" className="px-0.5 py-0.25" />
          </div>
          <button className="py-0.25 px-1.25 mb-1">Log In</button>
          <button className="bg-gradient-to-br from-pink to-peach py-0.25 px-1.25 rounded-full text-white">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
