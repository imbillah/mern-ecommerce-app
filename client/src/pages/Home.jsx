import React, { Fragment } from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";
import Navbar from "../components/Navbar";
import NewsLeter from "../components/NewsLeter";
import Products from "../components/Products";

const Home = () => {
  return (
    <Fragment>
      <Announcement />
      <Navbar />
      <ImageSlider />
      <Categories />
      <Products />
      <NewsLeter />
      <Footer />
    </Fragment>
  );
};

export default Home;
