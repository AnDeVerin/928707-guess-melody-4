import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';

import questions from '../../mocks/questions.js';

const App = ({ errorCount }) => {
  const onStartHandler = () => {};

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen
            errorCount={errorCount}
            onWelcomeButtonClick={onStartHandler}
          />
        </Route>
        <Route exact path="/dev-artist">
          <ArtistQuestionScreen question={questions[1]} />
        </Route>
        <Route exact path="/dev-genre">
          <GenreQuestionScreen question={questions[0]} onAnswer={() => {}} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorCount: PropTypes.number,
  questions: PropTypes.array.isRequired,
};

export default App;
