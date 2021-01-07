import { v4 as uuidv4 } from "uuid";

function all_songs() {
  return [
    {
      name: "Let Me Down Slowly",
      cover: "/assets/images/covers/narrated_for_you.jpg",
      artist: "Alec Benjamin",
      audio: "/assets/song_mp3/let_me_down_slowly.mp3",
      color: ["#F8A56E", "#99AFD4"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Mocking Bird",
      cover: "/assets/images/covers/encore.jpg",
      artist: "Eminem",
      audio: "/assets/song_mp3/mockingbird.mp3",
      color: ["#094567", "#020605"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Bad Things",
      cover: "/assets/images/covers/bloom.jpg",
      artist: "Machine Gun Kelly",
      audio: "/assets/song_mp3/bad_things.mp3",
      color: ["#58252E", "#386C45"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Black Magic",
      cover: "/assets/images/covers/music_to_be_murdered_by.jpg",
      artist: "Eminem",
      audio: "/assets/song_mp3/black_magic.mp3",
      color: ["#4F1224", "#494C5D"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Lose Yourself",
      cover: "/assets/images/covers/8_miles.jpg",
      artist: "Eminem",
      audio: "/assets/song_mp3/lose_yourself.mp3",
      color: ["#0F1014", "#EEA932"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Learn To Unlove",
      cover: "/assets/images/covers/learn_to_unlove.jpg",
      artist: "Broken Roots",
      audio: "/assets/song_mp3/learn_to_unlove.mp3",
      color: ["#783E26", "#222B32"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "Baarishein",
      cover: "/assets/images/covers/baarishein.jpg",
      artist: "Anuv Jain",
      audio: "/assets/song_mp3/baarishein.mp3",
      color: ["#000000", "#959595"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default all_songs;
