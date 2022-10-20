import React from "react";

import { Carousel } from "react-bootstrap";

const Carrusel = () => {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <button className='d-none'></button>
        <img alt=""
          className="d-block w-100"
          src="https://i.postimg.cc/mDbJwxbp/Mesa-de-trabajo-1-Fondo1.png"
        />
      </Carousel.Item>
      <Carousel.Item>
      <button className='d-none'></button>
        <img alt=""
          className="d-block w-100"
          src="https://i.postimg.cc/qv3L6mdt/Mesa-de-trabajo-1-Fondo3.png"
        />
      </Carousel.Item>
      <Carousel.Item>
      <a className='d-none'></a>
      <span className='d-none'></span>
        <img alt=""
          className="d-block w-100"
          src="https://i.postimg.cc/wv6cPgRJ/Mesa-de-trabajo-1-Fondo2.png"
        />
      </Carousel.Item>
    </Carousel>
  );
};
export default Carrusel;
