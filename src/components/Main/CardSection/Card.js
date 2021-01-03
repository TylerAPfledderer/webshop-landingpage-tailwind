const Card = ({image, uniqueContainerClasses}) => {
    return (
        <div className={`bg-white ${uniqueContainerClasses}`}>
            <div className="p-1 text-center">
                <h2 className="text-2xl leading-10 mb-0.5">Ready for autumn collection</h2>
                <p className="mb-1">Treat yourself to some of our brand new autumn collection - all with the wonderful colours surrounding you.</p>
                <button className="btn btn--secondary">Purchase Now</button>    
            </div>
            <img src={image} alt="" className="w-full h-auto" />
        </div>
    );
}

export default Card;