import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './MessagePage.css';

const MessagePage = () => {
  const { id } = useParams();

  return (
    <div className="container">
      <h2 className="title">Gracias por su compra. ID de la compra: {id}</h2>
      <Link to="/">
        <button className="home-button">Volver a Home</button>
      </Link>
    </div>
  );
};

export default MessagePage;
