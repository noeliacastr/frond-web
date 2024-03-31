import React, { useState } from 'react';
import '../ratingBox.css';


const RatingBox = () => {
  const [rating, setRating] = useState(0);
  const [alias, setAlias] = useState('');
  const [review, setReview] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {

    setRating(0);
    setAlias('');
    setReview('');
    setError('');
    setSubmitted(true);
  };

  return (
    
    <div className="rating-box" style={{ marginTop: '50px' }}>

      <form className="rating-form">

        <fieldset>
          <span className="star-cb-group">
          <h1 style={{  margin: '0px', textAlign: 'center' }}>Tu opinion es importante para nosotros</h1>
            {[...Array(5)].map((_, index) => (
              <React.Fragment key={index}>
                <input
                  type="radio"
                  id={`rating-${index + 1}`}
                  name="rating"
                  value={index + 1}
                  checked={rating === index + 1}
                  onChange={() => setRating(index + 1)}
                />
                <label htmlFor={`rating-${index + 1}`}>{index + 1}</label>
              </React.Fragment>
            ))}
          </span>
        </fieldset>
        <fieldset>
          <input
            type="text"
            name="alias"
            id="alias"
            className="text-field"
            value={alias}
            maxLength={50}
            placeholder="Nombre"
            onChange={(e) => setAlias(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <textarea
            name="review"
            id="review"
            maxLength={100}
            value={review}
            placeholder="Comparte tu experiencia"
            onChange={(e) => setReview(e.target.value)}

            
          ></textarea>
            <input type="file" name="fileToUpload" id="fileToUpload"  />
        </fieldset>
        <fieldset>
          <input type="button" value="Compartir" id="submit" onClick={handleSubmit} />
        </fieldset>
      </form>
    </div>
  );
};

export default RatingBox;
