import Card from "./Card"
import cardImg1 from '../../../images/card-img1.png';
import cardImg2 from '../../../images/card-img2.png';

const CardSection = () => {
    const cardImages = [
        cardImg1,
        cardImg2
    ];

    return (
        <section className="bg-gray my-2">
            {
                cardImages.map((image, index) => {
                    return (
                        <Card 
                            image={image} 
                            key={index} 
                            uniqueContainerClasses={index !== 0 ? "mt-1.5" : ''} 
                        />
                    );
                })
            }
        </section>
    );
}

export default CardSection;