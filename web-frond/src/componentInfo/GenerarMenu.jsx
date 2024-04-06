import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'; // Importa el Carousel de react-bootstrap
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa el archivo CSS de AOS para aplicar estilos por defecto
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from "./Navbar";
import CardMenu from './CardsMenu';
import Footer from './Footer';
import '../App.css';

const GenerarMenu = ({ menuItems }) => {
  AOS.init();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true
  };
  console.log(menuItems);
  return (

    <>
      <Carousel fade>
        <Carousel.Item className="carousel-item-custom2">
          <Navbar />
          <div className="center">
            <h1 className="alex-brush">Santuary Spa</h1>
            <h2>Conoce nuestro menú aquí</h2>
            <span id="asterisk">*</span>
            <p>Un lugar especial que conecta los elementos de la vida</p>
          </div>
        </Carousel.Item>
      </Carousel>

      <section className="bread-background3 center-h1">
        <div className="center-text">
          <h1 className="alex-brush">Descubre todos nuestros servicios<br />

            <p></p></h1>
          <h2>*</h2>
          <p>
            Respire aire fresco y escuche la armonía de las cascadas de aguas
            termales mientras contempla los secretos de la selva tropical circundante.
            Se ofrecen masajes, tratamientos faciales, envolturas corporales, manicuras y pedicuras en un ambiente lujoso y
            holístico administrado por profesionales capacitados con la última tecnología.
          </p>
          <a href="#">¡Agenda tu cita!</a>
        </div>
        <div className="menu-images">
          <img src="https://i.postimg.cc/Z5B0hZ3r/5-82-800x480.jpg" data-aos="fade-down" data-aos-delay="300" />
          <img src="https://i.postimg.cc/XYRqjhct/66635044-2516470601724767-5119746934050914304-n.jpg" alt="66635044-2516470601724767-5119746934050914304-n" data-aos="fade-up" data-aos-delay="300" />
          <img src="https://i.postimg.cc/3R7wpvqB/66913640-2516470561724771-5739149740042354688-n.jpg" alt="66913640-2516470561724771-5739149740042354688-n" data-aos="fade-right" data-aos-delay="300" />
          <img src="https://i.postimg.cc/5tdqFsSF/holistic-spa.jpg" data-aos="fade-left" data-aos-delay="300" />
        </div>

      </section>

      <section className="bread-background2">
        <div>
          <div className="textMenu">
            <h3 className="alex-brush">Full Menú</h3>
            <p>Las citas diarias están disponibles entre las horas de: 10:30 am a 8:00 pm.<br />
              Llegue al menos 30 minutos antes de su cita para disfrutar de la sauna,
              baño de vapor y salón de relajación.</p>
          </div>
          <Slider {...settings}>
            {menuItems.map((menuItem, index) => (
              <div key={index}>
                <CardMenu
                  title={menuItem.title}
                  description={menuItem.description}
                  price={menuItem.price}
                  imageUrl={menuItem.imageUrl}
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section className="add-flex reservation-section">
        <div className="center-text add-padding">
          <h1 className="custom-h1 alex-brush"><span className="custom-font1">Bienestar a tu manera</span><br />*</h1><span>
            <p className="custom2">Para nuestros huéspedes que disfrutan mantenerse en forma durante sus vacaciones,
              ofrecemos una colección completa de la última tecnología cardiovascular y equipos de fuerza.
              Para mejorar su experiencia de entrenamiento,
              la sala de ejercicios cardiovasculares cuenta con una vista inspiradora del volcán y el valle circundante.
            </p></span><br />
          <a href="#">¡Reserva YA!</a>
        </div>
        <div className="carousel-container">
          <img
            className="carousel-image"
            src="https://i.postimg.cc/FF3h04JK/gym.avif"
            alt="First slide"
          />
        </div>
      </section>
      <section>
            <Footer />
      </section>
    </>
  );
};
export default GenerarMenu;