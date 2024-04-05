import "../experiencias.css";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
/>;

const Experiencias = ({
  nombreUsuario,
  imageSrc,
  mensaje,
}) => {
  return (
    <div className="card" style={{ cursor: 'default !important;' }}>
      <h2 style={{ cursor: 'default !important' }} className="nombreUsuario">{nombreUsuario}</h2>
      <div className="image">
        <img src={imageSrc}/>
      </div>
      <p className="mensaje">{mensaje}</p>
      <div className="calificacion">
        <span style={{ color: 'black' }}>calificacion:⭐⭐⭐⭐ </span>
      </div>
    </div>
  );
};

const ExperienciasList = () => {
  return (
    <div className="card-slider">
      <h1 className="custom-font alex-brush center-text">
        <span className="custom-font2 center-text"style={{color: "rgb(190, 128, 64)"}}>
          Descubre las Experiencias de Otros en Sanctuary Spa
        </span>
      </h1>

      <span>
        <p
          className="custom1 center-text"
          style={{color: "black", fontSize: "20",  marginLeft: "10%", marginBottom:"5%"}}
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
        
      />
      <Experiencias
        nombreUsuario="Blair Rojas"
        imageSrc="https://images.unsplash.com/photo-1583106617217-406e2c5656fd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        mensaje="Renove mi cuerpo, mente y espíritu en Santuary Spa."

      />
      <Experiencias
        nombreUsuario="Emily Johnson"
        imageSrc="https://chillpepperhotel.co.za/wp-content/uploads/2022/10/Chilled-Indulgence-Package.webp"
        mensaje="Every detail of the experience was gratifying. 👌"
      />
      <Experiencias
        nombreUsuario="Alexander Smith"
        imageSrc="https://chillpepperhotel.co.za/wp-content/uploads/2022/10/Drift-Away-Package.webp"
        mensaje="Transforming experience that has left an indelible mark on my heart! ☮️ I hope to return soon"

      />
      <Experiencias
        nombreUsuario="Jacques Dubois"
        imageSrc="https://www.aladinia.com/blog/wp-content/uploads/2019/12/spa-madrid-parejas-1.jpg"
        mensaje="Cada detalle de la experiencia fue gratificante y enriquecedor. Desde la profesionalidad del personal hasta la belleza del lugar, todo contribuyó a crear un ambiente encantador y rejuvenecedor."

      />
    </div>
  );
};

export default ExperienciasList;
