import React from "react";
import { Main } from "../../layouts/Main";

export const Home = () => {
  return (
    <Main>
      <ol>
        <li><a href="/workitemList">work item List</a></li>
        <li><a href="/create/Bug">create Bug</a></li>
      </ol>
    </Main>
  );
}