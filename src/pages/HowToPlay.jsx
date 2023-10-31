import "./HowToPlay.css";

export default function HowToPlay() {
  return (
    <div className="how-to-play mx-5 border-x grid py-10 gap-10 place-items-center min-h-screen">
      <h1 className="text-center border-b w-full py-5">How To Play</h1>
      <div className="gif-container border-b py-10 w-full place-items-center grid gap-5">
        <div className="gif border md:rounded-3xl overflow-hidden shadow-xl">
          <img src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif" />
        </div>
        <h2 className="font-semibold text-lg border-b">
          1. Click on Start Your Adventure
        </h2>
      </div>

      <div className="gif-container border-b py-10 w-full place-items-center grid gap-5">
        <div className="gif border md:rounded-3xl overflow-hidden shadow-xl">
          <img src="https://bs.uenicdn.com/blog/wp-content/uploads/2018/04/giphy.gif" />
        </div>
        <h2 className="font-semibold text-lg border-b">
          2. Choose your path to progress through the story
        </h2>
      </div>

      <div className="gif-container border-b py-10 w-full place-items-center grid gap-5">
        <div className="gif border md:rounded-3xl overflow-hidden shadow-xl">
          <img src="https://gifdb.com/images/high/pikachu-thunderbolt-attack-mb7705xevk0jcmrx.gif" />
        </div>
        <h2 className="font-semibold text-lg border-b">
          3. Complete your journey & earn points
        </h2>
      </div>

      <div className="gif-container border-b py-10 w-full place-items-center grid gap-5">
        <div className="gif border md:rounded-3xl overflow-hidden shadow-xl">
          <img src="https://media.tenor.com/JQkWX-lI-b0AAAAd/pokemon-pikachu.gif" />
        </div>
        <h2 className="font-semibold text-lg border-b">
          4. Create an account to save your story (Optional)
        </h2>
      </div>
    </div>
  );
}
