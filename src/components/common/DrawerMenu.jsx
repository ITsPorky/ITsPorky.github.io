import React, { Children, useState } from 'react';

const DrawerMenu = ({props, children}) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <header>
      {/* Desktop Menu */}
      <nav className="nav-menu">
        <div>
          <a href="/">
            <img src=".\assets\images\Wade-Walsh-logo-white-no-bg.png" alt="Wade Walsh Logo" Style="max-width: 80px" />
          </a>
        </div>
        <ul className="nav-menu-items">
          {Children.map(children, child => {
            return <li>{child}</li>;
          })}
        </ul>
        <div className="nav-menu-toggle-container">
          <div className="nav-menu-toggle" onClick={toggleDrawer}>
            <span class="material-symbols-outlined">menu</span>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-drawer ${isDrawerOpen ? 'open' : ''}`}>
      <div className="nav-menu-toggle-container mobile">
          <div className="nav-menu-toggle mobile" onClick={toggleDrawer}>
            <span class="material-symbols-outlined">close</span>
          </div>
        </div>
        <ul className="nav-menu-items mobile" onClick={toggleDrawer}>
          {Children.map(children, child => {
            return <li>{child}</li>;
          })}
        </ul>
      </div>
    </header>
  );
};

export default DrawerMenu;