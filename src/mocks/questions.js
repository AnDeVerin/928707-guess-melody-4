const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export default [
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `https://en.wikipedia.org/wiki/File:OriginalDixielandJassBand-JazzMeBlues.ogg`,
        genre: `rock`,
      },
      {
        src: `https://en.wikipedia.org/wiki/File:DukeEllington_TakeTheATrain.ogg`,
        genre: `blues`,
      },
      {
        src: `https://en.wikipedia.org/wiki/File:CharlieParker_YardbirdSuite.ogg`,
        genre: `jazz`,
      },
      {
        src: `https://en.wikipedia.org/wiki/File:JohnColtrane_MrPC.ogg`,
        genre: `rock`,
      },
    ],
  },
  {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://en.wikipedia.org/wiki/File:CourtneyPine_TheJazzstep.ogg`,
    },
    answers: [
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `John Snow`,
      },
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `Jack Daniels`,
      },
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `Jim Beam`,
      },
    ],
  },
];
