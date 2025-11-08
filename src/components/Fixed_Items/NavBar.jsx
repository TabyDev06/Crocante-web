import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex justify-between font-lekto w-full items-center px-15 fixed bg- py-5">
      <div>
        <h1 className="text-5xl -tracking-tighter select-none text-white">Crocante</h1>
      </div>
      {/* ==== Quick Links ====*/}
      <ul className="flex gap-28 text-xl text-center items-center">
        <li><Link
          className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0  text-white after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full select-none"
          to="/">Inicio</Link>
        </li>
        <li><Link
          className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0  text-white after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full select-none"
          to="/menu">Menú</Link>
        </li>
        <li><Link
          className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0  text-white after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full select-none"
          to="/about">Acerca de</Link>
        </li>
        <li><Link
          className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0  text-white after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full select-none"
          to="/contact">Contacto</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
