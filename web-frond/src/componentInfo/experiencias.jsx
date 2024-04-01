import "../experiencias.css";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
/>;

const Experiencias = ({
  nombreUsuario,
  imageSrc,
  mensaje,
  calificacion,
}) => {
  return (
    <div className="card" style={{ cursor: 'default !important;' }}>
      <h2 style={{ cursor: 'default !important' }} className="nombreUsuario">{nombreUsuario}</h2>
      <div className="image">
        <img src={imageSrc}/>
      </div>
      <p className="mensaje">{mensaje}</p>
      <div className="calificacion">
        <span className="sr-only">calificacion: {calificacion} de 5 estrellas</span>
        {[...Array(calificacion)].map((_, index) => (
          <span key={index} className="fas fa-star" aria-hidden="true"></span>
        ))}
        {[...Array(5 - calificacion)].map((_, index) => (
          <span
            key={index + calificacion}
            className="far fa-star"
            aria-hidden="true"
          ></span>
        ))}
      </div>
    </div>
  );
};

const ExperienciasList = () => {
  return (
    <div className="card-slider">
      <h1 className="custom-h1 alex-brush">
        <span className="custom-font2">
          Descubre las Experiencias de Otros en Sanctuary Spa
        </span>
      </h1>

      <span>
        <p
          className="custom1"
          style={{color: "black", fontSize: "20"}}
        >
          En Santuary Spa, nos enorgullecemos de ofrecer experiencias
          transformadoras que rejuvenecen el cuerpo, revitalizan la mente y
          renuevan el espíritu. Pero no solo tomamos nuestra palabra; queremos
          que escuches de aquellos que han vivido la magia de nuestro oasis de
          bienestar.
        </p>
      </span>

      <Experiencias
        nombreUsuario="Lucia Lopez Lopez"
        imageSrc="https://traveler.marriott.com/es/wp-content/uploads/sites/2/2021/10/MC_MDEMC_Marriott_Medellin_Spa_1920x1080.jpg"
        mensaje="¡Experiencia transformadora! ✨ ame el lugar"
        calificacion={4}
      />
      <Experiencias
        nombreUsuario="Blair Rojas"
        imageSrc="https://images.unsplash.com/photo-1583106617217-406e2c5656fd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        mensaje="Renove mi cuerpo, mente y espíritu en Santuary Spa."
        calificacion={5}
      />
      <Experiencias
        nombreUsuario="Emily Johnson"
        imageSrc="https://chillpepperhotel.co.za/wp-content/uploads/2022/10/Chilled-Indulgence-Package.webp"
        mensaje="Every detail of the experience was gratifying. 👌"
        calificacion={2}
      />
      <Experiencias
        nombreUsuario="Alexander Smith"
        imageSrc="https://chillpepperhotel.co.za/wp-content/uploads/2022/10/Drift-Away-Package.webp"
        mensaje="Transforming experience that has left an indelible mark on my heart! ☮️ I hope to return soon"
        calificacion={5}
      />
      <Experiencias
        nombreUsuario="Jacques Dubois"
        imageSrc="https://www.aladinia.com/blog/wp-content/uploads/2019/12/spa-madrid-parejas-1.jpg"
        mensaje="Cada detalle de la experiencia fue gratificante y enriquecedor. Desde la profesionalidad del personal hasta la belleza del lugar, todo contribuyó a crear un ambiente encantador y rejuvenecedor."
        calificacion={5}
      />
    </div>
  );
};

export default ExperienciasList;
