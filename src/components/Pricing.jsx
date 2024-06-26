import Section from "./Section";
import { brainwaveSymbol, check, imagethree, price , Raices} from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'

const Pricing = () => {
  return (
    <Section id="nosotros"   className="bg-custom mx-4">
         <div   className="absolute opacity-30 h-full w-full">
        <img src={Raices} alt="Background" className="w-full h-full object-cover" />
        <img src={Raices} alt="Background" className="w-full h-full object-cover" />
        <img src={Raices} alt="Background" className="w-full h-full object-cover" />
        <img src={Raices} alt="Background" className="w-full h-full object-cover" />
        <img src={Raices} alt="Background" className="w-full h-full object-cover" />
        <img src={Raices} alt="Background" className="w-full h-full object-cover" />
        <img src={Raices} alt="Background" className="w-full h-full object-cover" />
        <img src={Raices} alt="Background" className="w-full h-full object-cover" />
        <img src={Raices} alt="Background" className="w-full h-full object-cover" />

      </div>

      <div className="container mt-28 lg:mt-36 h-auto lg:flex">
        <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
        className="lg:w-[38rem] items-center lg:pl-14 lg:mr-8 mt-4 mb-10 md:mt-0">
          <div>
            <img src={imagethree} alt="" />
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
                  <p className="body-2 font-code mb-12 leading-6 text-[18px] text-black">
                      Brindamos vitalidad al mercado con un modelo único
                      de negocios para nuestros clientes y productores
                      asociados, ofreciendo una asesoría integral en
                      Resguardo Patrimonial. <br /> <br />


                      Nuestras raíces son parte del Grupo Loyalty. Estamos
                      en constante crecimiento y desarrollamos una
                      identidad propia conformada por un equipo de
                      profesionales con más de 20 años de trayectoria.

                  </p>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      <div className="flex justify-center items-center h-full">
  <div id="info" className="bg-verde mt-20 rounded-full p-4 w-[80%] lg:w-auto">
    <div className="flex flex-row lg:mx-10 items-center">
      <img className="w-14" src={price} alt="" />
      <p className="text-white text-[13px] leading-0 lg:text-2xl font-bold ml-2">Premio al Mejor Modelo de Negocios Integral Zurich 2022</p>
    </div>
  </div>
</div>

      
    </Section>
  );
};

export default Pricing;
