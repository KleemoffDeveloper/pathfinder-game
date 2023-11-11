import "./Footer.css";

const developers = [
  {
    name: "Berlin Rivas",
    linkedin: "https://www.linkedin.com/in/berlinrivas/",
  },
  {
    name: "Frantz-Sebastien Mathias",
    linkedin: "https://www.linkedin.com/in/frantz-sebastien-mathias-38085189/",
  },
  {
    name: "Wai Leong Chong",
    linkedin: "https://www.linkedin.com/in/wai-leong-chong/",
  },
  {
    name: "Silis Kleemoff",
    linkedin: "https://www.linkedin.com/in/silis-kleemoff/",
  },
];

export default function Footer() {
  return (
    <footer className="grid gap-10 place-items-center md:grid-flow-col md:grid-cols-3 py-5 bg-slate-900">
      <div className="mx-5 w-max text-center grid gap-2">
        <h2 className="font-semibold text-xl">Developers</h2>
        <hr />
        <ul>
          {developers.map((dev) => (
            <li>
              <a href={dev.linkedin} target="_blank">
                {dev.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-5 w-max text-center grid gap-2">
        <h2 className="font-semibold text-xl">Our Integrations</h2>
        <a href="https://openai.com/blog/chatgpt" target="_blank">
          ChatGPT 3.5 Turbo
        </a>
        <a href="https://openai.com/research/dall-e" target="_blank">
          Dall-E
        </a>
      </div>

      <div className="mx-5 w-max text-center grid gap-2">
        <h2 className="font-semibold text-xl">More Info</h2>
        <a>Privacy Policy</a>
        <a>About</a>
      </div>
    </footer>
  );
}
