import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollArriba = () => {
  // useLocation avisa cada vez que la URL cambia
  const { pathname } = useLocation();

  useEffect(() => {
    // Cuanto cambia la ruta, se mueve el scroll al principio
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollArriba;