import Navbar from "./components/Navbar";

export default function Footer() {
  return (
    <div className="h-50 bg-black/45 py-8 ">
      <div className="flex justify-center h-8 hover:scale-105 ">
        <img src="icons8-ringing-phone-50.png" alt="phone-icon"></img>
        <img src="icons8-twitter-bird.svg" alt="twiter-icon"></img>
        <img src="icons8-instagram-logo.svg" alt="instagram-icon"></img>
        <img src="icons8-facebook.svg" alt="facebook-icon"></img>
        <img src="icons8-linkedin-logo.svg" alt="linkedin"></img>
      </div>
      <div className="py-10 p-10">
        <ul className="flex justify-between hover:scale-105 transform ">
          <li>
            <a href="">Home</a>{" "}
          </li>
          <li>About</li>
          <li>Services</li>
          <li>Blog</li>
          <li>Safety Policy</li>
          <li>Gallery</li>
          <li>List Your Car With Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
}
