import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function HomeComponent() {
  const [text] = useTypewriter({
    words: ["Hello", "Hi"],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 30,
    delaySpeed: 2000,
  });

  return (
    <main className="w-full h-96 flex flex-col justify-center items-center md:px-40">
      <div>
        <h1 className="text-4xl font-bold text-center text-violet-700 mb-6">
          Coding Chalenges!
        </h1>
        <h2 className="text-3xl text-stone-500 font-bold mb-4 text-center">
          {text}{" "}
          <Cursor
            cursorBlinking="true"
            cursorStyle=" | "
            cursorColor="#5b21b6"
          />
        </h2>
      </div>
      <div>
        <p className="text-lg text-slate-300 text-center">
          I created this page to practice a few Coding chalenges, and to hone my
          JavaScript, HTML, CSS and React skills.
        </p>
      </div>
    </main>
  );
}
