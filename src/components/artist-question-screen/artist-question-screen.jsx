import React from 'react';
import PropTypes from 'prop-types';
import { GameType } from '../../const.js';

import GameHeader from '../game-header/game-header.jsx';

const ArtistQuestionScreen = ({ question, onAnswer }) => {
  const { song, answers } = question;

  return (
    <section className="game game--artist">
      <GameHeader />

      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            <button
              className="track__button track__button--play"
              type="button"
            ></button>
            <div className="track__status">
              <audio src={song.src}></audio>
            </div>
          </div>
        </div>

        <form className="game__artist">
          {answers.map((answer, i) => (
            <div key={answer.artist} className="artist">
              <input
                className="artist__input visually-hidden"
                type="radio"
                name="answer"
                value={`answer-${i}`}
                id={`answer-${i}`}
                onChange={(evt) => {
                  evt.preventDefault();
                  onAnswer(question, answer);
                }}
              />
              <label className="artist__name" htmlFor={`answer-${i}`}>
                <img
                  className="artist__picture"
                  src={answer.picture}
                  alt={answer.artist}
                />
                {answer.artist}
              </label>
            </div>
          ))}
        </form>
      </section>
    </section>
  );
};

ArtistQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
    answers: PropTypes.arrayOf(
      PropTypes.shape({
        picture: PropTypes.string.isRequired,
        artist: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
};

export default ArtistQuestionScreen;
