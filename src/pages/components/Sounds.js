import { useState } from "react";

export default function Sounds() {
  const [sounds, setSounds] = useState([
    {
      name: "BRUH",
      slug: "bruh",
      sound: "http://www.myinstants.com/media/sounds/movie_1.mp3",
      color: "ffff33",
    },
    {
      name: "ROBLOX oof",
      slug: "roblox-oof",
      sound: "http://www.myinstants.com/media/sounds/roblox-death-sound_1.mp3",
      color: "FF0000",
    },
    {
      name: "MLG AIR HORN!!!!!!!!!!!",
      slug: "mlg-air-horn",
      sound: "http://www.myinstants.com/media/sounds/mlg-airhorn.mp3",
      color: "00ff00",
    },
    {
      name: "Inception Button",
      slug: "inception-button",
      sound: "http://www.myinstants.com/media/sounds/inceptionbutton.mp3",
      color: "ff0000",
    },
    {
      name: "YEAH !!",
      slug: "yeah",
      sound: "http://www.myinstants.com/media/sounds/sound-9______.mp3",
      color: "990033",
    },
    {
      name: "Windows XP Error",
      slug: "windows-xp-error",
      sound: "http://www.myinstants.com/media/sounds/erro.mp3",
      color: "00ffff",
    },
    {
      name: "oh no no no laugh",
      slug: "oh-no-no-no-laugh-56694",
      sound: "http://www.myinstants.com/media/sounds/oh-no-no-no-no-laugh.mp3",
      color: "FF0000",
    },
    {
      name: "To be Continued (jojo)",
      slug: "to-be-continued-jojo",
      sound: "http://www.myinstants.com/media/sounds/untitled_1071.mp3",
      color: "cc9933",
      image:
        "http://www.myinstants.com/media/instants_images/tumblr_inline_o5siibnbkl1rrtsao_540.png",
    },
    {
      name: "Surprise Motherfucker",
      slug: "surprise-motherfucker",
      sound: "http://www.myinstants.com/media/sounds/surprise-motherfucker.mp3",
      color: "33ff00",
    },
    {
      name: "Anime Wow",
      slug: "anime-wow",
      sound:
        "http://www.myinstants.com/media/sounds/anime-wow-sound-effect.mp3",
      color: "ff3366",
    },
    {
      name: "Metal Gear Solid Alert",
      slug: "metal-gear-solid-alert",
      sound: "http://www.myinstants.com/media/sounds/tindeck_1.mp3",
      color: "FF0000",
      image:
        "http://www.myinstants.com/media/instants_images/metal-gear-alert.jpg",
    },
    {
      name: "omae wa mou shindeiru NANI",
      slug: "omae-wa-mou-shindeiru-nani-494",
      sound: "http://www.myinstants.com/media/sounds/nani_Pmxf5n3.mp3",
      color: "FF0000",
    },
    {
      name: "Buzzer",
      slug: "buzzer-89244",
      sound:
        "http://www.myinstants.com/media/sounds/wrong-answer-sound-effect.mp3",
      color: "cc0099",
    },
    {
      name: "John Cenaaaaaa",
      slug: "john-cenaaaaaa",
      sound:
        "http://www.myinstants.com/media/sounds/and-his-name-is-john-cena-1.mp3",
      color: "FF0000",
    },
    {
      name: "Shut up!",
      slug: "shut-up",
      sound: "http://www.myinstants.com/media/sounds/shutup.swf.mp3",
      color: "cc6699",
    },
    {
      name: "nope.avi",
      slug: "nopeavi",
      sound: "http://www.myinstants.com/media/sounds/engineer_no01.mp3",
      color: "FF0000",
    },
    {
      name: "Tuturu",
      slug: "tuturu",
      sound: "http://www.myinstants.com/media/sounds/tuturu_1.mp3",
      color: "FF0000",
      image:
        "http://www.myinstants.com/media/instants_images/1340305905201.png",
    },
  ]);

  const playAudio = (url) => {
    const audio = new Audio(url);
    audio.play();
  };
  return (
    <div className="flex flex-wrap justify-center w-full mt-12 mx-2 md:mt-20 md:mx-16">
      {sounds.map((s) => (
        <button
          key={s.slug}
          onClick={() => {
            playAudio(s.sound);
          }}
          className="bg-yellow-600 rounded m-3 p-3 md:p-5 hover:bg-yellow-700"
        >
          {s.name}
        </button>
      ))}
    </div>
  );
}
