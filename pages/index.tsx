import type { NextPage } from "next";
import { lazy, Suspense } from "react";
import Spinner from "../src/components/spinner";
import ContentPage from "./contents";

// const ContentsPage = lazy(() => import("./contents"));
// const ContentsPage = dynamic(() => import("./contents"), { suspense: true });
const Home: NextPage = () => {
  /* This example requires Tailwind CSS v2.0+ */
  // const Profile = dynamic(() => import('./profile'), { suspense: true })

  return (
    <>
      <main className="p-20 border-2 container bg-green-300">
        <div className="text-red-700 ">1000</div>

        <Suspense fallback={<Spinner />}>
          <ContentPage />
        </Suspense>
      </main>
    </>
  );
};

export default Home;
