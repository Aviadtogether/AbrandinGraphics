import "./Contact.scss";
import "./WhiteContact.scss";
import Button from "../button/button3/button3-component";

import c1920 from "./img2/Desktop/1920w/c.png";
import c1728 from "./img2/Macbook/1728w/c.png";
import c1512 from "./img2/Macbook/1512w/c.png";
import c1440 from "./img2/Desktop/1440w/c.png";
import c1280 from "./img2/Macbook/1280w/c.png";
import c1024 from "./img2/Tablet/1024w/c.png";
import c834 from "./img2/Tablet/834w/c.png";
import c430 from "./img2/iPhone/430w/c.png";
import c390 from "./img2/iPhone/390w/c.png";
import c360 from "./img2/Android/c.png";

const ContactUs = () => {
  const sendEmail = (e) => {};

  return (
    <div className="contact-container white-contact-container">
      <div className="contact-box white-contact-box">
        <h2>aviad@abrandingraphics.com</h2>
        <h2>+972 523153355</h2>
        <h2>HaCarmel 14, Ganey Tikva, Israel</h2>
        <form
          action="https://formsubmit.co/aboutiquestudio@gmail.com"
          method="POST"
          className="contact-form white-contact-form"
        >
          <input
            type="text"
            className="field"
            placeholder="Name"
            name="name"
            required
          />
          <input
            type="email"
            className="field"
            placeholder="Email"
            name="email"
            required
          />
          <input
            type="text"
            className="field"
            placeholder="Subject"
            name="subject"
            required
          />
          <textarea
            placeholder="Message"
            className="field"
            name="message"
            required
          ></textarea>
          <div className="contact-button">
            <Button text="SEND" work={sendEmail} />
          </div>
        </form>
      </div>
      <div>
        <div className="img-1920">
          <p>
            <img src={c1920} alt="" /> 2022 A dev. All rights reserved.
          </p>
        </div>
        <div className="img-1728">
          <p>
            <img src={c1728} alt="" /> 2022 A dev. All rights reserved.
          </p>
        </div>
        <div className="img-1512">
          <p>
            <img src={c1512} alt="" /> 2022 A dev. All rights reserved.
          </p>
        </div>
        <div className="img-1440">
          <p>
            <img src={c1440} alt="" /> 2022 A dev. All rights reserved.
          </p>
        </div>
        <div className="img-1280">
          <p>
            <img src={c1280} alt="" /> 2022 A dev. All rights reserved.
          </p>
        </div>
        <div className="img-1024">
          <p>
            <img src={c1024} alt="" /> 2022 A dev. All rights reserved.
          </p>
        </div>
        <div className="img-834">
          <p>
            <img src={c834} alt="" /> 2022 A dev. All rights reserved.
          </p>
        </div>
        <div className="img-430">
          <p>
            <img src={c430} alt="" /> 2022 A dev. All rights reserved.
          </p>
        </div>
        <div className="img-390">
          <p>
            <img src={c390} alt="" /> 2022 A dev. All rights reserved.
          </p>
        </div>
        <div className="img-360">
          <p>
            <img src={c360} alt="" /> 2022 A dev. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
