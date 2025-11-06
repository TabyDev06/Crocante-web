import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex justify-between font-lekton text-white w-full items-center px-15 mt-5 fixed">
      <div>
        <h1 className="text-5xl tracking-widest select-none">Crocante</h1>
      </div>
      <ul className="flex gap-28 text-xl text-center items-center">
        <li>
          <Link
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full select-none"
            to="/"
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full select-none"
            to="/menu"
          >
            Menú
          </Link>
        </li>
        <li>
          <Link
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full select-none"
            to="/about"
          >
            Acerca de
          </Link>
        </li>
        <li>
          <Link
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full select-none"
            to="/contact"
          >
            Contacto
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
