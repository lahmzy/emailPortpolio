import React from "react";
import { Link } from "react-router-dom";
import GettingStarted from "./GettingStarted";
import Hero from "./Hero";
import PageProfile from "./PageProfile";


const Home = () => {
  return (
    <>
      <Hero />
      <GettingStarted />
      <PageProfile />
    </>
  );
};

export default Home;
