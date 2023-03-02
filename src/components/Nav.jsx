import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export default function NavComponent() {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <header className="flex justify-between w-auto px-4 md:px-40 py-5 border-b border-stone-200 md:w-100">
      <h1 className="font-bold text-2xl bg-clip-text text-transparent bg-violet-600">
        Code <span className="bg-fuchsia-600 bg-clip-text">Quiz</span>
      </h1>
      <nav className="">
        <ul className="flex gap-8 text-xl text-stone-200 font-semibold">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
