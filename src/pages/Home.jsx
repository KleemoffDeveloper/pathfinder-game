import "./Home.css";
// import logo from "../assets/pathfinder-no-bg.png";
import { useEffect } from "react";

export default function Home() {
  async function typewriterAnimation() {
    const typewriters = document.body
      .querySelector(".typewriter-container")
      .querySelectorAll(".typewriter");
    for (let i = 0; i < typewriters.length; i++) {
      let seconds = typewriters[i].textContent.length / 10;
      typewriters[i].classList.add("typewriter-caret");
      typewriters[
        i
      ].style.animation = `typing ${seconds}s steps(${typewriters[i].textContent.length}), cursor 0.4s step-end infinite alternate`;
      typewriters[i].classList.remove("hidden");
      await new Promise((resolve) => setTimeout(resolve, seconds * 1000));
      if (i < typewriters.length - 1) {
        typewriters[i].classList.remove("typewriter-caret");
      }
    }
  }

  useEffect(() => {
    typewriterAnimation();
  }, []);

  return (
    <div className="home grid py-10 gap-10 place-items-center min-h-screen">
      <div className="main mx-10 md:mx-5 grid place-items-center gap-10 py-20 text-center">
        <div className="logo grid place-items-center">
          <img src={logo} className="h-max" />
        </div>
        <div className="typewriter-container grid gap-5 place-items-center">
          <h1 className="typewriter typewriter-caret">
            Experience story-telling
          </h1>
          <h1 className="typewriter hidden">powered by ChatGPT & Dall-E.</h1>
        </div>
        <div className="grid grid-flow-col gap-5">
          <button>Start Your Adventure</button>
          <button>How to Play</button>
        </div>
      </div>
      <hr className="w-11/12" />
      <div className="grid gap-5 py-5 rounded-xl w-11/12 md:w-4/6">
        <h1 className="text-center">Fully Dynamic Story</h1>
        <p className="mx-5 md:text-center">
          PathFinder takes a modern approach to decision-based story games. Our
          app allows you to play through various scenarios with your path
          changing based on every choice you make. We implement OpenAI's ChatGPT
          API to give you a fresh experience every time you play.
        </p>
      </div>
      <div className="grid gap-5 py-5 rounded-xl w-11/12 md:w-4/6">
        <h1 className="text-center">The Future of Gaming</h1>
        <p className="mx-5 md:text-center">
          Artifical Intelligence is continuing to grow and extend the
          possibilites of gaming. We believe AI will play a significant role in
          making video games truly immersive.
        </p>
      </div>
      <hr className="w-11/12" />
      <h1 className="text-center">Contact Us</h1>
      <form className="shadow-xl border rounded grid gap-10 py-5 w-11/12 md:max-w-4xl">
        <div className="grid gap-1 mx-5">
          <label className="mx-1">Email</label>
          <input type="text" placeholder="example@mail.com" className="p-2" />
        </div>
        <div className="grid gap-1 mx-5">
          <label className="mx-1">Message</label>
          <input type="text" placeholder="Type here..." className="p-2" />
        </div>
        <div className="flex justify-center mx-5">
          <button className="px-10">Submit</button>
        </div>
      </form>
    </div>
  );
}