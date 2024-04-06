import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'; // Importa el Carousel de react-bootstrap
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa el archivo CSS de AOS para aplicar estilos por defecto
import Navbar from "./Navbar";
import '../App.css';

const GeneralInfo = () => {
    AOS.init();

    return (
        <>
        <Carousel fade>
            <Carousel.Item className="carousel-item-custom">
            <Navbar />
            <div className="center">
                <h1 className="alex-brush">Bienvenido</h1>
                <h2>Santuary Spa</h2>
                <span id="asterisk">*</span>
                <p>Listo para atenderte</p>
            </div>
            </Carousel.Item>
            <Carousel.Item className="carousel-item-custom3">
            <Navbar />
            <div className="center">
                <h1 className="alex-brush">Bienvenido</h1>
                <h2>Santuary Spa</h2>
                <span id="asterisk">*</span>
                <p>Listo para atenderte</p>
            </div>
            </Carousel.Item>
            <Carousel.Item className="carousel-item-custom2">
            <Navbar />
            <div className="center">
                <h1 className="alex-brush">Bienvenido</h1>
                <h2>Santuary Spa</h2>
                <span id="asterisk">*</span>
                <p>Listo para atenderte</p>
            </div>
            </Carousel.Item>
            <Carousel.Item className="carousel-item-custom4">
            <Navbar />
            <div className="center">
                <h1 className="alex-brush">Bienvenido</h1>
                <h2>Santuary Spa</h2>
                <span id="asterisk">*</span>
                <p>Listo para atenderte</p>
            </div>
            </Carousel.Item>
        </Carousel>
        <section className="add-padding add-flex">
            <div className="center-text">
                <h1><span className="custom-font">Nuestra experiencia de spa cinco estrellas</span><br /></h1>
                <h2>*</h2>
                <p className="custom2">Respira profundamente y siente los efectos nutritivos del oxígeno fresco 
                    exhalado por la floreciente flora que te rodea. Estas selvas tropicales son los pulmones del planeta y limpian y generan los elementos vitales esenciales del aire y el agua, mientras que en las profundidades de la superficie terrestre el magma ardiente se encuentra con el agua y envía vapor a través de los estratos de roca, arcilla y minerales para traer los elementos centrales del planeta. el planeta a la superficie por primera vez aquí, en la propiedad de The Springs Resort & Spa. En The Sanctuary Spa tomamos estos regalos naturales de nuestros propios manantiales minerales termales y los ofrecemos 
                    a nuestros huéspedes a través de terapias diseñadas para realzar la belleza, 
                    la energía, la vitalidad y el equilibrio.</p>
                <a href="#">SOBRE NOSOTROS</a>
            </div>
            <div  className="stuffed-cherries" data-aos="fade-left" data-aos-delay="300">
            </div>
        </section>
        <section className="bread-background1 center-h1">
            <div>
            <h1 className="custom-h1 alex-brush"><span className="custom-font1">¿Que ofrecemos?</span><br/>*</h1><span>
            <p className="custom1">Nuestro spa de lujo de servicio completo de 
                catorce mil pies cuadrados abarca un nivel completo de nuestro edificio de recepción y 
                refleja nuestro serio compromiso de brindar una experiencia de tratamiento completa para
                reponer su mente, cuerpo y alma, lo que nos convierte en el retiro de spa líder en Costa Rica. 
                Se ofrecen masajes, tratamientos faciales, envolturas corporales, manicuras y pedicuras en un 
                ambiente lujoso y holístico administrado por profesionales capacitados con la última tecnología.</p></span><br/>
            </div>
        </section>
        <section className="menu add-flex add-padding">
            <div className="menu-images">
                <img src="https://i.postimg.cc/gjtqq0ND/masaje5.jpg"  data-aos="fade-down" data-aos-delay="300"/>
                <img src="https://i.postimg.cc/TPm8n3D6/masaje4.png" data-aos="fade-up" data-aos-delay="300"/>
                <img src="https://i.postimg.cc/KzP2h8GN/masaje3.jpg" data-aos="fade-right" data-aos-delay="300"/>
                <img src="https://i.postimg.cc/MTQGMwWM/masaje2.jpg" data-aos="fade-left" data-aos-delay="300"/>
            </div>
            <div className="center-text">
                <h1><span className="custom-font alex-brush">Discover</span><br />MENU</h1>
                <h2>*</h2>
                <p>¡Diseñado para brindarte una experiencia de rejuvenecimiento completa, nuestro menú ofrece una amplia gama de tratamientos 
                que satisfacen tus necesidades individuales y te transportan a un estado de total serenidad!</p>
                <a href="/menu">View the full menu</a>
            </div>
        </section>
        <section className="add-flex reservation-section">
            <div className="center-text add-padding">
            <h1 className="custom-h1 alex-brush"><span className="custom-font1">Se incluye</span><br/>*</h1><span>
                <p className="custom2">Con el objetivo de ofrecer a nuestros distinguidos clientes una experiencia de relajación 
                y bienestar incomparable, Entre las comodidades destacadas se encuentran un sauna y un cuarto de vapor, equipados 
                con la más avanzada tecnología y diseñados para brindar una experiencia revitalizante y purificadora. Estos espacios,
                cuidadosamente diseñados, permiten a nuestros huéspedes liberar tensiones, eliminar toxinas y revitalizar sus sentidos 
                en un ambiente de tranquilidad absoluta. Además, nos enorgullece ofrecer la posibilidad de disfrutar de una vista panorámica
                incomparable del majestuoso volcán Arenal desde una de nuestras salas de tratamiento.
                </p></span><br/>
                <a href="#">make a reservation</a>
            </div>
            <div className="carousel-container">
                <Carousel className="carousel">
                    <Carousel.Item>
                    <img
                        className="carousel-image"
                        src="https://i.postimg.cc/v8K0VPkd/IMG-0914.jpg"
                        alt="First slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="carousel-image"
                        src="https://i.postimg.cc/Njj2J4rf/1568818135-5d8243d79b438-thumb.jpg"
                        alt="Second slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="carousel-image"
                        src="https://i.postimg.cc/Hxj3jKwR/IMG-0912.jpg"
                        alt="Second slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="carousel-image"
                        src="https://i.postimg.cc/63QGYgcc/web-270-spa-common-area-high-resolution-8-11-19.jpg"
                        alt="Second slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="carousel-image"
                        src="https://i.postimg.cc/sgFLqVYX/the-springs-resort-view.jpg"
                        alt="Second slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="carousel-image"
                        src="https://i.postimg.cc/bJ2qyRw8/dsc-5116-8-11-19.jpg"
                        alt="Second slide"
                    />
                    </Carousel.Item>
                </Carousel>
            </div>
        </section>
        <section className="bread-background2 center-h1">
            <div>
                <h1 className="custom-h1 alex-brush"><span className="custom-font2">Bienestar a tu manera
                </span><br/>*</h1><span>
                <p className="custom1">Para aquellos visitantes que aprecian mantenerse activos 
                durante su tiempo de descanso, proporcionamos una selección completa de avanzados 
                dispositivos para ejercicio cardiovascular y fortalecimiento muscular.
                Para enriquecer su rutina de ejercicios, la zona de entrenamiento cardiovascular 
                ofrece una panorámica estimulante del majestuoso volcán y el hermoso valle que lo 
                rodea. Además, el hotel dispone de diversos restaurantes y aguas termales para completar 
                su relajación según sus preferencias.
                </p></span><br/>
            </div>
        </section>
        <section className="menu add-flex add-padding">
            <div className="menu-images">
                <img src="https://i.postimg.cc/QdSkXQFF/gym1.jpg"  data-aos="fade-down" data-aos-delay="300"/>
                <img src="https://i.postimg.cc/sfpWjY83/gym2.jpg" data-aos="fade-up" data-aos-delay="300"/>
                <img src="https://i.postimg.cc/ZYG13dJ7/190-pools-perdidos-cascada-del-rey-7-11-191.jpg" data-aos="fade-right" data-aos-delay="300"/>
                <img src="https://i.postimg.cc/GpXWsgpG/web-880-rooms-villa-guayaba-pool-with-volcano-outside-6-11-19.jpg" data-aos="fade-left" data-aos-delay="300"/>
            </div>
            <div className="menu-images">
                <img src="https://i.postimg.cc/L84QB6fZ/resta1.jpg"  data-aos="fade-down" data-aos-delay="300"/>
                <img src="https://i.postimg.cc/xCgcm5Sm/resta4.jpg" data-aos="fade-up" data-aos-delay="300"/>
                <img src="https://i.postimg.cc/JzbYj6pt/las-lagunas-1.jpg" data-aos="fade-right" data-aos-delay="300"/>
                <img src="https://i.postimg.cc/vB75N5w8/resta3.jpg" data-aos="fade-left" data-aos-delay="300"/>
            </div>
            
        </section>

        
        </>
    );
};

export default GeneralInfo;