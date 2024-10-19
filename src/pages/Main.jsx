import "../components/App.scss";

import React, { useState } from "react";

import PostList from "../components/PostList";
import Filter from "../components/UI/filter/Filter";
import Footer from "../components/UI/footer/Footer";
import Header from "../components/UI/header/Header";
import Input from "../components/UI/input/Input";
import SidePanel from "../components/UI/sidepanel/SidePanel";

const Main = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };
  return (
    <div>
      <Header />
      <div className="search">
        <Filter onClick={togglePanel} />
        <Input className="input__search" placeholder="Search here" />
      </div>
      <hr className="line" />
      <div className={`content ${isPanelOpen ? "shifted" : ""}`}>
        <PostList hideButtons={true} />
      </div>
      <Footer />
      <SidePanel isOpen={isPanelOpen} onClose={togglePanel} />
    </div>
  );
};

export default Main;
