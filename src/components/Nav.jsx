import { Link } from "react-router-dom";

export default function NavComponent() {
  return (
    <header className="flex justify-between">
      <h1 className="font-bold text-2xl bg-clip-text text-transparent bg-violet-600">
        Code <span className="bg-fuchsia-600 bg-clip-text">Quiz</span>
      </h1>
      <nav className="">
        <ul className="flex gap-2 text-xl text-stone-200 font-semibold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>Link</li>
        </ul>
      </nav>
    </header>
  );
}
