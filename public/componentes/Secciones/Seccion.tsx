"use client";
import SeccionStyle from "./Seccion.styles";
interface Props {
  Titulo: string;
  Secciones: {}
}

export const Seccion = ({
  Titulo,
  Secciones,
}: Props) => {
  const listItems = Object.keys(Secciones).map((sec:string) =>
  <li><a href="">{sec}</a></li>
)
  return (
    <SeccionStyle>
      <div className="Seccion">
        <h1>{Titulo}</h1>
        <ul>{listItems}</ul>
      </div>
    </SeccionStyle>
  );
};
