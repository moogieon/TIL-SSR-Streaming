import type { NextPage } from "next";
import { useEffect, useState } from "react";
import {
  GoogleReCaptcha,
  GoogleReCaptchaProvider,
} from "react-google-recaptcha-v3";

const ToDoInput: NextPage = () => {
  const [token, setToken] = useState();
  return (
    <article className="my-10">
      <div className="text-red-400 text-3xl">
        <input placeholder="what to do?" className="px-4 py-10"></input>
      </div>

      <GoogleReCaptcha onVerify={token} />
    </article>
  );
};

export default ToDoInput;
