const Card = ({image, uniqueContainerClasses}) => {
    return (
        <div className={`bg-white max-w-lg ${uniqueContainerClasses}`}>
            <div className="flex flex-col items-center text-center p-1 lg:py-3 lg:px-3.75">
                <h2 className="text-2xl leading-10 mb-0.5 max-w-xs">Ready for autumn collection</h2>
                <p className="mb-1 lg:mb-1.5">Treat yourself to some of our brand new autumn collection - all with the wonderful colours surrounding you.</p>
                <button className="btn btn--secondary">Purchase Now</button>    
            </div>
            <img src={image} alt="" className="w-full max-h-80" />
        </div>
    );
}

export default Card;