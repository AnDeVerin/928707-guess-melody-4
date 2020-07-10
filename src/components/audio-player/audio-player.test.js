import React from 'react';
import renderer from 'react-test-renderer';

import AudioPlayer from './audio-player.jsx';

it(`AudioPlayer is rendered correctly`, () => {
  const tree = renderer
    .create(
      <AudioPlayer
        isLoading={true}
        isPlaying={false}
        onPlayButtonClick={jest.fn()}
      >
        <audio />
      </AudioPlayer>,
      {
        createNodeMock: () => {
          return {};
        },
      }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
