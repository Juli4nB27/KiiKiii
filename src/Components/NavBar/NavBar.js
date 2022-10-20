import gatoDeLaSuerte from "./assets/gatoDeLaSuerte.png";

import CarritoNavBar from "../CartWidget/CarritoNavBar";

import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <header className="App-header">
      <nav className="nav">
        <div className="logo-namePag">
          <Link to="/" className="navHeadNew">
            <img alt="" className="imgLogo" src={gatoDeLaSuerte} />
          </Link>
          <Link to="/" className="namPag">
            <h1 className="namPag">KIIKII</h1>
          </Link>
        </div>
        <ul className="navHead">
          <Link to="/" className="navHeadNew">
            <li>new</li>
          </Link>
          <Link to='/category/1' className="navHeadRemeras">
            <li>hoodies</li>
          </Link>
          <Link to='/category/3' className="navHeadPantalones">
            <li>jeans</li>
          </Link>
          <Link to='/category/2' className="navHeadPantalones">
            <li>remeras</li>
          </Link>
          <Link to="/cart">
            <CarritoNavBar />
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
