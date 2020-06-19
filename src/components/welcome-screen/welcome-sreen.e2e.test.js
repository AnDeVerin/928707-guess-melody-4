import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import WelcomeScreen from './welcome-screen.jsx';

configure({ adapter: new Adapter() });

describe('WelcomeScreen component', () => {
  it('calls passed function on start button click', () => {
    const onStartMockHandler = jest.fn();

    const component = shallow(
      <WelcomeScreen errorCount={3} onWelcomeButtonClick={onStartMockHandler} />
    );

    const startButton = component.find('.welcome__button');
    startButton.simulate('click');

    expect(onStartMockHandler).toHaveBeenCalled();
  });
});
