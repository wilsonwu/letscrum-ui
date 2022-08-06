import React from "react";
import {Header, Footer, Card} from '../../components'
import TaskCard from "../../components/TaskCard/TaskCard";

export const CardList = () => {
  return (
    <>
      <Header />
      <TaskCard />
      <Footer />
    </>
  )
}