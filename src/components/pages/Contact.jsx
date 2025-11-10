import Background from "../../assets/Background.png";
import Instagram from "../../assets/icons/Instagram.png";
import Facebook from "../../assets/icons/facebook.png";
import Youtube from "../../assets/icons/youtube.png";

function Contact() {

    return (
        <>
            <div
                className="min-h-screen bg-cover bg-bottom bg-no-repeat flex flex-col"
                style={{ backgroundImage: `url(${Background})` }}>
                <div className="text-white">
                    <h2 className="font-lekton text-4xl mx-20 pt-25">Queremos Escucharte</h2>
                    <hr className="w-11/12 h-0.5 bg-white mx-auto mt-5 border-0" />
                </div>
                {/*   CONTACT CONTENT   */}
                <div className="">
                    <div className="flex text-white justify-between mx-30">
                        <div className="flex flex-col">
                            <h3 className="font-lekton text-3xl my-5 font-bold">Envianos un mensaje</h3>
                            <div className=" flex flex-col w-md gap-6 text-black">
                                <input type="text" className="flex justify-center items-center bg-white rounded-lg py-2 px-3 focus:outline-0" placeholder="Nombre" />
                                <input type="text" className="flex justify-center items-center bg-white rounded-lg py-2 px-3 focus:outline-0" placeholder="Correo Electronico" />
                                <input type="text" className="flex justify-center items-center bg-white rounded-lg py-2 px-3 focus:outline-0" placeholder="Asunto" />
                                <textarea className="flex justify-center items-center bg-white rounded-lg py-2 px-3 h-35 resize-none focus:outline-0" placeholder="Mensaje"></textarea>
                                <button className="bg-yellow-300 font-lekton font-bold py-3 rounded-2xl cursor-pointer text-xl hover:bg-amber-400 duration-400">Enviar Mensaje</button>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-lekton text-3xl my-5 font-bold">Siguenos en Nuestras Redes Sociales</h3>
                            <div className=" flex flex-col w-md gap-6 text-black">
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-5 cursor-pointer hover:scale-105 duration-300 p-3">
                                        <img src={Instagram} alt="Instagram" className="w-10" />
                                        <h3 className="text-white text-2xl font-lekton">Instagram</h3>
                                    </div>
                                    <div className="flex items-center gap-5 cursor-pointer hover:scale-105 duration-300 p-3">
                                        <img src={Facebook} alt="Instagram" className="w-10" />
                                        <h3 className="text-white text-2xl font-lekton">Facebook</h3>
                                    </div>
                                    <div className="flex items-center gap-5 cursor-pointer hover:scale-105 duration-300 p-3">
                                        <img src={Youtube} alt="Instagram" className="w-10" />
                                        <h3 className="text-white text-2xl font-lekton">Youtube</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5 font-lekton text-xl mt-5 font-bold" >
                                <div className="flex gap-5">
                                    <h3>Telefono: </h3>
                                    <h3>+51 928 507 417</h3>
                                </div>
                                <div className="flex gap-5">
                                    <h3>Ubicacion: </h3>
                                    <h3>Av. 28 de Julio 123, Cercado de Lima, Lima, Perú</h3>
                                </div>
                                <div className="flex gap-5">
                                    <h3>Horario: </h3>
                                    <h3>Mar-Dom: 11:00 - 23:00</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;