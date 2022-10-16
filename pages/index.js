import Head from "next/head";
import Image from "next/future/image";
import Link from "next/link";
import { Container, Row, Col, Button } from "react-bootstrap";
import Photo from "../images/photo.jpg";
import ArrowIcon from "../components/ArrowIcon";
import { motion } from "framer-motion";

export default function Home() {
   return (
      <section className="hero-section">
         <Head>
            <title>Блог Ивановой Людмилы Ивановны | Главная</title>
         </Head>
         <Container>
            <Row>
               <Col lg={7} md={12} sm={12} className="mb-5 mb-sm-5 lg-md-0">
                  <motion.p
                     className="hero-section__subtitle"
                     initial={{ x: -100, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     transition={{
                        delay: 0.4,
                        duration: 0.75,
                     }}
                  >
                     Учитель начальных классов
                  </motion.p>
                  <motion.h1
                     className="hero-section__title text-green-200"
                     initial={{ x: -100, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     transition={{
                        delay: 0.8,
                        duration: 0.75,
                     }}
                  >
                     Иванова Людмила Ивановна
                  </motion.h1>
                  <motion.p
                     className="hero-section__text"
                     initial={{ x: -100, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     transition={{
                        delay: 1.2,
                        duration: 0.75,
                     }}
                  >
                     Добро пожаловать в личный блог учителя!
                  </motion.p>
                  <motion.p
                     className="hero-section__text"
                     initial={{ x: -100, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     transition={{
                        delay: 1.4,
                        duration: 0.75,
                     }}
                  >
                     Здесь можно найти{" "}
                     <Link href="/distance-education">
                        <span className="text-green-300 cursor-pointer">
                           задания для дистанционного обучения
                        </span>
                     </Link>
                     , а также{" "}
                     <Link href="/usefulness">
                        <span className="text-green-300 cursor-pointer">
                           полезную информацию для родилей
                        </span>
                     </Link>{" "}
                     в разделе Полезности и{" "}
                     <Link href="/contacts">
                        <span className="text-green-300 cursor-pointer">
                           контакты учителя
                        </span>
                     </Link>
                     .
                  </motion.p>
                  <motion.div
                     className="hero-section__text"
                     initial={{ x: -100, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     transition={{
                        delay: 1.4,
                        duration: 0.75,
                     }}
                  >
                     <Link href="/contacts">
                        <Button className="pink-button">
                           <span>Контакты учителя</span>
                           <ArrowIcon></ArrowIcon>
                        </Button>
                     </Link>
                  </motion.div>
               </Col>
               <Col lg={5} md={12} sm={12} className="text-center">
                  <motion.div
                     initial={{ x: 100, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     transition={{
                        delay: 1.6,
                        duration: 0.75,
                     }}
                  >
                     <Image
                        className="hero-section__image"
                        src={Photo}
                        alt="photo"
                     />
                  </motion.div>
               </Col>
            </Row>
         </Container>
      </section>
   );
}
