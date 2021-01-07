import { v4 as uuidv4 } from "uuid";

function all_songs() {
  return [
    {
      name: "Let Me Down Slowly",
      cover: "/assets/images/covers/narrated_for_you.jpg",
      artist: "Alec Benjamin",
      audio: "/assets/song_mp3/let_me_down_slowly.mp3",
      color: ["#F8A56E", "#b26c4c"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Mocking Bird",
      cover: "/assets/images/covers/encore.jpg",
      artist: "Eminem",
      audio: "/assets/song_mp3/mockingbird.mp3",
      color: ["#1a8bbf", "#013b56"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Bad Things",
      cover: "/assets/images/covers/bloom.jpg",
      artist: "Machine Gun Kelly",
      audio: "/assets/song_mp3/bad_things.mp3",
      color: ["#d12752", "#6b001a"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Black Magic",
      cover: "/assets/images/covers/music_to_be_murdered_by.jpg",
      artist: "Eminem",
      audio: "/assets/song_mp3/black_magic.mp3",
      color: ["#9e2142", "#540c1f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Lose Yourself",
      cover: "/assets/images/covers/8_miles.jpg",
      artist: "Eminem",
      audio: "/assets/song_mp3/lose_yourself.mp3",
      color: ["#C5934D", "#af6f00"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Learn To Unlove",
      cover: "/assets/images/covers/learn_to_unlove.jpg",
      artist: "Broken Roots",
      audio: "/assets/song_mp3/learn_to_unlove.mp3",
      color: ["#6a96a5", "#27505e"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "Baarishein",
      cover: "/assets/images/covers/baarishein.jpg",
      artist: "Anuv Jain",
      audio: "/assets/song_mp3/baarishein.mp3",
      color: ["#7a7a7a", "#22292F"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default all_songs;
