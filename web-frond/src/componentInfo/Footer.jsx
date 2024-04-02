import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'> 
      <div className="footer-content">
        <div className="footer-section">
          <h3>Emails de Reservación</h3>
          <ul>
            <li>reservas@SantuarySpaCR.com</li>
            <li>infomacion@SantuarySpaCR.com</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Números de Contacto</h3>
          <ul>
            <li>+506-6210-0415</li>
            <li>+506-2595-2123</li>
          </ul>
        </div>
        <div className="footer-section">
          <p>&copy; 2024 SantuarySpa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
