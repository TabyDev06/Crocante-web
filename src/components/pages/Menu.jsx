import Pedidos from "../Menu/Pedidos";
function Menu() {

    return (
        <>
            <div>
                <div className="text-white">
                    <h2 className="font-lekton text-4xl mx-20 pt-25">Nuestro Menú Completo</h2>
                    <hr className="w-11/12 h-0.5 bg-white mx-auto mt-5 border-0" />
                    <Pedidos />
                </div>
            </div>
        </>
    )
}

export default Menu;