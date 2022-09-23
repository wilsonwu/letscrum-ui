import React from "react";
import { Main } from "../../layouts/Main";

export const Home = () => {
  return (
    <Main>
      <ul>
        <li><a href="/workitemList">Work Items List</a></li>
        <li><a href="/create/Bug">Create Bug</a></li>
        <li><a href="/projectList">Projects List</a></li>
        <li><a href="/userName/projectName">Project Sumary</a></li>
      </ul>
    </Main>
  );
}