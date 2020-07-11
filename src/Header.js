import React, { useState } from "react";
import "./Header.css";
import { BsList } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

function Header() {
  const [nav, setNav] = useState(0);
  const [search, setSearch] = useState(0);
  const navigate = () => {
    if (nav === 1) {
      setNav(0);
    } else {
      setNav(1);
    }
  };
  const searching = () => {
    if (search === 1) {
      setSearch(0);
    } else {
      setSearch(1);
      setNav(0);
    }
  };
  return (
    <div style={{ backgroundColor: "#161625" }}>
      <div className="flexing">
        <div className="logo">
          <img src="images/Delopus logo 1 2.svg" alt="graduate"></img>
        </div>

        <div className="nav">
          <div>
            <p>Home</p>
          </div>
          <div className="divider">
            <p>|</p>
          </div>
          <div>
            <p>MyProfile</p>
          </div>
          <div className="divider">
            <p>|</p>
          </div>
          <div>
            <p>Competitions</p>
          </div>
          <div className="divider">
            <p>|</p>
          </div>
          <div>
            <p>Leaderboard</p>
          </div>
        </div>
        <div className="search">
          <input
            type="text"
            className="searchtext"
            placeholder="Search"
          ></input>
          <img
            src="images/search 1 (2).svg"
            alt="graduate"
            className="searchicon"
          ></img>
        </div>
        
          
          
          <img
            src="images/search 1 (2).svg"
            alt="graduate"
            className="searchicon2"
            onClick={searching}
          ></img>
          {(search===1) && <input
            type="text"
            className="searchtext"
            placeholder="Search"
          ></input>}
          <IconContext.Provider
            value={{
              size: "8%",
              color: "#F3990F",
            }}
          >
            
            {search===0 && <BsList className="hamburg" onClick={navigate} />}
          </IconContext.Provider>
      </div>
      {nav === 1 && (
        <div className="links">
          <p>Home</p>
          <p>My Profile</p>
          <p>Competitions</p>
          <p>Leaderboard</p>
        </div>
      )}
    </div>
  );
}
export default Header;
