import React from "react";
import "./footer.css"
import logo from "../images/footerImages/logo.svg";
import fb from "../images/footerImages/Group 1060.svg"
import ig from "../images/footerImages/Group 1061.svg"

function App() {
  return (
    <footer>
      <div class="logo">
        <img src={logo} />
      </div>

      <div class="info">
        <ul>
          <li>КОНТАКТИ:</li>
          <li>тел: 0897 777 333</li>
          <li>адрес: гр.Варна ул."Някоя си"22</li>
          <li>moonlight_hotel&spa@gmail.com</li>
        </ul>
      </div>
      <div class="icon">
        <ul>
          <li class="fb">
            <a href="https://www.facebook.com/">
            <img src={fb} />
            </a>
            
            
          </li>
          <li class="ig">
          <a href="https://www.instagram.com/">
            <img src={ig} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default App;