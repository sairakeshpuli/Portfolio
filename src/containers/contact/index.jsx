import React ,{useState}from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify"; // Import toast container and methods
import "react-toastify/dist/ReactToastify.css"; 


const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Rakesh",
      message:message
  
    }

    const serviceId =  "service_rhltndc"
    const templateId = "template_cc6zbmp"
    const userId =  "KJ_icJWkNkIwz5lZG"
    emailjs
      .send(
        serviceId,
        templateId,
        templateParams,
        userId

      )
      .then(
        (result) => {
          toast.success("Email sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );

  }
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact__content__form">
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required
                  name="name"
                  className="inputName"
                  type={"text"}
                 value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  name="email"
                  className="inputEmail"
                  type={"text"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  name="description"
                  className="inputDescription"
                  type={"text"}
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <label htmlFor="description" className="descriptionLabel">
                  Description
                </label>
              </div>
            </div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </Animate>
      </div>
      <ToastContainer />
    </section>
  );
};
export default Contact;
