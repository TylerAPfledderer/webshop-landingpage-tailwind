const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="#top" className="font-bold">Products</a>
                    <ul className="hidden">
                        <li>Purses / Handbags</li>
                        <li>Shoes</li>
                        <li>Dresses</li>
                        <li>Suits</li>
                    </ul>
                </li>
                <li>
                    <a href="#top">Collections</a>
                </li>
                <li>
                    <a href="#top">Gifts</a>
                </li>
                <li>
                    <a href="#top">Our Magazine</a>
                </li>
            </ul>
            <div>
                {/**
                 TODO: Add Maginifying icon for the input text field.
                 * Icon is shown only on load. Then when clicked, the input field
                 * appears and the icon moves into the field. 
                 */}
                <input type="text" />
                <button>Log In</button>
                <button className="bg-gradient-to-br from-pink to-peach py-2 px-5 rounded-full text-white">Sign Up</button>
            </div>
        </nav>
    );
}

export default NavBar;