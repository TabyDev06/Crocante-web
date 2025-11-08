import Pedidos from "../Menu/Pedidos";
import Background from "../../assets/Background.png";

function Menu() {
    return (
        <div
            className="min-h-screen bg-cover bg-bottom bg-no-repeat flex flex-col"
            style={{ backgroundImage: `url(${Background})` }}
        >
            <div className="text-white">
                <h2 className="font-lekton text-4xl mx-20 pt-25">Nuestro Menú Completo</h2>
                <hr className="w-11/12 h-0.5 bg-white mx-auto mt-5 border-0" />
                <Pedidos />
            </div>
        </div>
    );
}

export default Menu;
