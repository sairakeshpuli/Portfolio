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
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });
  const validateForm = () => {
    const newErrors = { name: "", email: "", message: "" };

    // Validate Name
    if (!name) {
      newErrors.name = "Name is required";
    }

    // Validate Email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!emailPattern.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Validate Message
    if (!message) {
      newErrors.message = "description is required";
    } else if (message.length < 10) {
      newErrors.message = "description should be at least 10 characters long";
    }

    setErrors(newErrors);

    // Return whether the form is valid or not
    return Object.values(newErrors).every((error) => error === "");
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
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

  }
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact"
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
                {errors.name && <p className="error">{errors.name}</p>}

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
                {errors.email && <p className="error">{errors.email}</p>}

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
                {errors.message && <p className="error">{errors.message}</p>}

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
