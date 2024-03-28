import React from 'react';
import '../experiencias.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />


const Experiencias = ({ title, imageSrc, altText, description, rating, reviewsLink }) => {
  return (
    <div className="card">
      <a href={reviewsLink} target="_blank" className="main-link">
        <h2 className="title">{title}</h2>
        <div className="image">
          <img src={imageSrc} alt={altText} />
        </div>
      </a>
      <p className="description">{description}</p>
      <div className="rating">
        <span className="sr-only">Rating: {rating} out of 5 stars</span>
        {[...Array(rating)].map((_, index) => (
          <span key={index} className="fas fa-star" aria-hidden="true"></span>
        ))}
        {[...Array(5 - rating)].map((_, index) => (
          <span key={index + rating} className="far fa-star" aria-hidden="true"></span>
        ))}
      </div>
    </div>
  );
};

/* datos a enviar al elemento Experiencias*/
const ExperienciasList = () => {
  return (
    <div className="card-slider">
      <Experiencias
        title="First Experiencias title"
        imageSrc="https://traveler.marriott.com/es/wp-content/uploads/sites/2/2021/10/MC_MDEMC_Marriott_Medellin_Spa_1920x1080.jpg"
        altText="Small succulent with long, spikey leaves in a mug-like planter."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        rating={3}
        reviewsLink="https://accessible360.com/#reviews"
      />
      <Experiencias
        title="Second Experiencias title"
        imageSrc="https://images.unsplash.com/photo-1583106617217-406e2c5656fd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        altText="Small succulent with long, spikey leaves in a mug-like planter."
        description="Lorem ipsum dolor sit amet, consectetur."
        rating={4}
        reviewsLink="https://accessible360.com/#reviews"
      />
      <Experiencias
        title="Third Experiencias title"
        imageSrc="https://chillpepperhotel.co.za/wp-content/uploads/2022/10/Chilled-Indulgence-Package.webp"
        altText="Small succulent with long, spikey leaves in a mug-like planter."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        rating={2}
        reviewsLink="https://accessible360.com/#reviews"
      />
      <Experiencias
        title="Fourth Experiencias title"
        imageSrc="https://chillpepperhotel.co.za/wp-content/uploads/2022/10/Drift-Away-Package.webp"
        altText="Small succulent with long, spikey leaves in a mug-like planter."
        description="Lorem ipsum dolor sit amet, consectetur."
        rating={5}
        reviewsLink="https://accessible360.com/#reviews"
      />
      <Experiencias
        title="Fifth Experiencias title"
        imageSrc="https://www.aladinia.com/blog/wp-content/uploads/2019/12/spa-madrid-parejas-1.jpg"
        altText="Small succulent with long, spikey leaves in a mug-like planter."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        rating={5}
        reviewsLink="https://accessible360.com/#reviews"
      />
    </div>
  );
};

export default ExperienciasList;
