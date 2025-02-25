import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const ContactData = [
  {
    id: 1,
    icone: <MdOutlineMail />,
    title: "Email",
    info: "Ahmedfathalla@gmail.com",
    link: "mailto:ahmedfathalla1221@gmail.com",
  },
  {
    id: 2,
    icone: <RiFacebookCircleLine />,
    title: "Facebook",
    info: "Ahmed Fathalla",
    link: "https://www.facebook.com/ahmed.fathalla.370515",
  },
  {
    id: 3,
    icone: <FaWhatsapp />,
    title: "WhatsApp",
    info: "0123456789",
    link: "https://api.whatsapp.com/send?phone=201272652239",
  },
];

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setErorr] = useState("");
  const form = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      setErorr("You must enter a value before submitting!");
    } else {
      setErorr("");
      alert("Submitted successfully!");
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_vxx2zt8",
      "template_ov31hjn",
      form.current,
      "Hkj5itfTkKRbXgz76"
    );
    e.target.reset();
  };
  return (
    <section className="contact" id="contact">
      <div className="top_section">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>
      <div className="container contact_container">
        <div className="contact_options">
          {ContactData.map(({ id, icone, title, info, link }) => (
            <article key={id} className="contact_option">
              {icone}
              <h4>{title}</h4>
              <h5>{info}</h5>
              <a target="_blank" href={link}>
                Send Message
              </a>
            </article>
          ))}
        </div>
        <form onSubmit={sendEmail} ref={form}>
          <input
            onChange={onChangeName}
            value={name}
            name="name"
            type="text"
            placeholder="Enter Your Full Name"
          />
          <input
            value={email}
            onChange={onChangeEmail}
            name="email"
            type="email"
            placeholder="Enter Your Email"
          />
          <textarea
            value={message}
            onChange={onChangeMessage}
            name="message"
            placeholder="Enter Your Message"
            rows={10}
          ></textarea>
          <button
            onClick={handleClick}
            type="submit"
            className="btn btn-primray"
          >
            Send Message
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
