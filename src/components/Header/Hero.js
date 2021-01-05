const Hero = () => {
    return (
        <div className="bg-hero-pattern bg-cover bg-no-repeat mt-3.25 w-full overflow-auto md:mt-0">
            <div className="bg-blue-base bg-opacity-50 text-white rounded-xl w-11/12 mx-auto my-5 p-1 text-center max-w-2xl md:px-4 md:py-3.5">
                <h1 className="text-4xl mb-1.5">The gift of happiness</h1>
                <p className="mb-1 md:mb-2.25">Show your gratitude with one of our git sets, large and small, specially designed to spread joy to someone you love.</p>
                <button className="btn btn--primary">Shop Now</button>
            </div>
        </div>
    );
}

export default Hero;