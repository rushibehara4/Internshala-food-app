import Header from "../Header";
import "./index.css";

const contacts = () => (
  <div className="contact-background-container">
    <Header />
    <div className="contacts-card-container">
      <form className="form-container">
        <input
          type="text"
          placeholder="Enter your name"
          name="contact-name"
          className="contact-name-input"
          required
        />
        <br />
        <textarea
          name="message"
          id="contactMessage"
          className="contact-text-input"
          cols="50"
          rows="15"
          placeholder="What type of problems u have...!"
          required
        ></textarea>
        <br />
        <button className="contact-button" type="submit">
          Send
        </button>
      </form>
    </div>
  </div>
);

export default contacts;
