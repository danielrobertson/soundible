export default function Sounds({ sounds = [] }) {
  const playAudio = (url) => {
    const audio = new Audio(url);
    audio.play();
  };

  return (
    <div className="flex flex-wrap justify-center mt-12 mx-2 md:mt-20 md:mx-16">
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
