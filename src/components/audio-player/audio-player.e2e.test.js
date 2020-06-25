import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AudioPlayer from './audio-player.jsx';

configure({ adapter: new Adapter() });

const mock = {
  song: {
    src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
  },
};

describe('AudioPlayer', () => {
  it('should change button class and state on click', () => {
    const { song } = mock;

    const component = mount(
      <AudioPlayer
        isPlaying={true}
        onPlayButtonClick={jest.fn()}
        src={song.src}
      />
    );

    window.HTMLMediaElement.prototype.play = () => {};
    window.HTMLMediaElement.prototype.pause = () => {};
    component.instance().setState({ isLoading: false });

    const playButton = component.find('.track__button');
    playButton.simulate('click');

    expect(component.instance().state.isPlaying).toEqual(false);
    expect(
      component.find(`.track__button`).hasClass('track__button--play')
    ).toBe(true);

    playButton.simulate('click');
    expect(component.instance().state.isPlaying).toEqual(true);
    expect(
      component.find(`.track__button`).hasClass(`track__button--pause`)
    ).toBe(true);
  });
});
