import Section from "./Section";
import { fabrica, price , Raices} from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'

const Info = () => {
  return (
    <Section  className="bg-custom mx-2 lg:mb-10">
        <div className="absolute opacity-30 h-full w-full">
        <img src={Raices} alt="Background" className="w-full h-full object-cover" />
        




      </div>
       
      <div className="container mt-12 lg:flex">
        <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
        className="lg:w-[38rem] lg:pl-14 lg:mr-8 mt-4 mb-10 md:mt-0">
          <div>
            <img src={fabrica} alt="" />
          </div>
        </motion.div>

        <motion.div 
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
        className="max-w-[29rem] flex items-center">
          

          <ul className="max-w-[29rem] text-black mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-2" key={item.id}>
                {item.text && (
                  <p className="body-2 font-code  leading-6 text-[17px] text-black">
                      Nos destacamos por nuestra <b className="font-bold"> independencia e imparcialidad </b> y porque seleccionamos para nuestros clientes las opciones que consideramos más adecuadas para cada necesidad de cobertura. <br /> <br />


                      Trabajamos con las Compañías Líderes del Mercado, garantizando Respuesta y Solvencia Financiera.

                  </p>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div id="premisas" className="bg-bordo mx-8 lg:mx-80  mt-20 rounded-full p-4">
        <p  className="text-white text-2xl lg:text-3xl  font-bold text-center ">Resguardamos tu Patrimonio</p>
        
      </div>
      
    </Section>
  );
};

export default Info;
