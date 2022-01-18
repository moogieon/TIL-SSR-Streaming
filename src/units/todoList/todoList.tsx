import type { NextPage } from "next";
import { FC, useEffect, useState } from "react";
import { useFragment, useLazyLoadQuery } from "react-relay";
import { graphql } from "relay-runtime";
import { todoListComponent_user$key } from "./__generated__/todoListComponent_user.graphql";

export interface Props {
  fragment: todoListComponent_user$key;
}

const ToDoList: FC<Props> = ({ fragment }) => {
  const data = useFragment(
    graphql`
      fragment todoListComponent_user on User {
        login
      }
    `,
    fragment
  );

  return (
    <article className="">
      <div className="text-red-400 text-3xl">List</div>
      <div>
        <div className="mt-3 flex -space-x-2 overflow-hidden">
          <span>{data.login}</span>
          <div className="inline-block h-12 w-12 rounded-full ring-2 ring-white" />
          <img
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
            alt=""
          />
          <img
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <img
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
      </div>
    </article>
  );
};

export default ToDoList;
