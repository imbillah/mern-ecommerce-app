import React, { Fragment } from "react";
import Announcement from "../components/Announcement";
import ImageSlider from "../components/ImageSlider";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <Fragment>
      <Announcement />
      <Navbar />
      <ImageSlider />
    </Fragment>
  );
};

export default Home;
