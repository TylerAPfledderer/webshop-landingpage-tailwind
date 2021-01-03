import Hero from "./Hero";
import NavBar from "./NavBar";

const Header = () => {
    return (
        <header className="overflow-auto">
            <NavBar />
            <Hero />
        </header>
    );
}

export default Header;