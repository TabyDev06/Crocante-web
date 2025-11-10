import Background from "../../assets/Background.png";

function AboutUs() {
    return (
        <div
            className="min-h-screen bg-cover bg-bottom bg-no-repeat flex flex-col"
            style={{ backgroundImage: `url(${Background})` }}
        >
            <div className="text-white">
                <h2 className="font-lekton text-4xl mx-20 pt-25">Nuestra Historia & Pasión</h2>
                <hr className="w-11/12 h-0.5 bg-white mx-auto mt-5 border-0" />
            </div>

            <div className="flex gap-10 mx-20 my-10">
                <img
                    src="src/assets/AcercaDe.jpg"
                    alt="Trabajador"
                    className="rounded-2xl object-cover"
                />
                <p className="flex justify-center items-center text-white font-lekton text-lg tracking-wider">
                    CROCANTE nació como un pequeño emprendimiento familiar con un objetivo muy claro:
                    compartir buena comida y momentos especiales alrededor de la mesa. Desde el primer día,
                    nos propusimos que cada plato tuviera un sabor auténtico, preparado con cariño y con
                    ese toque casero que hace que cada bocado se sienta único y memorable.
                    <br /><br />
                    Nuestro restaurante está pensado para quienes disfrutan de comer bien, sin prisas, en
                    un lugar cómodo, moderno y acogedor. En CROCANTE combinamos tradición y frescura,
                    ofreciendo platos elaborados con ingredientes de calidad y atención personalizada, para
                    que cada visita se convierta en una experiencia agradable y llena de sabor.
                    <br /><br />
                    Nos encanta recibir a familias, amigos y jóvenes que buscan un espacio relajado donde
                    puedan compartir, reír y disfrutar juntos. Cada detalle importa: desde el pan recién
                    tostado hasta la carne jugosa y crujiente. Queremos que nuestros clientes sientan que
                    cada plato está hecho con dedicación, pensado para despertar emociones y crear recuerdos.
                </p>
            </div>

            <hr className="w-11/12 h-0.5 bg-white mx-auto border-0" />
        </div>
    );
}

export default AboutUs;
