import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png';
import { setFavorite, deleteFavorite } from '../actions';

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRaiting, duration, isList, setFavorite, deleteFavorite } = props;

  const handleSetFavorite = () => {
    setFavorite({
      id, cover, title, year, contentRaiting, duration,
    });
  };

  const handleDeleteFavorite = () => {
    deleteFavorite(id);
  };

  return (
    <div className='carousel-item'>

      <img
        className='carousel-item__img'
        src={cover}
        alt={title}
      />

      <div className='carousel-item__details'>
        <div>
          <Link to={`/player/${id}`}>
            <img
              className='carousel-item__details--img'
              src={playIcon}
              alt='Play Icon'
            />
          </Link>
          {!isList ? (
            <img
              className='carousel-item__details--img'
              src={plusIcon}
              alt='Plus Icon'
              onClick={handleSetFavorite}
            />
          ) : (
            <img
              className='carousel-item__details--img'
              src={removeIcon}
              alt='Remove Icon'
              onClick={handleDeleteFavorite}
            />
          )}

        </div>
        <p className='carousel-item__details--title'>Título descriptivo</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRaiting} ${duration}`}
        </p>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
