import Sapphire from "../assets/audio/Piano/9 - Sapphire.mp3";
import RachmaninoffFugue from "../assets/audio/Piano/RachmaninoffFugue.mp3";

import Concerto1 from "../assets/audio/Ensemble/Concerto 1.mp3";
import AceOfSpades from "../assets/audio/Ensemble/AceOfSpades.mp3";

import ToTheLandsBeyond from "../assets/audio/Soundtracks/ToTheLandsBeyond.mp3";
import Amazon from "../assets/audio/Soundtracks/Amazon.mp3";
import LittleFantasySuite from "../assets/audio/Soundtracks/LittleFantasySuite.mp3";

import IMG_Birthstones from "../assets/img/TheBirthstones.png";
import IMG_RachmaninoffFugue from "../assets/img/RachmaninoffFugue.png";
import IMG_Concerto from "../assets/img/Concerto.png";
import IMG_TheHighCards from "../assets/img/TheHighCards.png";
import IMG_ToTheLandsBeyond from "../assets/img/ToTheLandsBeyond.png";
import IMG_Amazon from "../assets/img/Amazon.png";
import IMG_LittleFantasySuite from "../assets/img/LittleFantasySuite.png";

const tracks = [
  [
    {
      title: "To The Lands Beyond",
      album: "Ancient Fantasies",
      source: ToTheLandsBeyond,
      image: IMG_ToTheLandsBeyond,
    },
    {
      title: "Amazon",
      album: "Natura",
      source: Amazon,
      image: IMG_Amazon,
    },
    {
      title: "Little Fantasy Suite",
      album: "Ancient Fantasies",
      source: LittleFantasySuite,
      image: IMG_LittleFantasySuite,
    },
  ],
  [
    {
      title: "IX - Sapphire",
      album: "The Birthstones Suite",
      source: Sapphire,
      image: IMG_Birthstones,
    },
    {
      title: "Fugue On A Theme By Rachmaninoff",
      album: "",
      source: RachmaninoffFugue,
      image: IMG_RachmaninoffFugue,
    },
  ],
  [
    {
      title: "I - Allegro Moderato",
      album: "Concerto in C for Piano and Orchestra",
      source: Concerto1,
      image: IMG_Concerto,
    },
    {
      title: "I - Ace Of Spades",
      album: "The High Cards",
      source: AceOfSpades,
      image: IMG_TheHighCards,
    },
  ],
];

export default tracks;