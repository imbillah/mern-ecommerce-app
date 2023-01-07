import React, { Fragment } from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import ImageSlider from "../components/ImageSlider";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

const Home = () => {
  return (
    <Fragment>
      <Announcement />
      <Navbar />
      <ImageSlider />
      <Categories />
      <Products />
    </Fragment>
  );
};

export default Home;
