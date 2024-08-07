import { check, auto, casa, bici, foco, perro, Raices, negocios, entretenimiento } from "../assets";
import Heading from "./Heading";
import Section from "./Section";

const Benefits = () => {
  return (
    <section className="bg-custom">
      {/* Div vacío para anclaje preciso */}
      <div id="features" className="relative -top-40"></div>
      <div className="container mt-10 lg:mt-0 text-center text-black relative z-2">
        <h3 id="lineas" className="text-5xl lg:text-6xl lg:mb-8 text-center text-yellow-950">Resguardo Patrimonial</h3>
        <div className="lg:gap-10 items-center lg:px-32">
          <div className="block mx-auto relative t p-0.5 bg-no-repeat bg-[length:100%_100%]">
            <div className="relative z-2 flex flex-col min-h-[22rem] lg:items-center p-[2.4rem]">
              <h5 className="h5 lg:text-5xl mx-auto lg:w-[440px] mb-14 lg:mb-10 py-2 px-2 text-white bg-verde">Líneas personales</h5>
              <div className="flex justify-center items-center mb-14">
                <img src={casa} alt="Imagen 1" className="w-22 mx-1" />
              </div>
              {/* items */}
              <div className="grid font-code lg:ml-16 lg:w-[52rem] text-start items-start lg:grid-cols-2 gap-2 mb-2">
                <div className="flex items-center text-start">
                  <p className="body-2 font-semibold text-brown">· Automotores</p>
                </div>
                <div className="flex items-center">
                  <p className="body-2 font-semibold text-brown">· Accidentes Personales</p>
                </div>
                <div className="flex items-center text-start">
                  <p className="body-2 font-semibold text-brown">· Moto</p>
                </div>
                <div className="flex items-center">
                  <p className="body-2 font-semibold text-brown">· Responsabilidad Civil y Mala Praxis Profesional </p>
                </div>
                <div className="flex items-center">
                  <p className="body-2 font-semibold text-brown">· Embarcaciones </p>
                </div>
                <div className="flex items-center">
                  <p className="body-2 font-semibold text-brown">· Vida y Salud </p>
                </div>
                <div className="flex items-center">
                  <p className="body-2 font-semibold text-brown">· Hogar </p>
                </div>
                <div className="flex items-start">
                  <p className="body-2 font-semibold text-brown">· Planes De Pensión y Jubilación </p>
                </div>
                <div className="flex items-center">
                  <p className="body-2 font-semibold text-brown">· Movilidad <span className="font-thin hidden lg:inline">(Bicicletas, monopatín, etc)</span></p>
                </div>
                <div className="flex items-center ">
                  <p className="body-2 font-semibold text-brown">· Asistencia al Viajero</p>
                </div>
                <div className="flex items-start">
                  <p className="body-2 font-semibold text-brown">· Equipos electrónicos portátiles <span className="font-thin hidden lg:inline">(Computadoras, Celulares, tablets, otros.)</span></p>
                </div>
              </div>

              <div
                onClick={() => {
                  const contactoElement = document.getElementById('contacto');
                  if (contactoElement) {
                    contactoElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="flex mr-[39.5rem] cursor-pointer bg-bordo w-32 py-3 rounded-md items-center mt-2"
              >
                <p id="negocios" className="font-code text-[15px] mx-auto font-semibold text-white tracking-wider">
                  Contactate
                </p>
              </div>

              <h5 className="h5 lg:text-5xl lg:w-[490px] py-2 px-2 mb-10 text-center mx-auto mt-24 text-white bg-brown">Negocios y Empresas</h5>
              <div className="flex justify-center items-center mb-10">
                <img src={negocios} alt="Imagen 1" className="w-22 mx-1" />
              </div>

              {/* items 2 */}
              <div className="grid font-code lg:pl-[15rem] lg:w-[76rem] text-start items-center lg:grid-cols-2 gap-2 mb-2">
                <div className="flex items-center">
                  <p className="body-2 font-semibold text-brown">· Incendio</p>
                </div>
                <div className="flex items-center">
                  <p className="body-2 font-semibold text-brown">· Cauciones </p>
                </div>
                <div className="flex items-center">
                  <p className="body-2 font-semibold text-brown">· Flota de Vehículos</p>
                </div>
                <div className="flex items-center">
                  <p className="body-2 font-semibold text-brown">· Integral de Comercio </p>
                </div>
                <div className="flex items-center">
                  <p className="body-2 font-semibold text-brown">·Transporte de Mercaderías </p>
                </div>
                <div className="flex items-center">
                  <p className="body-2 font-semibold text-brown">· Integral de Consorcio </p>
                </div>
                <div className="flex items-center">
                  <p className="body-2 font-semibold text-brown">· Responsabilidad Civil Comprensiva y Producto</p>
                </div>
                <div className="flex items-center">
                  <p className="body-2 font-semibold text-brown">· ART</p>
                </div>
                <div className="flex items-center">
                  <p className="body-2 font-semibold text-brown">· Responsabilidad Civil Directores y Operaciones</p>
                </div>
                <div className="flex items-center">
                  <p className="body-2 font-semibold text-brown">· Accidentes Personales </p>
                </div>
                <div className="flex items-center">
                  <p className="body-2 font-semibold text-brown">· Todo Riesgo Operativo</p>
                </div>
                <div className="flex items-center">
                  <p className="body-2 font-semibold text-brown">· Vida Ley Contrato de Trabajo </p>
                </div>
                <div className="flex items-center">
                  <p className="body-2 font-semibold text-brown">· Todo Riesgo Construcción y Montaje </p>
                </div>
                <div className="flex items-center">
                  <p className="body-2 font-semibold text-brown">· Vida Colectivo </p>
                </div>
                <div className="flex items-center">
                  <p className="body-2 font-semibold text-brown">· Seguros Técnicos </p>
                </div>
                <div className="flex items-center">
                  <p className="body-2 font-semibold text-brown">· Protección y Continuidad Societaria </p>
                </div>
                <div className="flex items-center">
                  <p className="body-2 font-semibold text-brown">· Planes Financieros Societarios y Corporativos </p>
                </div>
                <div className="flex items-center">
                  <p className="body-2 font-semibold text-brown">· Beneficios Empleados Claves </p>
                </div>
              </div>

              <div
                onClick={() => {
                  const contactoElement = document.getElementById('contacto');
                  if (contactoElement) {
                    contactoElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="flex bg-bordo cursor-pointer lg:mr-[38rem] w-32 py-3 px-6 rounded-md items-center mt-2"
              >
                <p id="entretenimiento" className="font-code text-[15px] font-semibold text-white tracking-wider">
                  Escribinos
                </p>
              </div>

              <h5 className="h5 lg:text-5xl lg:w-[540px] mb-10 py-2 px-2 mx-auto mt-24 text-white bg-bordo">Entretenimiento y Ocio</h5>
              <div className="flex justify-center items-center mb-10">
                <img src={entretenimiento} alt="Imagen 1" className="w-22 mx-1" />
              </div>

              {/* items */}
              <div className="grid text-start font-code lg:ml-[14rem] lg:w-[49rem] gap-2 mb-6">
                <div className="flex items-center">
                  <p className="body-2 font-semibold text-brown">· Seguros NO tradicionales</p>
                </div>
                <div className="flex items-center">
                  <p className="body-2 font-semibold text-brown">· Accidentes Personales Deportistas </p>
                </div>
                <div className="flex items-center">
                  <p className="body-2 font-semibold text-brown">· Deportes <span className="font-thin hidden lg:inline">(Golf, aventura, deportes de riesgo)</span></p>
                </div>
                <div className="flex items-center">
                  <p className="body-2 font-semibold text-brown">· Responsabilidad Civil - Eventos y Ferias <span className="font-thin hidden lg:inline">(Clubes, Asociaciones, etc)</span></p>
                </div>
                <div className="flex items-center">
                  <p className="body-2 font-semibold text-brown">· Seguros de espectáculos <span className="font-thin hidden lg:inline">(SEGUROS para participantes u organizadores)</span></p>
                </div>
                <div className="flex items-center">
                  <p className="body-2 font-semibold text-brown">· Obras de arte y Objetos de Valor</p>
                </div>
              </div>

              <div
              onClick={() => {
                window.location.href = 'tel:+541170985000'; // Reemplaza +1234567890 con el número telefónico deseado
              }}
              className="flex bg-bordo cursor-pointer lg:mr-[26rem] w-32 py-3 px-6 rounded-md items-center mt-2"
            >
              <p id="frase" className="font-code text-[15px] font-semibold text-white tracking-wider">Llamanos</p>
            </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
