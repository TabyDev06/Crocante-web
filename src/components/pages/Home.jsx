import { Link } from "react-router-dom";
import fondo from "../../assets/Background.jpg";

function Home() {
    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
            style={{ backgroundImage: `url(${fondo})` }}
        >
            <div className="flex flex-col justify-end items-end m-20 mt-40">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-white text-5xl font-lekton text-center w-150 select-none tracking-wider animate-fadeIn">
                        Un sabor diferente con cada bocado
                    </h2>

                    <Link to="/about">
                        <button className="bg-amber-300 font-lekton px-10 py-2 rounded-xl cursor-pointer font-bold text-xl mt-10 hover:bg-yellow-500 transition-colors duration-300 animate-fadeIn">
                            Ver más
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
