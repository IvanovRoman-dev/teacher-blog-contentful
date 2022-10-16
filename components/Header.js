import Link from "next/link";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";

const Header = () => {
   return (
      <header className="header">
         <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
               <Link href="/">
                  <Navbar.Brand href="#home">
                     Иванова Людмила Ивановна
                  </Navbar.Brand>
               </Link>
               <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
               <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-lg`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                  placement="start"
               >
                  <Offcanvas.Header closeButton>
                     <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                        Меню
                     </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                     <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Link href="/">
                           <Nav.Link href="#home">Главная</Nav.Link>
                        </Link>
                        <Link href="/distance-education">
                           <Nav.Link href="#distance-education">
                              Дистанционное обучение
                           </Nav.Link>
                        </Link>
                        <Link href="/usefulness">
                           <Nav.Link href="#usefulness">Полезности</Nav.Link>
                        </Link>
                        <Link href="/contacts">
                           <Nav.Link href="#contacts">Контакты</Nav.Link>
                        </Link>
                     </Nav>
                  </Offcanvas.Body>
               </Navbar.Offcanvas>
            </Container>
         </Navbar>
      </header>
   );
};

export default Header;
