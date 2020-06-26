import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <div className="flexing">
        <div>
          <img src="images/graduate 1.png" alt="graduate"></img>
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
            <input type="text" className="searchtext" placeholder="Search"></input>
            <img src="images/search 1 (2).svg" alt="graduate" className="searchicon"></img>
        </div>
      </div>
    </div>
  );
}
export default Header;
