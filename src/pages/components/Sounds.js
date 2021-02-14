import { useState } from "react";

export default function Sounds() {
  const [sounds, setSounds] = useState([
    {
      label: "Horn",
    },
    {
      label: "Finish him",
    },
    {
      label: "Round One Fight 👊",
    },
    {
      label: "Hadouken",
    },
    {
      label: "It's Britney Bitch",
    },
    {
      label: "Careless Whisper 🎷",
    },
    {
      label: "Error",
    },
  ]);
  return (
    <div className="flex flex-wrap justify-center w-full mt-12 mx-2 md:mt-20 md:mx-16">
      {sounds.map((s) => (
        <button
          key={s.label}
          className="bg-yellow-600 rounded m-3 p-3 md:p-5 hover:bg-yellow-700"
        >
          {s.label}
        </button>
      ))}
    </div>
  );
}
