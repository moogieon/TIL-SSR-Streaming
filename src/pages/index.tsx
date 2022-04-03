import type { GetServerSideProps, NextPage } from "next";
import { lazy, Suspense } from "react";
import {
  loadQuery,
  PreloadedQuery,
  usePreloadedQuery,
  useQueryLoader,
} from "react-relay";
import { RelayProps, withRelay } from "relay-nextjs";
import { graphql } from "relay-runtime";
import useScrollFadeIn from "../components/hooks/useScrollFadeIn";
import { getClientEnvironment } from "../lib/clientEnvironment";
import DndTest from "./dnd";
import GraphTest from "./graphTest/graphTest";
import Spinner from "./spinner";
import ToDoInputPage from "./todoInput";
import ToDoListPage from "./todoList";
import { pagesQuery as pagesQueryType } from "./__generated__/pagesQuery.graphql";

const query = graphql`
  query pagesQuery {
    viewer {
      ...todoListComponent_user
    }
  }
`;

interface Props {
  initialQueryRef: PreloadedQuery<pagesQueryType>;
}

const Home: NextPage<RelayProps<{}, pagesQueryType>> = ({ preloadedQuery }) => {
  const data = usePreloadedQuery(query, preloadedQuery);

  return (
    <>
      {/* <GraphTest /> */}
      <DndTest />

      {/* <main className="p-20 border-2 container bg-green-300">
        <h1 className="text-6xl text-red-500">TODO</h1>
        <ToDoInputPage />
        <Suspense fallback={<Spinner />}>
          <ToDoListPage fragment={data.viewer} />
        </Suspense>
      </main> */}
    </>
  );
};

export default withRelay(Home, query, {
  fallback: <Spinner />,
  createClientEnvironment: () => getClientEnvironment()!,
  createServerEnvironment: async () => {
    const { createServerEnvironment } = await import(
      "../lib/serverEnvironment"
    );
    return createServerEnvironment();
  },
});
