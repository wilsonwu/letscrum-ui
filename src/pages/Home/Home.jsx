import React from "react";
import { Main } from "../../layouts/Main";

export const Home = () => {
  return (
    <Main>
      <ol>
        <li><a href="/workitemList">Work Items List</a></li>
        <li><a href="/create/Bug">Create Bug</a></li>
        <li><a href="/projectList">Projects List</a></li>
      </ol>
    </Main>
  );
}