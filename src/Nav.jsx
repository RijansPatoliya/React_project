import React from 'react'

const App = () => {
  return (
    <div>
      <div id="top-line">
        <div id="text-slide">
          <div className="text">
            <marquee direction="left">
              <p>APP EXCLUSIVE FESTIVAL SALE IS NOW LIVE! DOWNLOAD APP</p>
            </marquee>
          </div>
        </div>
      </div>

      <nav>
        <div id="bar">
          <img src="./menu.png" alt="Menu" />
        </div>
        <div id="snitch-logo">
          <img src="./SNITCH_LOGO_NEW_BLACK.png" alt="Logo" />
        </div>
        <div id="nav-right">
          <i className="fa-regular fa-user"></i>
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-regular fa-heart"></i>
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
      </nav>
      </div>
  );
};

export default App;

