import Image from "next/future/image";
import Image404 from "../images/404.gif";
const Custom404Page = () => {
   return (
      <section className="page-404">
         <h1 className="page-404__title text-center text-green-300">
            Ошибка 404.
            <br /> Страница не найдена.
         </h1>
         <Image className="page-404__image" src={Image404} alt="404-image" />
      </section>
   );
};

export default Custom404Page;
