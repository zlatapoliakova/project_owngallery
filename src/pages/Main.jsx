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
  const [searchQuery, setSearchQuery] = useState("");
  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div>
      <Header />
      <div className="search">
        <Filter className="main__filter" onClick={togglePanel} />
        <Input
          className="input__search"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search here"
        />
      </div>
      <hr className="line" />
      <div className={`content ${isPanelOpen ? "shifted" : ""}`}>
        <PostList hideButtons={true} searchQuery={searchQuery} />
      </div>
      <Footer />
      <SidePanel isOpen={isPanelOpen} onClose={togglePanel} />
    </div>
  );
};

export default Main;
