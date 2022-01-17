import type { NextPage } from "next";

const ToDoInput: NextPage = () => {
  /* This example requires Tailwind CSS v2.0+ */
  // https://api.mocki.io/v2/c4d7a195/graphql
  return (
    <article className="my-10">
      <div className="text-red-400 text-3xl">
        <input placeholder="what to do?" className="px-4 py-10"></input>
      </div>
    </article>
  );
};

export default ToDoInput;
