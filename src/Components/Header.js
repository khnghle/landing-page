import React from 'react';

function Header() {
  return (
    <div className="nav-bar">
      <div className="nav-bar__title">
        <h3>Mintbean Learn'a'bit</h3>
        <div className="nav-bar__side-header">"bit by bit is a Megabit"</div>
      </div>

      <div className="nav-bar__links">
        <ul className="nav-bar__link-list">
          <li>Intro</li>
          <li>About</li>
          <li>Team</li>
          <li>Contact</li>
        </ul>
        <button className="project__button">Join</button>
      </div>
    </div>
  );
}

export default Header;
