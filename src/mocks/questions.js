const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export default [
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/6/62/OriginalDixielandJassBand-JazzMeBlues.ogg`,
        genre: `rock`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/en/b/b7/DukeEllington_TakeTheATrain.ogg`,
        genre: `blues`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/en/6/60/CharlieParker_YardbirdSuite.ogg`,
        genre: `jazz`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/en/5/5d/JohnColtrane_MrPC.ogg`,
        genre: `rock`,
      },
    ],
  },
  {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/en/2/29/CourtneyPine_TheJazzstep.ogg`,
    },
    answers: [
      {
        picture: `${AVATAR_URL}/A`,
        artist: `John Snow`,
      },
      {
        picture: `${AVATAR_URL}/AB`,
        artist: `Jack Daniels`,
      },
      {
        picture: `${AVATAR_URL}/AC`,
        artist: `Jim Beam`,
      },
    ],
  },
];
