import React from 'react';
import { configure, shallow, mount } from 'enzyme';
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

    const playButton = component.find('.track__button');

    expect(component.instance().state.isPlaying).toEqual(true);

    playButton.simulate('click');
    expect(playButton.hasClass('track__button--pause')).toEqual(true);
    expect(component.instance().state.isPlaying).toEqual(false);

    playButton.simulate('click');
    expect(playButton.hasClass('track__button--play')).toEqual(true);
    expect(component.instance().state.isPlaying).toEqual(true);
  });
});
