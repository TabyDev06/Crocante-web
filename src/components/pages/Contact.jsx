function Contact() {

    return (
        <>
            <div>
                <div className="flex justify-between w-full mx-20 pt-25 font-lekton text-4xl">
                    <div>
                        <h2 className="text-white font-bold mt-5">Envianos un mensaje</h2>
                        <div className="flex flex-col my-5 gap-10">
                            <input
                                type="text"
                                className="bg-white rounded-lg text-lg p-1 pl-3 border-none w-100"
                                placeholder="Nombre" />
                            <input
                                type="email"
                                className="bg-white rounded-lg text-lg p-1 pl-3 border-none w-100"
                                placeholder="Correo Electronico" />
                            <input
                                type="Asunto"
                                className="bg-white rounded-lg text-lg p-1 pl-3 border-none w-100"
                                placeholder="Asunto" />
                            <textarea
                                className="bg-white rounded-lg text-lg px-3 pt-2 py-40 overflow-hidden w-100 text-left"
                                placeholder="Mensaje"
                            />
                            <button className="bg-yellow-300 rounded-lg text-2xl p-1 hover:bg-yellow-400 transition-colors duration-300 cursor-pointer">Enviar Mensaje</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;