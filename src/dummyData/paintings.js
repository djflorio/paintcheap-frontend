import monalisa from "../assets/img/paintings/monalisa.jpg";
import persistenceofmemory from "../assets/img/paintings/persistenceofmemory.jpg";
import thestarrynight from "../assets/img/paintings/thestarrynight.jpg";
import thescream from "../assets/img/paintings/thescream.jpg";
import girlwithapearlearring from "../assets/img/paintings/girlwithapearlearring.jpg";
import thornnecklace from "../assets/img/paintings/thornnecklace.jpg";
import birthofvenus from "../assets/img/paintings/birthofvenus.jpg";

const paintings = [
    {
        id: 1,
        name: "Mona Lisa",
        artist: "Leonardo da Vinci",
        retail_price: 612000000,
        price: 59.99,
        image: monalisa
    },
    {
        id: 2,
        name: "The Persistence of Memory",
        artist: "Salvador Dalí",
        retail_price: 300000000,
        price: 24.99,
        image: persistenceofmemory
    },
    {
        id: 3,
        name: "The Starry Night",
        artist: "Vincent van Gogh",
        retail_price: 120000000,
        price: 45.99,
        image: thestarrynight
    },
    {
        id: 4,
        name: "The Scream",
        artist: "Edvard Munch",
        retail_price: 230000000,
        price: 22.99,
        image: thescream
    },
    {
        id: 5,
        name: "Girl with a Pearl Earring",
        artist: "Johannes Vermeer",
        retail_price: 160000000,
        price: 75.99,
        image: girlwithapearlearring
    },
    {
        id: 6,
        name: "Self-Portrait with Thorn Necklace and Hummingbird",
        artist: "Frida Kahlo",
        retail_price: 200000000,
        price: 45.99,
        image: thornnecklace
    },
    {
        id: 7,
        name: "The Birth of Venus",
        artist: "Sandro Botticelli",
        retail_price: 110000000,
        price: 15.99,
        image: birthofvenus
    }
]

export default paintings;