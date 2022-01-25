import type { NextPage } from "next";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

const ToDoInput: NextPage = () => {
  const [token, setToken] = useState(false);
  const form = useRef<any>();

  const submitFormAndShowCaptcha = (e: any) => {
    e.preventDefault();
    setToken(true);
  };

  function sendEmail() {
    emailjs
      .sendForm(
        "service_m82vubt",
        "template_9jgwop1",
        form.current,
        "user_jpanIlQa9WoviTZZHASi2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div className="my-10">
      <div className="text-red-400 text-3xl">
        <input placeholder="what to do?" className="px-4 py-10 my-10"></input>
      </div>
      <form onSubmit={submitFormAndShowCaptcha} ref={form}>
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" className="border-2" />
        {token && (
          <ReCAPTCHA
            name={"g-recaptcha-response"}
            sitekey={"6LdAGiUeAAAAAD5bQKxNB-OMFdwWTg85iua5I8wr"}
            onChange={sendEmail}
          />
        )}
      </form>
    </div>
  );
};

export default ToDoInput;
