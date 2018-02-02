import monalisa from "../assets/img/paintings/monalisa.jpg";
import persistenceofmemory from "../assets/img/paintings/persistenceofmemory.jpg";
import thestarrynight from "../assets/img/paintings/thestarrynight.jpg";
import thescream from "../assets/img/paintings/thescream.jpg";
import girlwithapearlearring from "../assets/img/paintings/girlwithapearlearring.jpg";
import thornnecklace from "../assets/img/paintings/thornnecklace.jpg";
import birthofvenus from "../assets/img/paintings/birthofvenus.jpg";
import afriendinneed from "../assets/img/paintings/afriendinneed.jpg";
import convergence from "../assets/img/paintings/convergence.jpg";

const paintings = [
    {
        id: 1,
        name: "Mona Lisa",
        artist: "Leonardo da Vinci",
        retail_price: 612000000,
        price: 600999999,
        image: monalisa,
        inCart: false
    },
    {
        id: 2,
        name: "The Persistence of Memory",
        artist: "Salvador Dalí",
        retail_price: 300000000,
        price: 299999999,
        image: persistenceofmemory,
        inCart: false
    },
    {
        id: 3,
        name: "The Starry Night",
        artist: "Vincent van Gogh",
        retail_price: 120000000,
        price: 119999999,
        image: thestarrynight,
        inCart: false
    },
    {
        id: 4,
        name: "The Scream",
        artist: "Edvard Munch",
        retail_price: 230000000,
        price: 200999999,
        image: thescream,
        inCart: false
    },
    {
        id: 5,
        name: "Girl with a Pearl Earring",
        artist: "Johannes Vermeer",
        retail_price: 160000000,
        price: 150000000,
        image: girlwithapearlearring,
        inCart: false
    },
    {
        id: 6,
        name: "Self-Portrait with Thorn Necklace and Hummingbird",
        artist: "Frida Kahlo",
        retail_price: 200000000,
        price: 190000000,
        image: thornnecklace,
        inCart: false
    },
    {
        id: 7,
        name: "The Birth of Venus",
        artist: "Sandro Botticelli",
        retail_price: 110000000,
        price: 109999999,
        image: birthofvenus,
        inCart: false
    },
    {
        id: 8,
        name: "A Friend in Need",
        artist: "Cassius Marcellus Coolidge",
        retail_price: 700000,
        price: 699999,
        image: afriendinneed,
        inCart: false
    },
    {
        id: 9,
        name: "Convergence",
        artist: "Jackson Pollock",
        retail_price: 140000000,
        price: 130000000,
        image: convergence,
        inCart: false
    }
]

export default paintings;