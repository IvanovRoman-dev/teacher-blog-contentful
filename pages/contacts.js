import Head from "next/head";
import { Container } from "react-bootstrap";
import TelegramIcon from "../components/TelegramIcon";
import VkIcon from "../components/VkIcon";
const Contacts = () => {
   return (
      <section className="contacts-section">
         <Head>
            <title>Контакты</title>
         </Head>
         <Container>
            <h1 className="contacts-section__title main-title-margin text-center text-green-200">
               Контакты
            </h1>
            <h4 className="text-center">Email</h4>
            <div className="contacts-section__mail-links d-flex justify-content-center flex-wrap">
               <a
                  className="contacts-section__mail-link"
                  href="mailto:iva.riv@mail.ru"
               >
                  iva.riv@mail.ru
               </a>
               <a
                  className="contacts-section__mail-link"
                  href="mailto:ivaa.ludmila@gmail.com"
               >
                  ivaa.ludmila@gmail.com
               </a>
            </div>
            <h4 className="text-center">Социальные сети</h4>
            <div className="social">
               <a className="social__link">
                  <VkIcon />
               </a>
               <a className="social__link">
                  <TelegramIcon />
               </a>
            </div>
         </Container>
      </section>
   );
};

export default Contacts;
