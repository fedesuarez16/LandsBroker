import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { person1, person2, person3 } from "../assets";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => (
  <Section className="overflow-hidden bg-custom" id="roadmap">
    <div className="container text-center mt-0 lg:mt-10 text-black">
      <Heading title="Management Lands" />
      
      <div className="lg:grid lg:grid-cols-2 mx-auto font-code font-thin">
        {/* Primer bloque */}
        <div className="hidden lg:flex mx-auto h-[180px] bg-gris2 mb-40px w-[450px] gap-4 items-center justify-center">
          <div>
            <img src={person1} alt="Person 1" className="w-44 relative right-9 h-44 object-contain" />
          </div>
          <div className="text-center">
            <h5 className="text-xl text-white font-bold mb-1">Gastón Marengo</h5>
            <p className="text-sm text-white">Jefe Operativo</p>
          </div>
        </div>
        {/* Segundo bloque */}
        <div className="hidden lg:flex mx-auto h-[180px] bg-gris2 mb-40px w-[450px] gap-4 items-center justify-center">
          <div>
            <img src={person2} alt="Person 2" className="w-44 relative right-9 h-44 object-contain" />
          </div>
          <div className="text-center">
            <h5 className="text-xl text-white font-bold mb-1">Gastón Marengo</h5>
            <p className="text-sm text-white">Jefe Operativo</p>
          </div>
        </div>

        {/* Bloques para dispositivos móviles */}
        <div className="lg:hidden mx-auto mb-40px">
          <div className="flex flex-col items-center bg-gris2 w-48 mx-auto justify-center mb-8">
            <img src={person1} alt="Person 1" className="w-44 mt-1 h-44 mb-2 object-contain" />
            <div className="text-center  p-4">
              <h5 className="text-xl text-white font-bold mb-1">Gastón Marengo</h5>
              <p className="text-sm text-white">Jefe Operativo</p>
            </div>
          </div>
          <div className="flex flex-col items-center  bg-gris2 w-48 mx-auto  justify-center">
            <img src={person2} alt="Person 2" className="w-44 mt-1 h-44 mb-2 object-contain" />
            <div className="text-center p-4">
              <h5 className="text-xl text-white font-bold mb-1">Sebastián Cancela</h5>
              <p className="text-sm text-white">Socio y Director General</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Frase centrada */}
      <p className="text-center  mt-20 text-2xl lg:text-5xl p-14 font-light">Contamos con más de <b>20 años de Experiencia</b> en la <b>Industria Financiera</b> y de <b>Seguros</b></p>
    </div>

    
    <div className="bg-bordo mx-auto mb-40 lg:mx-44 mt-20 rounded-full p-4 w-[80%] lg:w-auto">
        <div className="flex flex-row items-center p-4  ">
          <p className="text-white mx-auto text-[14px] leading-0 lg:text-2xl font-bold text-center">Trabajamos con las Compañías Líderes del Mercado, garantizando Respuesta y Solvencia Financiera.</p>
        </div>
      </div>
  </Section>
);

export default Roadmap;
