import { Card } from "../public/componentes/cards/cards";
import {Seccion} from "../public/componentes/Secciones/Seccion"
export default function Home() {
  const Qs = ["Quiene sosmos", "Nuestra historia", "Sostenibilidad"] 
  const Cc = ["Linea Ética", "servicio al cliente"]
  const Mas = ["Portal Proveedores", "Registro de predios", "Compra desde el exterior", "AMARILO Panamá"]
  const Noti = ["Revista Amarilo", "Blog"]
  const Lega = ["Política de privacidad", "Política SSTA", "Manual SSTA", "Reglamentos y protocolos"] 
  return (
    <main className="flex min-h-screen flex-col items-center">
      <header className="flex items-center flex-col">
        <nav className="flex items-center basis-full">
          <a
            className="inline-flex basis-2/12 justify-center items-center"
            href="#"
          >
            {" "}
            <img src="./favicon.ico" alt="" />{" "}
          </a>
          <ul className=" flex basis-11/12 justify-center">
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Nosotros</a>
            </li>
            <li>
              <a href="#">Proyectos</a>
            </li>
            <li>
              <a href="#">Herramientas</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="flex flex-col items-center">
        <button>
          {" "}
          <a href="">PROYECTOS EN MEDELLÍN</a>
        </button>
        <img src="./imagenes/imgmed.jpeg" alt="" />
      </div>
      <h1 className="title_proyectos">PROYECTOS</h1>
      <div className="proyectos">
        <Card
          ubicacion="Bogota"
          nombre_poryecto="Verona"
          description="Redescubre la vida urbana con Verona, un proyecto inmobiliario en Bogotá que combina la esencia de la ciudad con el encanto moderno."
          imageUrl="https://media1.amarilo.com.co/website/s3fs-public/proyectos/2023-12/render-verona-fachada.jpg"
        />
        <Card
          ubicacion="Medellin"
          nombre_poryecto="Guayacanes - Jardines del Río"
          description="Estás a punto de descubrir uno de los proyectos inmobiliarios más exclusivos en Medellín, diseñado por CASA "
          imageUrl="https://media1.amarilo.com.co/website/s3fs-public/proyectos/2023-11/render-proyecto-saman-lobby.webp"
        />
        <Card
          ubicacion="Medellin"
          nombre_poryecto="Samán - Jardines del Río"
          description="Samán se presenta como el espacio perfecto para aquellos que desean estrenar vivienda en una de las zonas más vibrantes de la ciudad."
          imageUrl="https://media1.amarilo.com.co/website/s3fs-public/proyectos/2023-11/render-proyecto-guayacanes-1.webp"
        />
      </div>
      
      <footer>
        <div className="flex flex-col items-center basis-full">
          <div className="Secciones">
            <Seccion Titulo="Quienes Somos" Secciones={Qs}></Seccion>
            <Seccion Titulo="Canales de contacto" Secciones={Cc}></Seccion>
            <Seccion Titulo="Mas Amarilo" Secciones={Mas}></Seccion>
            <Seccion Titulo="Noticias" Secciones={Noti}></Seccion>
            <Seccion Titulo="Legales" Secciones={Lega}></Seccion>
          </div>
        </div>
      </footer>
    </main>
  );
}
