import { Link } from 'react-router-dom';

function Footer() {
  return (
  
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          
  
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse mb-4 sm:mb-0">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-7" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-black">
              web-react
            </span>
          </Link>

  
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
             <li>
               © 2026 <Link to="/" className="hover:text-blue-700 me-4 md:me-6">web-react™ . Todos los derechos reservados.</Link>
            </li>
            <li>
              <Link to="/" className="hover:text-blue-700 me-4 md:me-6">Inicio</Link>
            </li>
            <li>
              <Link to="/buscar" className="hover:text-blue-700 me-4 md:me-6">Buscar Juegos</Link>
            </li>
            <li>
              <a href="#" className="hover:text-blue-700 me-4 md:me-6">Política de Privacidad</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-700">Contacto</a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}

export default Footer;