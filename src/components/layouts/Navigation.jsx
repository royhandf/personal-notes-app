import React from "react";
import { Link } from "react-router-dom";
import { BiArchive, BiHome } from "react-icons/bi";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/archive" className="nav-icon" title="Archives">
            <BiArchive />
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-icon" title="Home">
            <BiHome />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
