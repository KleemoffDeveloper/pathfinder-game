import "./HowToPlay.css";
import logo from "../assets/PathFinder-small.png";

const instructions = [
  {
    gif: "https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif",
    text: "1. Click on Start Your Adventure",
  },
  {
    gif: "https://bs.uenicdn.com/blog/wp-content/uploads/2018/04/giphy.gif",
    text: "2. Choose your path to progress through the story",
  },
  {
    gif: "https://gifdb.com/images/high/pikachu-thunderbolt-attack-mb7705xevk0jcmrx.gif",
    text: "3. Complete your journey & earn points",
  },
  {
    gif: "https://media.tenor.com/JQkWX-lI-b0AAAAd/pokemon-pikachu.gif",
    text: "4. Create an account to save your story (Optional)",
  },
];

export default function HowToPlay() {
  return (
    <div className="how-to-play mx-5 border-x grid place-items-center min-h-screen">
      <h1 className="text-center grid gap-5 bg-slate-700 border-b w-full py-5">
        <p className="mx-5 text-sm">
          <b>— Dev Note:</b> Replace the gifs when all other components are
          finished.
        </p>
        How To Play
      </h1>
      <div className="bg-slate-900 w-full">
        {instructions.map((ins) => (
          <div className="gif-container border-b py-10 w-full place-items-center grid gap-5">
            <div className="gif border md:rounded-3xl overflow-hidden shadow-xl">
              <img src={ins.gif} />
            </div>
            <h2 className="font-semibold text-lg border-b">{ins.text}</h2>
          </div>
        ))}
      </div>
      <div className="start w-full bg-slate-800 grid gap-10 place-items-center text-center py-10">
        <h2 className="text-2xl font-semibold">
          Ready to start your adventure?
        </h2>
        <img src={logo} className="w-32" />
        <button>Start Your Adventure</button>
      </div>
    </div>
  );
}
