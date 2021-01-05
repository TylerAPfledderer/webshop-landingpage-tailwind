import Card from "./Card"
import cardImg1 from '../../../images/card-img1.png';
import cardImg2 from '../../../images/card-img2.png';

const CardSection = () => {
    const cardImages = [
        cardImg1,
        cardImg2
    ];

    return (
        <section className="bg-gray pt-2 flex flex-col items-center space-y-2 lg:flex-row lg:py-7 lg:justify-center lg:space-y-0 lg:space-x-1.25">
            {
                cardImages.map((image, index) => {
                    return (
                        <Card 
                            image={image} 
                            key={index}
                        />
                    );
                })
            }
        </section>
    );
}

export default CardSection;