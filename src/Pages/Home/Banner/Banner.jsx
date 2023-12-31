import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./slider-animations.css";
import "./styleFile.css";

const content = [
    {
        title: "Head Chef",
        description:
        "Head Chef is the culinary leader in a restaurant or kitchen, responsible for menu creation, supervising staff, and ensuring food quality, innovation, and consistency",
        button: "Learn now",
        image: "https://i.ibb.co/3477dZM/finnair-kitchen-head-chefs-data-1.jpg"
    },
    {
        title: "Sushi Chef",
        description:
            "The skilled sushi chef artfully crafts exquisite rolls, nigiri, and sashimi, showcasing a deep understanding of precision, presentation, and fresh ingredients, delighting diners with every bite of their culinary mastery.",
        button: 'Read More',
        image: "https://i.ibb.co/85vJDtS/epicurrence-ITx-G2yay1ak-unsplash.jpg"
    },
    {
        title: "Noodle Chef",
        description:
            "Noodle Chef expertly crafts diverse and flavorful noodle dishes, infusing cultural influences and culinary mastery, delighting taste buds with every bowl of comforting and satisfying goodness.",
        button: 'Continue',
        image: "https://i.ibb.co/DQTPMdq/jorge-zapata-4n-Xkh-LCrk-Lo-unsplash.jpg"
    },
    {
        title: "Pizza Chef",
        description:
            "The pizza chef expertly kneads dough, layers flavorful sauces, and adds a harmonious blend of toppings. Their wood-fired creations satisfy taste buds with each slice, a true maestro of pizza perfection.",
        button: 'Learn More',
        image: "https://i.ibb.co/R4wBFV7/juan-manuel-nunez-mendez-Ca-LXVUf-D8g-unsplash.jpg"
    },
    {
        title: "Salad Chef",
        description:
            "Salad Chef expertly crafts an array of vibrant, healthy, and flavorful salads, incorporating a variety of fresh ingredients, dressings, and innovative combinations to tantalize taste buds.",
        button: "Discover",
        image: "https://i.ibb.co/tBxkYXv/ca-creative-8-Tlng54n8-Y-unsplash.jpg"
    },
    {
        title: "Garden Chef",
        description:
            "GardenChef cultivates and prepares fresh, sustainable produce, blending creativity with nature's bounty to create delightful and nutritious dishes.",
        button: "Read More",
        image: "https://i.ibb.co/vXJ1vh9/priscilla-du-preez-JCZ2p-E-Szpw-unsplash.jpg"
    },
];

const Banner = () => {
    return (
        <div className="mt-2 mb-4">
            <Slider className="slider-wrapper" autoplay={2000}>
                {content.map((item, index) => (
                    <div
                        key={index}
                        className="slider-content"
                        style={{ background: `url('${item.image}') no-repeat center center` }}
                    >
                        <div className="inner">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <button>{item.button}</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;



