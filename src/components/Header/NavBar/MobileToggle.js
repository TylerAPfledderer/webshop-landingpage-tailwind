const MobileToggle = ({toggle}) => {

    return (
        <div className="bg-gray fixed top-0 left-0 w-full px-1 py-0.25 z-50 md:hidden">
            {/* Mobile Bar with Hamburger Icon */}
            <button
                className="block bg-blue-light bg-opacity-10 shadow-inner border-solid border-2 border-blue-base border-opacity-10 rounded-md w-2.75 ml-auto active:bg-blue-base active:bg-opacity-25 custom-focus"
                onClick={() => toggle("#js-mobile-nav")}
            >
                <svg xmlns="http://www.w3.org/2000/svg" version="0.0" viewBox="0 0 44 44">
                    <path d="M10 12v4h24v-4zm0 8v4h24v-4zm0 8v4h24v-4z" />
                </svg>
            </button>
        </div>
    );
}

export default MobileToggle;