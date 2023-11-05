// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
// import fb from "../assets/facebook.svg";
// import instagram from "../assets/instagram.svg";
// import linkedin from "../assets/linkedin.svg";
import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoInstagram,
} from "react-icons/bi";

function Footer() {
  return (
    <div className="footer">
      <hr />
      <div className="sb_footer_section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div">
            <h4>Headquarters</h4>
            <a href="https://www.google.com/maps/place/The+Promenade/@-1.2564152,36.8048433,17z/data=!3m1!4b1!4m6!3m5!1s0x182f171ef5b4adf7:0x6a631a5a40e1cfee!8m2!3d-1.2564152!4d36.8048433!16s%2Fg%2F11j7q78jh8?entry=ttu">
              <p>
                The Promenade, 19 General
                <br />
                Mathenge Road
                <br />
                Nairobi, Kenya
              </p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Contact</h4>

            <a>
              <p>
                T +254 78 92 27 755 <br></br>E info@elewa.ke
              </p>
            </a>
          </div>

          <div className="sb_footer-links_div">
            <h4>Navigation</h4>

            <a href="/About">
              <p>About us</p>
            </a>

            <a href="/Social-impact">
              <p>Social impact</p>
            </a>

            <a href="/Invest">
              <p>Invest</p>
            </a>

            <a href="/News">
              <p>News</p>
            </a>

            <a href="/Contact">
              <p>Contact</p>
            </a>
          </div>

          <div className="sb_footer-links_div">
            <h4>Brands</h4>

            <a href="https://elewa.education/home">
              <p>Elewa</p>
            </a>

            <a href="https://italanta.net/">
              <p>iTalanta</p>
            </a>

            <a href="https://elewa.ke/venture-labs">
              <p>Venture labs</p>
            </a>
          </div>

          <div className="sb_footer-links_div">
            <h4>Privacy</h4>

            <a href="Terms">
              <p>Terms and conditions</p>
            </a>

            <a href="Cookies">
              <p>Cookie preferences</p>
            </a>
          </div>
        </div>

        <div className="socialmedia">
          <a href="https://www.facebook.com/elewa.ke/">
            <span>
              <BiLogoFacebook />
            </span>
          </a>
          <a href="https://www.instagram.com/elewa_education/">
            <span>
              <BiLogoInstagram />
            </span>
          </a>
          <a href="https://www.linkedin.com/company/elewa/">
            <span>
              <BiLogoLinkedin />
            </span>
          </a>
        </div>
        <div>
            <h2 className="title">Elewa</h2>
        </div>
      </div>
    </div>
  );
}

export default Footer;
