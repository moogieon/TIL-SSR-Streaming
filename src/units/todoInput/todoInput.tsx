import type { NextPage } from "next";
import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ToDoInput: NextPage = () => {
  const [token, setToken] = useState(false);
  const YOUR_KEY = process.env.NEXT_PUBLIC_SITE_KEY;
  function onChange() {
    setToken(true);
  }
  return (
    <article className="my-10">
      <div className="text-red-400 text-3xl">
        <input placeholder="what to do?" className="px-4 py-10 my-10"></input>
      </div>
      <ReCAPTCHA
        sitekey={"6LdAGiUeAAAAAD5bQKxNB-OMFdwWTg85iua5I8wr"}
        onChange={onChange}
      />
      {token && <button className="h-10 w-40 border-2 bg-white">메일 보내기</button>}
    </article>
  );
};

export default ToDoInput;
