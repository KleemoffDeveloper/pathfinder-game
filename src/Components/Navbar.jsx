import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="w-full flex items-center justify-between p-5 text-white position: fixed">
      <Link to="/" className="text-xl flex">
        <div className="logo"></div>
        <div className="mt-1">
          <h1 className="uppercase leading-loose tracking-wider font-bold">Pathfinder</h1>
        </div>
      </Link>

      <div className="w-3/12 flex justify-between">
        <Link to="/" className="text-md px-6 py-2 hover:bg-blue-700 rounded transition-colors">
          Home
        </Link>
        <Link to="/about" className="text-md px-6 py-2 hover:bg-blue-700 rounded transition-colors">
          About
        </Link>
        <Link to="/login" className="text-md px-6 py-2 hover:bg-blue-700 rounded transition-colors">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;