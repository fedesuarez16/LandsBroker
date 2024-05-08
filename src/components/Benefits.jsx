import { check, auto,casa, bici, foco, perro, Raices, negocios , entretenimiento } from "../assets";
import Heading from "./Heading";
import Section from "./Section";

const Benefits = () => {
  return (
    <section id="features" className="bg-custom">
      <div className="absolute opacity-30 h-full w-full">
        <img src={Raices} alt="Background" className="w-full h-full object-cover" />
        <img src={Raices} alt="Background" className="w-full h-full object-cover" />
        <img src={Raices} alt="Background" className="w-full h-full object-cover" />
        <img src={Raices} alt="Background" className="w-full h-full object-cover" />
        <img src={Raices} alt="Background" className="w-full h-full object-cover" />
        <img src={Raices} alt="Background" className="w-full h-full object-cover" />
        <img src={Raices} alt="Background" className="w-full h-full object-cover" />
        <img src={Raices} alt="Background" className="w-full h-full object-cover" />




      </div>
     
      <div id="lineas" className="container  mt-10 lg:mt-0 text-center text-black relative z-2">
      
        <h3 className="text-6xl text-center text-yellow-950">Resguardo Patrimonial</h3>      
        <div   className="lg:gap-10 lg:px-32">
          <div className="block mx-auto relative t p-0.5 bg-no-repeat bg-[length:100%_100%]">
            <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
              <h5  className="h5 lg:text-5xl mx-auto lg:w-[390px] mb-14 lg:mb-20 py-2 text-white bg-verde">Líneas personales</h5>
              <div class="flex justify-center items-center mb-14">
                <img src={casa} alt="Imagen 1" class="w-22 mx-1"/>
                
              </div>




              {/* items */}
              <div className="grid font-code text-start  lg:grid-cols-2 gap-4 mb-6">
          
                <div className="flex items-center">
                  <p className="body-2 font-semibold  text-brown">· Automotores – Moto - Barco</p>
                </div>
                <div className="flex items-center">
                  <p className="body-2 font-semibold text-brown">· Hogar</p>
                </div>
                <div className="flex items-center">
                  <p className="body-2 font-semibold text-brown">· Movilidad <p className="font-thin"> (Bicicletas, monopatín, etc) </p></p>
                </div>
                <div className="flex items-center">
                  <p className="body-2 font-semibold text-brown">· Equipos electrónicos portátiles <p className="font-thin"> (Computadoras, Celulares, tablets, otros.) </p>
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="body-2 font-semibold text-brown">· Asistencia al viajero.</p>
                </div>
                <div className="flex items-center">
                  <p className="body-2 font-semibold text-brown">· Accidentes Personales
                    RC y Mala Práxis profesional </p>
                </div>
                <div className="flex items-center">
                  <p className="body-2 font-semibold text-brown">· Vida y Salud. </p>
                </div>
                <div className="flex items-center">
                  <p className="body-2 font-semibold text-brown">· Planes de Pensión y Jubilación</p>
                </div>
              </div>

              <div
               onClick={() => {
                const contactoElement = document.getElementById('contacto');
                if (contactoElement) {
                  contactoElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="flex bg-bordo  w-32 py-4  rounded-md items-center mt-16">
              <p id="negocios" className="font-code text-[15px] mx-auto font-semibold text-white  tracking-wider">
                  Contactate
                </p>
              </div>

             
           

              <h5  className="h5 lg:text-5xl lg:w-[490px] py-2 mb-20 text-center mx-auto  mt-24 text-white bg-brown">Negocios y Empresas</h5>
              <div class="flex justify-center items-center mb-16">
                <img src={negocios} alt="Imagen 1" class="w-22 mx-1"/>
              </div>

                {/* items 2 */}
                <div className="grid text-start text-brown font-code lg:grid-cols-2 gap-4 mb-6">
                  
                  <div className="flex items-center">
                      <p className="body-2 font-semibold text-brown">· Incendio</p>
                  </div>
                  <div className="flex items-center">
                      <p className="body-2 font-semibold text-brown">· Flota de Vehículos</p>
                  </div>
                  <div className="flex items-center">
                      <p className="body-2 font-semibold text-brown">· Transporte de Mercaderías </p>
                  </div>
                  <div className="flex items-center">
                      <p className="body-2 font-semibold text-brown">· Responsabilidad Civil Comprensiva y Producto </p>
                  </div>
                  <div className="flex items-center">
                      <p className="body-2 font-semibold text-brown">· Responsabilidad Civil Directores y Operaciones</p>
                  </div>
                  <div className="flex items-center">
                      <p className="body-2 font-semibold text-brown">· Todo Riesgo Operativo </p>
                  </div>
                  <div className="flex items-center">
                      <p className="body-2 font-semibold text-brown">· Todo Riesgo Construcción Y Montaje</p>
                  </div>
                  <div className="flex items-center">
                      <p className="body-2 font-semibold text-brown">· Seguros Tecnicos</p>
                  </div>
                  <div className="flex items-center">
                      <p className="body-2 font-semibold text-brown">· Cauciones</p>
                  </div> <div className="flex items-center">
                      <p className="body-2 font-semibold text-brown">· Integral de Comercio</p>
                  </div> <div className="flex items-center">
                      <p className="body-2 font-semibold text-brown">· Integral de Consorcio</p>
                  </div> <div className="flex items-center">
                      <p className="body-2 font-semibold text-brown">· ART</p>
                  </div> <div className="flex items-center">
                      <p className="body-2 font-semibold text-brown">· Accidentes Personales </p>
                  </div> <div className="flex items-center">
                      <p className="body-2 font-semibold text-brown">· Vida Ley Contrato de Trabajo</p>
                  </div> <div className="flex items-center">
                      <p className="body-2 font-semibold text-brown">· Vida Colectivo </p>
                  </div> <div className="flex items-center">
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
                className="flex bg-bordo  w-32 py-4 px-6 rounded-md items-center mt-16">
                <p id="entretenimiento"  className="font-code text-[15px] font-semibold text-white  tracking-wider">
                  Escribinos
                </p>
              </div>

              <h5 className="h5 lg:text-5xl lg:w-[540px] mb-20 py-2 mx-auto  mt-24 text-white bg-bordo">Entretenimiento y Ocio</h5>
              <div class="flex justify-center items-center mb-16">
                <img src={entretenimiento} alt="Imagen 1" class="w-22 mx-1"/>
              </div>

                  {/* items */}
                  <div className="grid text-start font-code lg:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                          <p className="body-2 font-semibold text-brown">· Seguros no tradicionales</p>
                    </div>
                    <div className="flex items-center">
                          <p className="body-2 font-semibold text-brown">· Accidentes Personales. </p>
                    </div>
                    <div className="flex items-center">
                          <p className="body-2 font-semibold text-brown">· Deportistas</p>
                    </div>
                    <div className="flex items-center">
                          <p className="body-2 font-semibold text-brown">· Deportes <p className="font-thin"> (Golf, aventura, deporte de riesgo) </p> </p>
                    </div>
                    <div className="flex items-center">
                          <p className="body-2 font-semibold text-brown">· Responsabilidad Civil Eventos y Ferias</p>
                    </div>
                    <div className="flex items-center">
                          <p className="body-2 font-semibold text-brown">· Seguros de espectáculos <p className="font-thin">(seguros para participantes u organizadores)</p>  </p>
                    </div>
                    <div className="flex items-center">
                          <p className="body-2 font-semibold text-brown">· Responsabilidad Civil Asociaciones <p className="font-thin">(clubes, asociaciones etc) </p>  </p>
                    </div>
                    <div className="flex items-center">
                          <p className="body-2 font-semibold text-brown">· Obras de arte   y Objetos de Valor</p>
                    </div>
                  </div>

                  <div 
                   onClick={() => {
                    const contactoElement = document.getElementById('contacto');
                    if (contactoElement) {
                      contactoElement.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="flex bg-bordo  w-32 py-4 px-6 rounded-md items-center mt-16">
                <p className="font-code text-[15px] font-semibold text-white  tracking-wider">
                  Llamanos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
