import { useState } from "react";

function Pedidos() {
    const Categories = ["Hamburguesas", "Pizzas"];
    const [currentCategory, setCurrentCategory] = useState(0);

    // === IMÁGENES DE PLATOS ===
    const image_plate = [
        // Hamburguesas
        { name: "Clasica", path: "https://i.pinimg.com/736x/e1/c2/4c/e1c24cf335a87ccbec1ca421f80f015d.jpg" },
        { name: "Doble Queso", path: "https://i.pinimg.com/1200x/63/12/a0/6312a0af7e8fd9a578e213a54e95ef6d.jpg" },
        { name: "Pollo Crispy", path: "https://i.pinimg.com/736x/c9/c5/01/c9c5013a47c78dde12d22a8659cdb945.jpg" },
        { name: "Veggie", path: "https://i.pinimg.com/1200x/27/ab/5e/27ab5edd0885b823023a2b5ba47a1f04.jpg" },
        { name: "Especial CROCANTE", path: "https://i.pinimg.com/1200x/ee/a8/ed/eea8ed3ce58d342694b5c7b0425fdbcb.jpg" },

        // Pizzas
        { name: "Margarita", path: "https://i.pinimg.com/1200x/9d/2f/62/9d2f62b46c1a23bd26df0d455c3a388f.jpg" },
        { name: "Pepperoni", path: "https://i.pinimg.com/1200x/af/ce/5b/afce5bc03baee84c15830afcb740a3f7.jpg" },
        { name: "Hawaiana", path: "https://i.pinimg.com/1200x/9d/b7/50/9db750a4eafcf1d1fb551520018c8bf6.jpg" },
        { name: "Cuatro Quesos", path: "https://i.pinimg.com/1200x/16/74/ab/1674abcbb08250bd3b19ece2314ab401.jpg" },
        { name: "Pollo BBQ", path: "https://i.pinimg.com/1200x/6f/37/68/6f376828e48efcbbe401d68a5f81b823.jpg" },
    ];

    // === PLATOS POR CATEGORÍA ===
    const data = {
        Hamburguesas: [
            { name: "Clasica", price: "S/12.00" },
            { name: "Doble Queso", price: "S/15.00" },
            { name: "Pollo Crispy", price: "S/14.00" },
            { name: "Veggie", price: "S/13.00" },
            { name: "Especial CROCANTE", price: "S/20.00" },
        ],
        Pizzas: [
            { name: "Margarita", price: "S/22.00" },
            { name: "Pepperoni", price: "S/25.00" },
            { name: "Hawaiana", price: "S/23.00" },
            { name: "Cuatro Quesos", price: "S/26.00" },
            { name: "Pollo BBQ", price: "S/28.00" },
        ],
    };

    // === LÓGICA DEL CARRUSEL DE CATEGORÍAS ===
    const nextCategory = () => setCurrentCategory((prev) => (prev + 1) % Categories.length);
    const prevCategory = () => setCurrentCategory((prev) => (prev - 1 + Categories.length) % Categories.length);

    // === LÓGICA DE PLATOS ===
    const [selectedPlate, setSelectedPlate] = useState(null);
    const [hoverPlate, setHoverPlate] = useState(null);

    const currentCategoryName = Categories[currentCategory];
    const currentMenu = data[currentCategoryName];
    const currentPlate = hoverPlate || selectedPlate || currentMenu[0].name;
    const currentImage = image_plate.find((item) => item.name === currentPlate)?.path;

    return (
        <div className="text-white font-lekton">
            {/* === CARRUSEL DE CATEGORÍAS === */}
            <div className="flex justify-between items-center mx-20 mt-2">
                <button
                    onClick={prevCategory}
                    className="w-0 h-0 border-l-20 border-r-20 border-b-30 border-l-transparent border-r-transparent border-b-amber-300 -rotate-90 cursor-pointer transition-colors duration-300 hover:border-b-amber-400"
                ></button>

                <h3 className="text-4xl font-bold text-center m-5 transition-all duration-500">{currentCategoryName}</h3>

                <button
                    onClick={nextCategory}
                    className="w-0 h-0 border-l-20 border-r-20 border-b-30 border-l-transparent border-r-transparent border-b-amber-300 rotate-90 cursor-pointer transition-colors duration-300 hover:border-b-amber-400"
                ></button>
            </div>

            {/* === LISTA DE PLATOS === */}
            <div className="flex justify-between mx-30 mt-5">
                <ul className="flex flex-col w-130 list-none gap-10">
                    {currentMenu.map((plate) => (
                        <button
                            key={plate.name}
                            className={`cursor-pointer font-lekton text-2xl flex justify-between transition-colors duration-200 ${selectedPlate === plate.name ? "text-amber-400" : "hover:text-amber-300"
                                }`}
                            onMouseEnter={() => setHoverPlate(plate.name)}
                            onMouseLeave={() => setHoverPlate(null)}
                            onClick={() => setSelectedPlate(plate.name)}
                        >
                            <span>{plate.name}</span>
                            <span>{plate.price}</span>
                        </button>
                    ))}
                </ul>

                <div className="flex flex-col justify-center items-center">
                    <img
                        src={currentImage}
                        alt={currentPlate}
                        className="rounded-full size-90 mr-20 hover:scale-110 duration-300 cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
}

export default Pedidos;