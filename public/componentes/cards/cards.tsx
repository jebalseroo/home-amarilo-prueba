"use client";
import CardsStyle from "./cards.styles";
interface Props {
  ubicacion: string;
  nombre_poryecto: string;
  description?: string;
  imageUrl?: string;
}

import { SiGooglemaps } from "react-icons/si";
export const Card = ({
  ubicacion,
  nombre_poryecto,
  description,
  imageUrl,
}: Props) => {
  return (
    <CardsStyle>
      <div className="card">
        {Boolean(imageUrl) && (
          <img className="image-position" src={imageUrl} />
        )}
        <div className="informacion">
          <div className="ubicacion">
            <h1 className="ciudad">{ubicacion}</h1>
            <SiGooglemaps className="logo" />
          </div>
          <button>Saber mas</button>
          <h2 className="nombre_poryecto">{nombre_poryecto}</h2>

          {Boolean(description) && <p className="description">{description}</p>}
        </div>
      </div>
    </CardsStyle>
  );
};
