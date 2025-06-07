import Button from "../Button/Button"
import styles from "./ContactForm.module.css"
import { BiMessageDetail } from "react-icons/bi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";
import { useState } from "react";


const ContactForm = () => {
    const [name, setName] = useState("Akhil");
    const [email, setEmail] = useState("chgyaneswar1971@mgmail.com");
    const [text, setText] = useState("Hello Everyone");

    const onSubmit = (event) =>{
        event.preventDefault();
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
    };
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.contact_form}`}>
        <div className={`${styles.top_btn}`}>
            <Button text={"VIA SUPPORT CHAT"} icon={<BiMessageDetail fontSize="24px"/>}/>
             <Button text={"VIA CALL"} icon={<BiSolidPhoneCall fontSize="24px"/>}/>
        </div>
        <Button isOutline={true} text={"VIEW EMAIL FORM"} icon={<MdOutlineMail fontSize="24px"/>}/>
        <form onSubmit={onSubmit}>
            <div className={styles.form_control}>
                <label htmlFor="name">Name</label>
                <input type="name" name="name"/>
            </div>
            <div className={styles.form_control}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email"/>
            </div>
            <div className={styles.form_control}>
                <label htmlFor="text">Text</label>
                <textarea name="text" rows="8"/>
            </div>
            <div style={{display: "flex",
                         justifyContent:"end",}}>
                            <Button text="Submit" />
                         </div>
             <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="\images\Service 24_7-pana 1.svg" alt="contact image" />
      </div>
    </div>
  )
}

export default ContactForm
