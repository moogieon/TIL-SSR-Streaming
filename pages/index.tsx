import type { NextPage } from "next";
import { lazy, Suspense } from "react";
import Spinner from "./spinner";
import ToDoInputPage from "./todoInput";
import ToDoListPage from "./todoList";

// const ContentsPage = lazy(() => import("./contents"));
// const ContentsPage = dynamic(() => import("./contents"), { suspense: true });
const Home: NextPage = () => {
  /* This example requires Tailwind CSS v2.0+ */
  // const Profile = dynamic(() => import('./profile'), { suspense: true })

  return (
    <>
      <main className="p-20 border-2 container bg-green-300">
        <h1 className="text-6xl text-red-500">TODO</h1>
        <ToDoInputPage />
        <Suspense fallback={<Spinner />}>
          <ToDoListPage />
        </Suspense>
      </main>
    </>
  );
};

export default Home;
