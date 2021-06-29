import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import NotFound from './NotFound';
import { getVideoSource } from '../actions';
import '../assets/styles/components/Player.scss';

function Player({ history, match, playing, getVideoSource }) {
  const { params: { id } } = match;

  useEffect(() => {
    getVideoSource(id);
  }, []);

  const hasPlaying = Object.keys(playing).length > 0;

  if (!hasPlaying) {
    return <NotFound />;
  }

  return (
    <div className='Player'>
      <video controls autoPlay>
        <source src={playing.source} type='video/mp4' />
      </video>

      <div className='Player-back'>
        <button type='button' onClick={() => history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
