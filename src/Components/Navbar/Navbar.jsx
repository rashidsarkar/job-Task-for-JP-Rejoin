import { Link } from "react-router-dom";

function Navbar() {
  const links = (
    <>
      <Link to="/">
        <a>Home</a>
      </Link>
      <Link to="/colleges">
        <a>Colleges</a>
      </Link>
      <Link to="/admission">
        <a>Admission</a>
      </Link>
      <Link to="/my-college">
        <a>My College</a>
      </Link>
    </>
  );

  return (
    <>
      <div className="navbar bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="text-xl btn btn-ghost">
            <img src="logo.png" alt="" className="h-12" />
          </a>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 font-semibold md:gap-4 md:text-base menu menu-horizontal">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-xs input input-bordered"
        />
      </div>
    </>
  );
}

export default Navbar;
