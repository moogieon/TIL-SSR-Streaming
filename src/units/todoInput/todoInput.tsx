import type { NextPage } from "next";
import { useReducer, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
const initialState = {
  name: "",
  email: "",
  message: "",
};



const ToDoInput: NextPage = () => {
  const [token, setToken] = useState(false);

  const submitFormAndShowCaptcha = (e) => {
    // e.preventDefault();
    // setToken(true);
  };
  const [formState, dispatch] = useState(initialState);
  function sendEmail(e: any) {
    e.preventDefault();

    // const params = { ...formState, "g-recaptcha-response": value };
    emailjs
      .sendForm(
        "service_m82vubt",
        "template_9jgwop1",
        formState,
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
    <article className="my-10">
      <div className="text-red-400 text-3xl">
        <input placeholder="what to do?" className="px-4 py-10 my-10"></input>
      </div>
      <form onSubmit={sendEmail}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => dispatch()}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={(e) => dispatch()}
        />
        <label>Message</label>
        <textarea
          name="message"
          onChange={(e) => dispatch({ type: "message", value: e.target.value })}
        />
        <input type="submit" value="Send" className="border-2" />
      </form>
      {token && (
        <ReCAPTCHA
          sitekey={"6LdAGiUeAAAAAD5bQKxNB-OMFdwWTg85iua5I8wr"}
          onChange={sendEmail}
        />
      )}
    </article>
  );
};

export default ToDoInput;
