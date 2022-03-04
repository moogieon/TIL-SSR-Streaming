import type { NextPage } from "next";
import { FC, useEffect, useState } from "react";
import { useFragment, useLazyLoadQuery } from "react-relay";
import { graphql } from "relay-runtime";

export interface Props {}

const ToDoList: FC<Props> = () => {
  return (
    <article className="">
      <div className="text-red-400 text-3xl">List</div>
    </article>
  );
};

export default ToDoList;
